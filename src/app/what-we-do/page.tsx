'use client';
import {ContentItem, contentService} from "@/services/contentService";
import React, {useEffect, useState} from 'react';
import {ServiceContent} from "@/services/contentServiceContext";

export default function WhatWeDo() {
    const [services, setServices] = useState<ContentItem[]>([]);

    useEffect(() => {
        const loadServices = async () => {
            const data = await contentService.getServices();
            setServices(data);
        };
        loadServices();
    }, []);
    return (
        <main className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">apilets - We Do</h1>
                <div className="prose max-w-none">
                    {/* Add your content here */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className={`p-5 rounded-lg bg-secondary`}
                            >
                                <div className='text-center max-w-2xl mx-auto mb-4'>
                                    <h3 className='text-xl font-bold text-white mb-2' dangerouslySetInnerHTML={{__html: item.title}}/>
                                    <p className='text-gray-300' dangerouslySetInnerHTML={{__html: item.description}}/>
                                </div>
                                <div className='w-full aspect-video relative'>
                                    <ServiceContent item={item}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
} 