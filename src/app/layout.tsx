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
  title: 'apilets - MACH experts',
  description: 'we are composing your commerce software',
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
          <title>apilets - Software Solutions</title>
          <meta content='we are composable commerce experts' name='description' />
          <meta property='og:url' content='https://apilets.com' />
          <meta property='og:description' content='apilets - we compose your commerce software. We are your MACH experts.' />
          <meta property='og:title' content='apilets - we compose your commerce software' />
          <meta property='og:image' content='/logo2.png' />
          <link rel='shortcut icon' href='/favicon.png' />
        </Head>

        <body className={manrope.className}>
          <div className='h-full leading-normal text-gray-600'>
            <div
              className='absolute top-0 left-0 right-0  shadow-lg -bottom-full  md:bottom-0  -z-10
            bg-gradient-to-br  from-purple-200 from-30% via-cyan-200 via-50% to-pink-200 to-80% animate-gradient bg-[length:400%_400%] bg-opacity-10'
              style={{
                animation: 'gradient 8s ease infinite',
              }}
            />
            <div
              className='absolute top-0 left-0 right-0  md:bottom-0 -z-30 bg-opacity-30
            bg-gradient-to-tr from-purple-200 from-30%  via-cyan-200 via-50% to-pink-200 to-80% animate-gradient bg-[length:500%_500%] '
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
