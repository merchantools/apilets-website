import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Apilets',
  description: 'Thank you for registering with Apilets Data Nexus',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
