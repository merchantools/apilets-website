'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Import react scroll
import { Link as LinkScroll } from 'react-scroll';

// import LogoVPN from '../../public/assets/Logo.svg';
import ButtonOutline from '../Buttons/ButtonOutline';
import Image from 'next/image';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import { usePathname } from 'next/navigation';

import {
  IoMenu,
  IoClose,
  IoArrowDown,
  IoArrowUp,
  IoChevronDown,
  IoChevronUp,
} from 'react-icons/io5';

const menuItems = [
  { name: 'About Us', link: '#' },
  { name: 'Admissions', link: '#' },
  { name: 'Facilities', link: '/facilities' },
  { name: 'Students', link: '#' },
];

const downloadItems = [
  { name: 'Brochure', link: '#' },
  { name: 'Application Form', link: '#' },
  { name: 'Fee Structure', link: '#' },
  { name: 'Academic Calendar', link: '#' },
];

// const Header = () => {
//   const [activeLink, setActiveLink] = useState<string | null>(null);
//   const [scrollActive, setScrollActive] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const pathname = usePathname();

//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       setScrollActive(window.scrollY > 20);
//     });
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         // Close menu if scrolled more than 50px
//         setIsOpen(false);
//         setIsDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>
//       <header
//         className={
//           'fixed top-0 w-full  z-30 bg-white/60 backdrop-blur-sm   transition-all  shadow-md' +
//           (scrollActive ? ' shadow-md pt-0' : '')
//         }>
//         <nav className='max-w-screen-2xl px-4 sm:px-8  mx-auto grid grid-flow-col py-2 sm:py-3 md:py-4'>
//           <div className='col-start-1 col-end-2 flex items-center'>
//             {/* <LogoVPN className='h-8 w-auto' /> */}
//             <Link
//               href={'/'}
//               className='flex items-center gap-2 '
//               onClick={() => {
//                 setActiveLink('home');
//               }}>
//               <Image
//                 className='relative size-10'
//                 src='/logo-stmary.svg'
//                 alt='stmarynew'
//                 width={100}
//                 height={100}
//                 priority
//               />
//               <div>
//                 <p className='font-bold text-xl text-accent uppercase whitespace-nowrap '>
//                   St Mary's School
//                 </p>
//                 <p className='font-bold text-sm leading-3 text-accent uppercase whitespace-nowrap '>
//                   Mahadian, Fatehgarh Sahib
//                 </p>
//               </div>
//             </Link>
//           </div>
//           <ul className='hidden lg:flex justify-between col-start-4 col-end-8 text-blueZ  items-center'>
//             <LinkScroll
//               activeClass='active'
//               to='about'
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('about');
//               }}
//               className={
//                 'px-1 py-2 mx-1 cursor-pointer animation-hover inline-block relative uppercase font-medium' +
//                 (activeLink === 'about'
//                   ? ' text-accent animation-active '
//                   : ' text-blueZ hover:text-accent a')
//               }>
//               About Us
//             </LinkScroll>
//             <LinkScroll
//               activeClass='active'
//               to='feature'
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('feature');
//               }}
//               className={
//                 'px-1 py-2 mx-1 cursor-pointer animation-hover inline-block relative uppercase font-medium' +
//                 (activeLink === 'feature'
//                   ? ' text-accent animation-active '
//                   : ' text-blueZ hover:text-accent ')
//               }>
//               Admissions
//             </LinkScroll>
//             <Link
//               href='/facilities'
//               onClick={() => {
//                 setActiveLink('facilities');
//               }}
//               className={
//                 'px-1 py-2 mx-1 cursor-pointer  animation-hover inline-block relative uppercase font-medium' +
//                 (activeLink === 'facilities' || pathname === 'facilities'
//                   ? ' text-accent animation-active '
//                   : ' text-blueZ hover:text-accent ')
//               }>
//               Facilities
//             </Link>
//             <LinkScroll
//               activeClass='active'
//               to=''
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('students');
//               }}
//               className={
//                 'px-1 py-2 mx-1 cursor-pointer animation-hover inline-block relative uppercase font-medium' +
//                 (activeLink === 'students'
//                   ? ' text-accent animation-active  '
//                   : ' text-blueZ hover:text-accent ')
//               }>
//               Students
//             </LinkScroll>
//             <div
//               onClick={() => {
//                 setActiveLink('downloads');
//               }}
//               className={
//                 'px-1 py-2 mx-1 cursor-pointer animation-hover inline-block group relative uppercase font-medium' +
//                 (activeLink === 'downloads'
//                   ? ' text-accent animation-active  '
//                   : ' text-blueZ hover:text-accent ')
//               }>
//               <li className='nav-item nav-dropdown group relative'>
//                 <span className='font-medium transition inline-flex items-center'>
//                   Downloads
//                   <svg className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
//                     <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//                   </svg>
//                 </span>
//                 <ul className='z-10 rounded-lg top-10 bg-white max-w-3xs lg:shadow-sm; hidden w-full overflow-hidden border border-border-secondary py-0 transition-all duration-300 group-hover:block  lg:invisible lg:absolute lg:left-1/2 lg:block lg:w-auto lg:-translate-x-1/2 lg:group-hover:visible lg:group-hover:opacity-100'>
//                   {['TC', 'State', 'option'].map((child, i) => (
//                     <li className='' key={`children-${i}`}>
//                       <Link
//                         href={``}
//                         className={`min-w-[150px] nav-dropdown-link py-1 text-sm font-medium  lg:hover:text-accent whitespace-nowrap lg:hover:bg-accent/10 px-4 rounded-lg block transition-all `}
//                         // ${
//                         //   asPath === child.url && 'active'
//                         // }
//                         // `}
//                       >
//                         {child}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </div>
//           </ul>
//           <div className='hidden lg:flex col-start-10 col-end-12 font-medium  justify-end items-center'>
//             {/* <ButtonOutline>Sign Up</ButtonOutline> */}
//             <Link href='/'>
//               <ButtonPrimary className='py-1 sm:px-2 text-sm rounded-md'>
//                 Online Payment
//               </ButtonPrimary>
//             </Link>
//           </div>

//           <div className='md:hidden flex items-center justify-end float-right'>
//             <button
//               onClick={toggleMenu}
//               className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 focus:outline-none'>
//               {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
//             </button>
//           </div>
//         </nav>

//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//             isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//           }`}>
//           <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
//             {menuItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.link}
//                 className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-100'>
//                 {item.name}
//               </a>
//             ))}
//             <div className='relative'>
//               <button
//                 onClick={toggleDropdown}
//                 className='flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-100'>
//                 Downloads
//                 {isDropdownOpen ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}
//               </button>
//               <div
//                 className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                   isDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
//                 }`}>
//                 {downloadItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.link}
//                     className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-100'>
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation */}

//       {/* <nav className='fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t '>
//         <div className='bg-white-500 sm:px-3'>
//           <ul className='flex w-full justify-between items-center text-blueZ'>
//             <LinkScroll
//               activeClass='active'
//               to='about'
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('about');
//               }}
//               className={
//                 'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
//                 (activeLink === 'about' ? '  border-accent text-accent' : ' border-transparent')
//               }>
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'>
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
//                 />
//               </svg>
//               About
//             </LinkScroll>
//             <LinkScroll
//               activeClass='active'
//               to='feature'
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('feature');
//               }}
//               className={
//                 'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
//                 (activeLink === 'feature' ? '  border-accent text-accent' : ' border-transparent ')
//               }>
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'>
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
//                 />
//               </svg>
//               Feature
//             </LinkScroll>
//             <LinkScroll
//               activeClass='active'
//               to='pricing'
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('pricing');
//               }}
//               className={
//                 'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
//                 (activeLink === 'pricing' ? '  border-accent text-accent' : ' border-transparent ')
//               }>
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'>
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
//                 />
//               </svg>
//               Pricing
//             </LinkScroll>
//             <LinkScroll
//               activeClass='active'
//               to='downloads'
//               spy={true}
//               smooth={true}
//               duration={1000}
//               onSetActive={() => {
//                 setActiveLink('testimoni');
//               }}
//               className={
//                 'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
//                 (activeLink === 'testimoni'
//                   ? '  border-accent text-accent'
//                   : ' border-transparent ')
//               }>
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'>
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
//                 />
//               </svg>
//               Testimonial
//             </LinkScroll>
//           </ul>
//         </div>
//       </nav> */}
//       {/* End Mobile Navigation */}
//     </>
//   );
// };

// export default Header;

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <div className='flex flex-col px-4 pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-row items-center justify-between p-4'>
          <img src='/logo2.png' alt='logo' className=' h-16 bg-cover' />
          {/* <a
            href='/'
            className='text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300 md:text-gray-900'>
            apilets
          </a> */}
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
          <div className='flex-col pl-4 text-xl md:flex-grow md:pl-0'>
            <ul className='flex flex-wrap items-center justify-end flex-grow gap-2 pr-4 space-x-2 md:gap-6 md:space-x-6'>
              <li>
                <a
                  href='#features'
                  className='text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700'>
                  Features
                </a>
              </li>
              {/* <li>
                <a
                  href='#demo'
                  className='text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700'>
                  Demo
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='text-lg text-white md:text-black hover:text-gray-300 md:hover:text-gray-700'>
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='bg-white rounded-full bg-opacity-40 px-4 text-lg text-white md:text-black shadow-sm transition-colors duration-75 group gap-[0.25em] inline-flex items-center py-1.5 hover:cursor-pointer hover:bg-opacity-90'>
                  Sign up
                  <svg
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='relative transition-transform duration-200 motion-safe:-translate-x-1 group-hover:translate-x-0'>
                    <path
                      fill='currentColor'
                      d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'></path>
                    <path
                      stroke='currentColor'
                      d='M1.75 8H11'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      className='origin-left transition-all duration-200 opacity-0 motion-safe:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100'></path>
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
