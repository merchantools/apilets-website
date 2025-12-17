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
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
          <GoogleAnalytics />
          <div className='relative min-h-screen flex flex-col leading-normal text-gray-600'>
            <div
              className='fixed top-0 left-0 right-0 bottom-0 -z-10
            bg-gradient-to-br from-primary-100 from-30% via-primary-200 via-50% to-primary-300 to-80% animate-gradient bg-[length:400%_400%] bg-opacity-10'
              style={{
                animation: 'gradient 8s ease infinite',
              }}
            />
            <div
              className='fixed top-0 left-0 right-0 bottom-0 -z-30 bg-opacity-30
            bg-gradient-to-tr from-primary-100 from-30% via-primary-200 via-50% to-primary-300 to-80% animate-gradient bg-[length:500%_500%]'
              style={{
                animation: 'gradient 8s ease infinite',
              }}
            />
            <Header />
            <Suspense>
              <main className='flex-grow'>
                {children}
              </main>
            </Suspense>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
