'use client';

import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        
        {/* Locations Section */}
        <div className="mb-20">
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
              <p className="text-gray-600">Drumderry, Barron</p>
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

        {/* Get In Touch Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Get In Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">Email:</span>
                    your.email@example.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 