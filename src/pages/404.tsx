import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white'>
      <h1 className='text-4xl font-bold text-accent-500'>404 - Page Not Found</h1>
      <p className='text-accent-500'>The page you are looking for does not exist.</p>
      <Link href='/'>
        <p className='mt-4 text-accent-500 hover:underline'>Go back to the homepage</p>
      </Link>
    </div>
  );
}
