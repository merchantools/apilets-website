'use client';

import React from 'react';
import { WhatWeDo } from './WhatWeDo';
import { Partners } from './Partners';
import { TypeAnimation } from 'react-type-animation';

export default function Landing() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Hero Section */}
            <section id="hero" className="h-screen snap-center flex items-center justify-center bg-white">
                <div className="max-w-3xl mx-8 md:mx-auto">
                    <div className="space-y-6 text-center md:space-y-8">
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
            </section>

            {/* WhatWeDo Section */}
            <div id="what-we-do" className="h-screen snap-center flex items-center justify-center bg-gray-50">
                <div className="w-full h-full flex items-center justify-center">
                    <WhatWeDo />
                </div>
            </div>

            {/* Partners Section */}
            <div id="partners" className="h-screen snap-center flex items-center justify-center bg-white">
                <div className="w-full h-full flex items-center justify-center">
                    <Partners />
                </div>
            </div>

            {/* Footer Section - Not snapped */}
            <div className="snap-none">
                <div id="footer" className="h-2 bg-gray-400"></div>
            </div>
        </div>
    );
}
