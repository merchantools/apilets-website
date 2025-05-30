'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'What We Do', link: '/what-we-do' },
  { name: 'Contact Us', link: '/contact' },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white">
      <div className='flex flex-col px-4 pt-4 mx-auto text-white roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-row items-center justify-between p-4'>
          <Link href="/">
            <img src='/logo2.png' alt='logo' className='h-16 bg-cover' />
          </Link>
          <button
            ref={buttonRef}
            className='px-3 py-1 bg-white rounded-full cursor-pointer focus:outline-none md:hidden'
            type='button'
            aria-label='button'
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#4B5563'
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
          <div 
            ref={menuRef}
            className='fixed top-24 right-4 w-64 bg-gray-100 p-4 rounded-lg shadow-lg md:relative md:top-0 md:w-auto md:bg-transparent md:p-0 md:shadow-none md:ml-auto'>
            <div className='flex-col pl-4 text-xl md:flex-grow md:pl-0'>
              <ul className='flex flex-col items-end space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6'>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className={`text-lg ${
                        pathname === item.link
                          ? 'text-gray-500 font-medium'
                          : 'text-black hover:text-gray-700'
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
