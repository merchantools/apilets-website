import type { Metadata } from 'next';
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: 'Connect Your Ecommerce Data Anywhere - Data Nexus | apilets',
  description: 'Seamlessly integrate data from your ecommerce platforms. Sync with marketing and CRM systems in real-time. Enterprise-grade data integration for Shopify, WooCommerce, Magento, and more.',
  keywords: [
    'ecommerce data integration',
    'real-time inventory sync',
    'customer data activation',
    'Shopify integration',
    'WooCommerce sync',
    'Magento integration',
    'BigCommerce',
    'data synchronization',
    'CRM integration',
    'marketing automation',
  ],
  authors: [{ name: 'apilets' }],
  creator: 'apilets',
  publisher: 'apilets',
  openGraph: {
    title: 'Connect Your Ecommerce Data Anywhere - Data Nexus',
    description: 'Seamlessly integrate data from your ecommerce platforms. Sync with marketing and CRM systems in real-time.',
    url: 'https://apilets.com/data-integration',
    siteName: 'apilets - MACH experts',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo2.png',
        width: 1200,
        height: 630,
        alt: 'Data Nexus - Ecommerce Data Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect Your Ecommerce Data Anywhere - Data Nexus',
    description: 'Seamlessly integrate data from your ecommerce platforms. Sync with marketing and CRM systems in real-time.',
    images: ['/logo2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://apilets.com/data-integration',
  },
};

export default function DataIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
      <GoogleAnalytics />
      {children}
  </>;
}
