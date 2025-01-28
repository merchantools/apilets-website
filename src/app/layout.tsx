import '../styles/global.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Head from 'next/head';
import Footer from '../components/Footer';

const manrope = Manrope({
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'apilets - Software Solutions',
  description: 'We are a software company that provide expertise to retailers, manufacturers, and wholesalers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en'>
        <Head>
          <title>APILETS – Software Solutions</title>
          <meta content='Example' name='description' />
          <meta property='og:url' content='example.com' />
          <meta property='og:description' content='Example' />
          <meta property='og:title' content='Example' />
          <meta property='og:image' content='' />
          <link rel='shortcut icon' href='/favicon.png' />
        </Head>

        <body className={manrope.className}>
          <div className='h-full leading-normal text-gray-600'>
            <div
              className='absolute top-0 left-0 right-0  shadow-lg -bottom-full  md:bottom-0  -z-10
            bg-gradient-to-br  from-purple-400 from-30% via-cyan-400 via-50% to-pink-400 to-80% animate-gradient bg-[length:400%_400%] bg-opacity-10'
              style={{
                animation: 'gradient 8s ease infinite',
              }}
            />
            <div
              className='absolute top-0 left-0 right-0  md:bottom-0 -z-30 bg-opacity-30
            bg-gradient-to-tr from-purple-400 from-30%  via-cyan-400 via-50% to-pink-400 to-80% animate-gradient bg-[length:500%_500%] '
              style={{
                animation: 'gradient 8s ease infinite',
              }}
            />
            <Header />
            <Suspense>
              {/* <main className='min-h-[calc(100vh-0px)] md:min-h-[calc(100vh-76px)] bg-white pt-14 sm:pt-16  md:pt-20 '> */}
              {children}
              {/* </main> */}
            </Suspense>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
