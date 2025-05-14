import React from 'react';
import { ContentItem } from '@/services/contentService';
import { ServiceImage } from '../ServiceImage';

interface ServiceCardProps {
  item: ContentItem;
}

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer">
      <ServiceImage item={item} />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-100">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-100">
            <h3 
              className="text-lg sm:text-2xl font-bold text-white mb-2 text-center transform transition-all duration-300 scale-150 group-hover:scale-100 group-hover:-translate-y-4 break-words max-w-[80%] 2xl:max-w-none"
              dangerouslySetInnerHTML={{__html: item.title}}
            />
            <p 
              className="text-gray-100 text-center max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4 break-words"
              dangerouslySetInnerHTML={{__html: item.description}}
            />
        </div>
      </div>
    </div>
  );
} 