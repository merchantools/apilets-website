'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
function splitArrayIntoThreeParts(array: string[]) {
  const n = array.length;

  // Calculate the size of each part to split as evenly as possible
  const size = Math.floor(n / 3);
  const remainder = n % 3; // To handle uneven splits

  // Initialize indices
  let firstSize = size + (remainder > 0 ? 1 : 0); // Add 1 if remainder is 1 or more
  let secondSize = size + (remainder > 1 ? 1 : 0); // Add 1 if remainder is more than 1
  let thirdSize = size; // Third part gets the remaining elements

  // Slice the array into parts
  const firstPart = array.slice(0, firstSize);
  const secondPart = array.slice(firstSize, firstSize + secondSize);
  const thirdPart = array.slice(firstSize + secondSize);

  return [firstPart, secondPart, thirdPart];
}
export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ['start start', 'end start'], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [firstPart, secondPart, thirdPart] = splitArrayIntoThreeParts(images);

  console.log(images, 'json_data');

  console.log(firstPart, secondPart, thirdPart);

  console.log(firstPart.length, secondPart.length, thirdPart.length);

  return (
    <div
      className={cn('h-[30rem] sm:h-[40rem] items-start overflow-y-auto w-full', className)}
      ref={gridRef}>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-4 py-2'
        ref={gridRef}>
        <div className='grid gap-5'>
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={'grid-1' + idx}>
              <Image
                src={el}
                className='h-60 w-full object-cover object-left-top rounded-lg !m-0 !p-0'
                height='400'
                width='400'
                alt='thumbnail'
              />
            </motion.div>
          ))}
        </div>
        <div className='grid gap-5'>
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <Image
                src={el}
                className='h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
                height='400'
                width='400'
                alt='thumbnail'
              />
            </motion.div>
          ))}
        </div>
        <div className='grid gap-5'>
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <Image
                src={el}
                className='h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
                height='400'
                width='400'
                alt='thumbnail'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
