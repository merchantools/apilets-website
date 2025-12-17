# Google Analytics 4 Implementation Guide

## Overview

Google Analytics 4 (GA4) has been successfully implemented across the entire Apilets website, including dedicated tracking for the `/data-integration` page.

## Setup Instructions

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Navigate to **Admin** → **Data Streams**
3. Select your web data stream (or create one)
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (if it doesn't exist) and add:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### 3. Enable Analytics in Development (Optional)

To test analytics in development mode, add this to your `.env.local`:

```bash
NEXT_PUBLIC_GA_DEBUG=true
```

**Note:** By default, analytics are disabled in development to avoid polluting your production data.

## Implementation Details

### Global Tracking

The `GoogleAnalytics` component (`src/components/GoogleAnalytics.tsx`) is loaded in the root layout (`src/app/layout.tsx`), which means:

- **Every page** on the site is automatically tracked
- Page views are sent whenever users navigate between pages
- The component uses Next.js App Router hooks (`usePathname`, `useSearchParams`) to track route changes

### Events Tracked Globally

1. **Page Views**
   - Automatically tracked on every page
   - Includes: page path, page title, and full URL

2. **Scroll Depth**
   - Tracks when users scroll to 25%, 50%, and 75% of the page

3. **Time on Page**
   - Tracks engagement at 30 seconds and 60 seconds

### Data Integration Page (`/data-integration`)

The data integration page has enhanced tracking with the following custom events:

#### 1. Page View Event
- **Event:** `page_view`
- **Category:** N/A
- **Triggers:** When the page loads
- **Data:** Page path, title, and location

#### 2. Section Navigation
- **Event:** `section_navigation`
- **Category:** `engagement`
- **Label:** `scroll_to_{section_id}`
- **Triggers:** When users click buttons to scroll to different sections
- **Tracked Sections:**
  - `connections` - "See How It Works" button
  - `register` - "Get Started Free" button
  - `sources-destinations` - "Explore Our Connectors" button

#### 3. Tab Selection
- **Event:** `tab_selection`
- **Category:** `engagement`
- **Label:** Tab ID (`visual`, `advanced`, or `functions`)
- **Triggers:** When users switch between mapping tabs
- **Purpose:** Track which data transformation methods users are most interested in

#### 4. Form Submission
- **Event:** `form_submit`
- **Category:** `conversion`
- **Label:** `data_integration_registration`
- **Triggers:** When the registration form is successfully submitted
- **Additional Data:**
  - Platform selected
  - Interest area selected
  - Newsletter signup status

#### 5. Lead Generation
- **Event:** `generate_lead`
- **Category:** `conversion`
- **Label:** `data_integration_lead`
- **Triggers:** When the registration form is successfully submitted
- **Purpose:** Track conversion for remarketing and ROI analysis

## Viewing Analytics Data

### In Google Analytics 4

1. **Real-time Reports**
   - Go to **Reports** → **Realtime**
   - See live users and events as they happen

2. **Page Views**
   - Go to **Reports** → **Engagement** → **Pages and screens**
   - Filter by page path: `/data-integration`

3. **Custom Events**
   - Go to **Reports** → **Engagement** → **Events**
   - Look for: `section_navigation`, `tab_selection`, `form_submit`, `generate_lead`

4. **Conversions**
   - Go to **Admin** → **Events**
   - Mark `generate_lead` as a conversion event
   - View conversion data in **Reports** → **Engagement** → **Conversions**

### Setting Up Conversion Tracking

To track form submissions as conversions:

1. Go to **Admin** → **Events**
2. Find the `generate_lead` event
3. Toggle **Mark as conversion**
4. The event will now appear in your conversion reports

## Testing the Implementation

### 1. Test in Development

```bash
# Enable analytics in development
echo "NEXT_PUBLIC_GA_DEBUG=true" >> .env.local

# Start the development server
npm run dev
```

### 2. Check Browser Console

Open your browser's developer tools and check the **Network** tab for:
- Requests to `https://www.googletagmanager.com/gtag/js`
- Requests to `https://www.google-analytics.com/g/collect`

### 3. Use Google Analytics DebugView

1. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/) Chrome extension
2. Enable the extension
3. Navigate to your site
4. Go to GA4 → **Admin** → **DebugView**
5. You should see real-time events

### 4. Test Specific Events

Visit `http://localhost:3000/data-integration` and:

- ✅ Click "See How It Works" → Check for `section_navigation` event
- ✅ Click "Get Started Free" → Check for `section_navigation` event
- ✅ Switch between mapping tabs → Check for `tab_selection` event
- ✅ Submit the form → Check for `form_submit` and `generate_lead` events

## Tracked Metrics for `/data-integration`

| Metric | Description | GA4 Event |
|--------|-------------|-----------|
| Page Views | Number of times the page is viewed | `page_view` |
| Unique Visitors | Number of unique users visiting | Built-in metric |
| Section Navigation | Users clicking to scroll to sections | `section_navigation` |
| Tab Interactions | Users switching between mapping tabs | `tab_selection` |
| Form Submissions | Successful registration submissions | `form_submit` |
| Lead Conversions | Qualified leads generated | `generate_lead` |
| Scroll Depth | How far users scroll (25%, 50%, 75%) | `scroll_depth` |
| Time Engagement | Time spent on page (30s, 60s) | `engagement` |

## Custom Dimensions and Reports

### Recommended Custom Dimensions

To get more insights, consider creating these custom dimensions in GA4:

1. **Platform** - Track which e-commerce platform users select
2. **Interest Area** - Track what users are interested in
3. **Newsletter Signup** - Track newsletter opt-in rate

### Creating Custom Reports

1. Go to **Explore** in GA4
2. Create a new exploration
3. Add dimensions: `Page path`, `Event name`
4. Add metrics: `Event count`, `Users`, `Sessions`
5. Filter by page path: `/data-integration`

## Privacy and Compliance

- The implementation respects user privacy
- No personally identifiable information (PII) is sent to GA4
- IP addresses are anonymized by default in GA4
- Consider adding a cookie consent banner for GDPR compliance

## Troubleshooting

### Analytics Not Showing Data

1. **Check Environment Variable**
   ```bash
   # Ensure this is set in .env.local
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Clear Browser Cache**
   - Clear cache and reload the page

3. **Check Ad Blockers**
   - Disable ad blockers or privacy extensions

4. **Verify Measurement ID**
   - Ensure the ID is correct in Google Analytics

### Events Not Firing

1. **Check Browser Console**
   - Look for JavaScript errors
   - Verify `window.gtag` is defined

2. **Check Network Tab**
   - Look for requests to `google-analytics.com`

3. **Test in Incognito Mode**
   - Extensions might be blocking analytics

## Files Modified

- `src/components/GoogleAnalytics.tsx` - Main analytics component with route tracking
- `src/app/layout.tsx` - Root layout including the GoogleAnalytics component
- `src/app/data-integration/page.tsx` - Enhanced with custom event tracking
- `.env.example` - Template for environment variables

## Next Steps

1. **Set up Goals and Conversions**
   - Mark `generate_lead` as a conversion
   - Set up funnel analysis for the registration form

2. **Create Custom Dashboards**
   - Build a dashboard for data integration page performance
   - Track conversion rates and user engagement

3. **Set up Alerts**
   - Get notified when conversions drop
   - Monitor traffic spikes or drops

4. **Integration with Other Tools**
   - Connect GA4 with Google Ads for remarketing
   - Link to BigQuery for advanced analysis

## Support

For questions or issues:
- Check the [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- Review Next.js [Analytics Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
