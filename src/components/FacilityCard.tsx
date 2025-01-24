'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { FunctionComponent } from 'react';
import { IFacilityData } from '@/types/types';
import ScrollAnimationWrapper from './ScrollAnimation';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import getScrollAnimation from '@/utils/getScrollAnimation';

interface FaciliityCardProps {
  data: IFacilityData[];
}

const FaciliityCard: FunctionComponent<FaciliityCardProps> = ({ data }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return data.map((facilty, index) => {
    const isOdd = index % 2 > 0;
    return (
      <ScrollAnimationWrapper className='flex w-full'>
        <motion.div className='h-full w-full' variants={scrollAnimation}>
          <section key={`service-${index}`} className={` ${isOdd && 'bg-accent/10'}`}>
            <div className='mx-auto max-w-6xl px-4 py-10 md:py-20'>
              <div className='items-center gap-3 md:gap-8 grid grid-cols-1 md:grid-cols-2'>
                {/* Carousel */}
                <div
                  className={`service-carousel h-full w-full  ${
                    !isOdd ? 'order-1 md:order-2' : 'order-2 md:order-1'
                  }`}>
                  <Swiper
                    modules={[Autoplay, Pagination, EffectCreative]}
                    effect={'creative'}
                    pagination={facilty?.images.length > 1 ? { clickable: true } : false}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    keyboard={true}
                    grabCursor={true}
                    loop={true}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ['100%', 0, 0],
                      },
                    }}
                    init={facilty?.images.length > 1 ? false : true}
                    className='mySwiperFacility rounded-lg'>
                    {/* Slides */}
                    {facilty?.images.map((slide, index) => (
                      <SwiperSlide key={index} className=''>
                        <div
                          className='h-full w-full absolute left-0 top-0 rounded-md'
                          style={{
                            background: `url(${slide}) center center / cover scroll no-repeat`,
                          }}
                        />
                        {/* <img src={slide} alt='' className='rounded-lg h-full' /> */}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className={` ${isOdd && 'order-1'}`}>
                  <h2 className='font-bold text-xl md:leading-[40px]  text-accent'>
                    {facilty?.title}
                  </h2>
                  <p className='mt-4 mb-2 text-justify font-light text-base text-opacity-70'>
                    {facilty?.content}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </ScrollAnimationWrapper>
    );
  });
};

export default FaciliityCard;
