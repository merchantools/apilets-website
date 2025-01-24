'use client';
import { ParallaxScroll } from '@/components/GalleryScroll';
import { homepageGalleryImages } from '@/config/datas';
import React, { useEffect, useState } from 'react';

export const getGallery = async () => {
  let data = await fetch('/api?url=gallery_image');

  let images_data: { data: { id: string; gallery: { file: string }[]; description: string }[] } =
    await data.json();
  console.log(images_data, 'images_data');

  let images = images_data.data.flatMap((image) => {
    return image.gallery.map((file) => file.file);
  });

  console.log(images, 'json_data');

  return images;
};

export const ParalaxGallery = () => {
  const [images, setimages] = useState<string[]>([]);
  useEffect(() => {
    // getGallery().then((items) => {
    setimages(homepageGalleryImages);
    // });
  }, []);

  return <ParallaxScroll images={images} />;
};
