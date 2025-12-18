'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Configuration for Google Apps Script integration
const FORM_CONFIG = {
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwbqHjDPmb9R-65my-JrBifQ50rQRWk2-zsel451XwYGT4tdU3gLx-HZjQx5Lp26R67/exec',
  COMPANY_NAME: 'Apilets',
  CONTACT_EMAIL: 'info@apilets.com',
};

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional().refine(
    (val) => !val || /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(val),
    { message: 'Please enter a valid phone number' }
  ),
  brief: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must be less than 500 characters'),
  newsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Prepare payload matching Google Apps Script requirements
      const payload = {
        fullName: data.fullName,
        email: data.email,
        company: data.company || '',
        phone: data.phone || '',
        platform: '',
        brief: data.brief,
        interest: 'Contact Form',
        newsletter: data.newsletter || false,
      };

      // Submit to Google Apps Script
      await fetch(FORM_CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Track with Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
        });
      }

      // Redirect to thank you page with email parameter
      router.push(`/thank-you?email=${encodeURIComponent(data.email)}`);

    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(
        'Connection failed. Please check your internet and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        {/* Get In Touch and Schedule Meeting Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Get In Touch Section - Now with Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-center">Get In Touch</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 font-semibold mb-1">✗ Submission Failed</p>
                    <p className="text-red-700 text-sm">
                      {errorMessage || `Something went wrong. Please try again or email us at ${FORM_CONFIG.CONTACT_EMAIL}`}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Company Name"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="brief" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      {...register('brief')}
                      id="brief"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all"
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.brief && (
                      <p className="mt-1 text-sm text-red-600">{errors.brief.message}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">Maximum 500 characters</p>
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-start">
                    <input
                      {...register('newsletter')}
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                      Subscribe to our newsletter for updates and insights
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary-500 text-gray-900 rounded-lg font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    We'll get back to you within 1-2 business days
                  </p>
                </form>

                {/* Contact Information Below Form */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-medium text-lg mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium mr-2">Email:</span>
                      info@apilets.com
                    </p>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium text-lg mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-start">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                          <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                          <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                          <strong>Sunday:</strong> Closed
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule a Meeting Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-center">Schedule a Meeting</h2>
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <div className="w-full h-[600px]">
                  <iframe
                    src="https://calendly.com/calvin-apilets/30min?month=2025-05"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a meeting"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow bg-gray-400">
              <h2 className="font-large text-lg mb-3 font-bold">Australia</h2>
              <p className="text-gray-600">12 Bullard Street</p>
              <p className="text-gray-600">Sydney, NSW</p>
              <p className="text-gray-600">Australia</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow bg-gray-400">
              <h2 className="font-large text-lg mb-3 font-bold">Europe</h2>
              <p className="text-gray-600">Drumderry, Barroe</p>
              <p className="text-gray-600">Sligo, Co. Sligo</p>
              <p className="text-gray-600">Ireland</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow bg-gray-400">
              <h2 className="font-large text-lg mb-3 font-bold">India</h2>
              <p className="text-gray-600">2nd Floor</p>
              <p className="text-gray-600">Muttathottil Building</p>
              <p className="text-gray-600">Edappally, Kerala</p>
              <p className="text-gray-600">India</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
