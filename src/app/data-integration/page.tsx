'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  platform: z.string().min(1, 'Please select a platform'),
  interest: z.string().min(1, 'Please select an area of interest'),
  newsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function DataIntegration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isScrolled, setIsScrolled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/data-integration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        // Track form submission event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'data_nexus_lead_form',
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connect Your Ecommerce Data{' '}
              <span className="text-primary-600">Anywhere</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Seamlessly integrate data from your ecommerce platforms. Sync with marketing and CRM systems in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  scrollToSection('register');
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click_hero_cta', {
                      event_category: 'engagement',
                      event_label: 'hero_get_started',
                    });
                  }
                }}
                className="px-8 py-4 bg-primary-500 text-gray-900 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Data Nexus?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to streamline your data integration workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🔄',
                title: 'Real-Time Sync',
                description:
                  'Keep your data synchronized across all platforms in real-time. No delays, no manual updates.',
              },
              {
                icon: '🔒',
                title: 'Secure & Compliant',
                description:
                  'Enterprise-grade security with full GDPR and SOC 2 compliance. Your data is always protected.',
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description:
                  'Process millions of records efficiently. Built for scale with optimized performance.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrate your ecommerce data in minutes, not months
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                platform: 'Shopify',
                icon: '🛍️',
                description: 'Sync products, orders, and customer data from Shopify stores',
              },
              {
                platform: 'WooCommerce',
                icon: '🔌',
                description: 'Connect WordPress WooCommerce sites seamlessly',
              },
              {
                platform: 'Magento',
                icon: '🏪',
                description: 'Enterprise-grade integration for Magento platforms',
              },
              {
                platform: 'BigCommerce',
                icon: '📦',
                description: 'Real-time data sync with BigCommerce stores',
              },
              {
                platform: 'Salesforce',
                icon: '☁️',
                description: 'Push ecommerce data directly to Salesforce CRM',
              },
              {
                platform: 'HubSpot',
                icon: '📊',
                description: 'Automate marketing workflows with HubSpot integration',
              },
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border border-gray-200 hover:border-primary-400 transition-all"
              >
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {integration.platform}
                </h3>
                <p className="text-gray-600 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Register Your Interest
              </h2>
              <p className="text-xl text-gray-600">
                Get early access and exclusive updates about Data Nexus
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  ✓ Thank you! We'll be in touch soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Company Name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                    Ecommerce Platform *
                  </label>
                  <select
                    {...register('platform')}
                    id="platform"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select your platform</option>
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="bigcommerce">BigCommerce</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.platform && (
                    <p className="mt-1 text-sm text-red-600">{errors.platform.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Interest *
                  </label>
                  <select
                    {...register('interest')}
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">What are you looking for?</option>
                    <option value="inventory">Inventory Sync</option>
                    <option value="customer">Customer Data Integration</option>
                    <option value="orders">Order Management</option>
                    <option value="marketing">Marketing Automation</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    {...register('newsletter')}
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Yes, I'd like to receive updates and product news via email
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary-500 text-gray-900 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Register Interest'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Data Integration?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using Data Nexus to streamline their operations
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
