import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register for Data Nexus - Apilets',
  description: 'Start your data integration journey with Apilets Data Nexus. Enterprise-grade data integration made simple. Get early access and connect your ecommerce data anywhere.',
  keywords: 'data integration, ecommerce integration, data nexus, reverse etl, inventory sync, data migration',
  openGraph: {
    title: 'Register for Data Nexus - Apilets',
    description: 'Enterprise-grade data integration made simple. Join companies that trust us with their critical data flows.',
    type: 'website',
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
