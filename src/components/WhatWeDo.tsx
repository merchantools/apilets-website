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
    <section id='demo' className='py-5 bg-opacity-90 bg-gray-900'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='relative overflow-hidden'>
          <div 
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((item, index) => (
              <div 
                key={index}
                className='w-full flex-shrink-0 flex flex-col items-center space-y-4'
              >
                <div className='w-full aspect-video relative'>
                  <ServiceContent item={item} />
                </div>
                <div className='text-center max-w-3xl mx-auto'>
                  <h3 className='text-xl font-bold text-white mb-2'>{item.title}</h3>
                  <p className='text-gray-300'>{item.description}</p>
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
    </section>
  );
}
