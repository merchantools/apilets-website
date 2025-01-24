'use client';
import { ILatestNewsData } from '@/types/types';
import { cn } from '@/utils/utils';
import React, { useEffect, useState } from 'react';

export const getNews = async () => {
  let data = await fetch('/api?url=news/?priority=important');

  let news: { data: ILatestNewsData[] } = await data.json();
  console.log(news, 'news');

  return news.data;
};

export const InfiniteMovingInfos = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [news, setnews] = useState([]);

  const newsData = [
    {
      title: 'Online Registration',
      description:
        'Online registration for the academic year 2025-26 is now open. Register now to secure your child’s admission at St Mary’s School, Fatehgarh Sahib.',
    },
    {
      title: 'Scholarship Program',
      description:
        'St Mary’s School, Fatehgarh Sahib, offers a scholarship program for meritorious students. Apply now to avail scholarships for the academic year 2025-26.',
    },
    {
      title: 'Parent-Teacher Meeting',
      description:
        'A parent-teacher meeting will be held on 15th March 2025 at St Mary’s School, Fatehgarh Sahib. Parents are requested to attend the meeting to discuss their child’s progress.',
    },
  ];

  useEffect(() => {
    setnews(newsData);
  }, []);
  useEffect(() => {
    addAnimation();
  }, [news]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '10s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        ' relative z-20 w-screen  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex shrink-0 gap-4  w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}>
        {news.map((item, idx) => (
          <li
            className='max-w-full relative  flex-shrink-0  px-1 py-1]'
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={idx}>
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5  w-[calc(100%_+_4px)]'></div>
              <p className=' relative z-20 text-sm  leading-[1.6] text-accent font-semibold'>
                {item.description}
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
