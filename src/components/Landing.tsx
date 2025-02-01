'use client';

import { WhatWeDo } from '@/components/WhatWeDo';
import { TypeAnimation } from 'react-type-animation';

export default function Landing() {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-3xl mx-8 md:mx-auto">
        <div className="my-10 space-y-6 text-center sm:my-8 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl font-semibold text-black sm:text-5xl md:text-6xl md:text-gray-800">
              apilets <TypeAnimation
                sequence={[
                  'e-com composers',
                  2000,
                  'MACH experts',
                  2000,
                  'choose best of breed',
                  2000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="text-purple-400 sm:text-4xl md:text-5xl"
                cursor={false}
              ></TypeAnimation>
            </h1>
            <p className="text-lg md:text-xl md:mx-10 md:text-gray-500">
              Our team of experts is dedicated to helping you achieve your goals through proven MACH architecture.
            </p>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <div id='partners' className='mt-10 space-y-4 text-center mb-20 md:mt-16'>
        <h1 className='text-lg font-semibold tracking-wide text-center text-gray-100 text-opacity-75 uppercase md:mx-10 md:text-gray-600'>
          Trusted by industry leaders
        </h1>
        <div className='w-3/5 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10'>
          <div className='grid grid-cols-4 items-center justify-center gap-8'>
            {/* <img className='h-5 mt-6 ml-6 md:h-8' src='partnerLogos/stripe.svg' alt='' />
            <img className='h-7 md:h-5' src='partnerLogos/stockx.png' alt='' /> */}
            <img className='h-7 md:h-10' src='partnerLogos/commercetools-logo.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/AWS.png' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/klaviyo.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/shopify.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/sap-hybris-logo.png' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/dotdigital.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/emarsys-logo.png' alt='' />
            <img className='h-9 md:h-6' src='partnerLogos/openai.png' alt='' />
            {/* 
            <img className='h-5 md:h-8' src='partnerLogos/digitalocean.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/sendgrid.svg' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/Microsoft_Azure.png' alt='' />
            <img className='h-5 md:h-8' src='partnerLogos/Triquestra-Logo.png' alt='' /> */}

            {/* <img className='h-5 md:h-8' src='partnerLogos/moderna.png' alt='' />
            <img className='h-5 md:h-5' src='partnerLogos/oracle.png' alt='' />
            <img className='h-5 md:h-9' src='partnerLogos/honey.png' alt='' /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
