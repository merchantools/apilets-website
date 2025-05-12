import React from 'react';
import Image from 'next/image';
import { ContentItem } from './contentService';

const gradients = {
  'custom-software': 'bg-[linear-gradient(to_bottom_right,theme(colors.blue.500),theme(colors.indigo.500))]',
  'cloud': 'bg-[linear-gradient(to_bottom_right,theme(colors.green.500),theme(colors.teal.500))]',
  'ui-ux': 'bg-[linear-gradient(to_bottom_right,theme(colors.blue.400),theme(colors.purple.500))]',
  // ... add other gradients
};

export function ServiceContent({ item }: { item: ContentItem }) {
  return (
    <div className="w-full h-full">
      {item.imageUrl ? (
        <Image
          src={item.imageUrl}
          fill
          className="object-cover"
          alt={item.title}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600" />
      )}
    </div>
  );
}