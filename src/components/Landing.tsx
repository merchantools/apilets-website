'use client';

import {WhatWeDo} from '@/components/WhatWeDo';
import {TypeAnimation} from 'react-type-animation';

export default function Landing() {
    return (
        <section className="min-h-screen py-20">
            <div className="max-w-3xl mx-8 md:mx-auto">
                <div className="my-10 space-y-6 text-center sm:my-8 md:space-y-8">
                    <div className="space-y-3 md:space-y-4">
                        <h1 className="text-3xl font-semibold text-black sm:text-5xl md:text-6xl md:text-gray-800">
                            apilets, <TypeAnimation
                            sequence={[
                                'sofware composers',
                                2000,
                                'MACH experts',
                                2000,
                                'we transform',
                                2000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            className="text-blue-400 sm:text-4xl md:text-5xl"
                            cursor={false}
                        ></TypeAnimation>
                        </h1>
                        <p className="text-lg md:text-xl md:mx-10 md:text-gray-500">
                            Our team of experts is dedicated to helping you achieve your goals through proven MACH architecture.
                        </p>
                    </div>
                </div>
            </div>
            <WhatWeDo/>
            <div id='partners' className='mt-10 space-y-4 text-center mb-20 md:mt-16'>
                <h1 className='text-lg font-semibold tracking-wide text-center text-opacity-75 uppercase md:mx-10 text-gray-600'>
                    Our trusted partners
                </h1>
                <div className='w-full mx-auto bg-gray-100 bg-opacity-70 md:bg-opacity-50 md:p-10 mb-10'>
                    <div className='w-full sm:w-4/5 md:w-3/5 p-6 mx-auto bg-gray-100 bg-opacity-60 md:bg-opacity-60 md:p-10 mb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/commercetools-logo.svg' alt=''/>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/klaviyo.svg' alt=''/>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/shopify.svg' alt=''/>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/sap-hybris-logo.png' alt=''/>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/dotdigital.svg' alt=''/>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/emarsys-logo.png' alt=''/>
                        </div>
                        <div className='p-4 bg-white rounded-lg shadow-md'>
                            <img className='h-16 mx-auto' src='partnerLogos/openai.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
