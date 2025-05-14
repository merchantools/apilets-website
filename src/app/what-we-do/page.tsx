'use client';
import {ContentItem, contentService} from "@/services/contentService";
import React, {useEffect, useState} from 'react';
import {ServiceCard} from "@/components/ServiceCard";
import { MediumBlogPosts } from '@/components/MediumBlogPosts';

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
        <main className="min-h-screen py-20 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">apilets - We Do</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {services.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                    ))}
                </div>
            </div>
            <MediumBlogPosts />
        </main>
    );
} 