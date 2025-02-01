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
  const gradient = gradients[item.content as keyof typeof gradients];
  
  return (
    <div 
    className='w-full flex-shrink-0 flex flex-col items-center space-y-6'
  >
    <div className='w-full aspect-video relative'>
    {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      width={300}
                      height={300}
                      className='h-full w-full object-cover rounded-lg'
                      alt={item.title}
                    />
                  ) : (
                    <>
                    </>
                  )}
    </div>
  </div>
  )
}