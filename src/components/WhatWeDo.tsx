'use client';
import React from 'react';
import { StickyScroll } from './stickyScroll';

import Image from 'next/image';

const content = [
  {
    title: 'Custom Software Development',
    description:
      'We specialize in crafting tailored software solutions to meet your unique business needs. From concept to deployment, we deliver scalable, efficient, and innovative applications that drive success.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.blue.500),theme(colors.indigo.500))] flex items-center justify-center text-white'>
        <span className='text-lg md:text-xl lg:text-2xl'>Custom Software Development</span>
      </div>
    ),
  },
  {
    title: 'Cloud',
    description:
      'Seamlessly integrate your business processes with cloud technologies. Our expertise ensures secure, reliable, and scalable solutions that optimize your operations and improve accessibility.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.green.500),theme(colors.teal.500))] flex items-center justify-center text-white'>
        <span className='text-lg md:text-xl lg:text-2xl'>Cloud Integration</span>
      </div>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Delivering intuitive, visually appealing, and user-centric designs is our forte. We create interfaces that enhance user engagement, ensuring an unforgettable experience for your customers.',
    content: (
      <div className='h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,theme(colors.blue.400),theme(colors.purple.500))] md:bg-transparent'>
        <span className='block md:hidden text-lg'>UI/UX Design</span>
        <Image
          src='/product.png'
          width={300}
          height={300}
          className='hidden md:block h-full w-full object-cover'
          alt='UI/UX Design'
        />
      </div>
    ),
  },
  {
    title: 'AI and Automation',
    description:
      'Transform your business with AI-driven solutions and automation. Our services help you harness the power of artificial intelligence to improve decision-making, reduce manual tasks, and boost efficiency.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.purple.500),theme(colors.pink.500))] flex items-center justify-center text-white'>
        AI and Automation
      </div>
    ),
  },
  {
    title: 'Data Analytics and Insights',
    description:
      'Unlock the potential of your data with our advanced analytics services. Gain actionable insights to make informed decisions and stay ahead in your industry.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.orange.500),theme(colors.yellow.500))] flex items-center justify-center text-white'>
        Data Analytics and Insights
      </div>
    ),
  },
  {
    title: '24/7 Technical Support',
    description:
      'We provide round-the-clock technical support to ensure your systems are always up and running. Our dedicated team is here to resolve issues promptly and minimize downtime.',
    content: (
      <div className='h-full w-full bg-[linear-gradient(to_bottom_right,theme(colors.red.500),theme(colors.rose.500))] flex items-center justify-center text-white'>
        24/7 Technical Support
      </div>
    ),
  },
];

export function WhatWeDo() {
  return (
    <section id='demo' className='py-32 bg-opacity-90 bg-gray-900'>
      <div className='max-w-3xl lg:max-w-7xl mx-auto '>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
