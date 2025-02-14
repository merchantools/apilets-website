'use client';
import React, { useState, useEffect } from 'react';
import { contentService, ContentItem } from '@/services/contentService';
import { ServiceContent } from '@/services/contentServiceContext';
import { StickyScroll } from './stickyScroll';

export function WhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, setServices] = useState<ContentItem[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await contentService.getServices();
      setServices(data);
    };
    loadServices();
  }, []);

  useEffect(() => {
    if (services.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [services]);

  if (services.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-5 bg-opacity-90 bg-secondary w-full md:w-4/5 w-70 mx-auto md:rounded-xl rounded-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='relative overflow-hidden'>
          <div 
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((item, index) => (
              <div 
                key={index}
                className='w-full flex-shrink-0 flex flex-col items-center space-y-4'
              >
                <div className='w-full flex flex-col md:min-h-[600px] md:flex-row md:items-center md:space-x-2'>
                  <div className='text-center max-w-2xl mx-auto md:mb-0 mb-10'>
                    <h3 className='text-3xl font-bold text-black mb-2'><h3 className='font-bold text-black mb-2' dangerouslySetInnerHTML={{ __html: item.title }} /></h3>
                    <p className='text-gray-700'><p className='text-gray-700' dangerouslySetInnerHTML={{ __html: item.description }} /></p>
                  </div>
                  <div className='w-full aspect-video md:min-h-[275px] lg:min-h-[300px] relative'>
                    <ServiceContent item={item} />
                  </div>
               </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-4 space-x-2'>
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
