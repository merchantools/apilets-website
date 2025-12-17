import React from 'react';
import Image from 'next/image';
import { ContentItem } from '@/services/contentService';

interface ServiceImageProps {
  item: ContentItem;
}

export function ServiceImage({ item }: ServiceImageProps) {
  return (
    <div className="w-full h-full">
      {item.imageUrl ? (
        <Image
          src={item.imageUrl}
          fill
          className="object-cover rounded-xl"
          alt={item.title}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl" />
      )}
    </div>
  );
} 