'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  // { name: 'Home', link: '/' },
  { name: 'Who We Are', link: '/who-we-are' },
  { name: 'What We Do', link: '/what-we-do' },
  { name: 'Contact Us', link: '/contact' },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <div className='flex flex-col px-4 pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-row items-center justify-between p-4'>
          <Link href="/">
            <img src='/logo2.png' alt='logo' className='h-16 bg-cover' />
          </Link>
          <button
            className='px-3 py-1 bg-white rounded-full cursor-pointer bg-opacity-30 focus:outline-none md:hidden'
            type='button'
            aria-label='button'
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#fff'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'mt-3 flex-grow items-start md:flex lg:mt-0' + (navbarOpen ? ' flex' : ' hidden')
          }>
          <div className='fixed top-24 right-4 w-64 bg-primary p-4 rounded-lg shadow-lg md:relative md:top-0 md:w-auto md:bg-transparent md:p-0 md:shadow-none md:ml-auto'>
            <div className='flex-col pl-4 text-xl md:flex-grow md:pl-0'>
              <ul className='flex flex-wrap items-center flex-grow gap-2 pr-4 space-x-2 md:gap-6 md:space-x-6'>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className={`text-lg ${
                        pathname === item.link
                          ? 'text-secondary font-medium'
                          : 'text-white md:text-black hover:text-gray-300 md:hover:text-gray-700'
                      }`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
