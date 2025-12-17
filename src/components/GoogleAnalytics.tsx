'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Component that uses useSearchParams - must be wrapped in Suspense
function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views when route changes
  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });

        // Send a specific page_view event with page title
        (window as any).gtag('event', 'page_view', {
          page_path: url,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  // Don't load analytics in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_DEBUG) {
    return null;
  }

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });

            // Track scroll depth
            let scrollDepth25 = false;
            let scrollDepth50 = false;
            let scrollDepth75 = false;

            window.addEventListener('scroll', function() {
              const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;

              if (scrollPercent >= 25 && !scrollDepth25) {
                scrollDepth25 = true;
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: '25%',
                  value: 25,
                });
              }

              if (scrollPercent >= 50 && !scrollDepth50) {
                scrollDepth50 = true;
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: '50%',
                  value: 50,
                });
              }

              if (scrollPercent >= 75 && !scrollDepth75) {
                scrollDepth75 = true;
                gtag('event', 'scroll_depth', {
                  event_category: 'engagement',
                  event_label: '75%',
                  value: 75,
                });
              }
            });

            // Track time on page
            let time30s = false;
            let time60s = false;

            setTimeout(function() {
              time30s = true;
              gtag('event', 'engagement', {
                event_category: 'engagement',
                event_label: 'time_on_page_30s',
                value: 30,
              });
            }, 30000);

            setTimeout(function() {
              time60s = true;
              gtag('event', 'engagement', {
                event_category: 'engagement',
                event_label: 'time_on_page_60s',
                value: 60,
              });
            }, 60000);
          `,
        }}
      />
    </>
  );
}
