# Google Apps Script Registration Form Integration Guide

This guide explains how to integrate the Data Nexus landing page registration form with your Google Apps Script backend for email verification.

## Overview

The registration form on `/data-integration` collects user information and submits it to your Google Apps Script, which handles:
- Email verification with unique tokens
- Bounce detection via Gmail
- Storage in Google Sheets (Sheet1, Pending Verifications, Bounced Emails)

## Configuration

### Step 1: Add Your Google Apps Script URL

Open the file: `src/app/data-integration/page.tsx`

Find this line (around line 12):

```typescript
GOOGLE_SCRIPT_URL: '[PLACEHOLDER_URL]',
```

Replace `[PLACEHOLDER_URL]` with your actual Google Apps Script deployment URL:

```typescript
GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
```

**Your URL:**
```
https://script.google.com/a/macros/apilets.com/s/AKfycbzdbfFTq6xyZAajXxJo92r7YCgcutc1ke49JiDcSCl8ZyyG3Ek20RkV9L6YlB4wkkhO/exec
```

### Step 2: Verify Field Mapping

The form submits data in this exact format to match your Google Apps Script backend:

```javascript
{
  "fullName": "John Smith",        // Required
  "email": "john@company.com",     // Required
  "company": "Acme Corp",          // Optional (empty string if not provided)
  "phone": "+61400000000",         // Optional (empty string if not provided)
  "platform": "Shopify",           // Optional (empty string if not provided)
  "brief": "Need help...",         // Optional (empty string if not provided)
  "interest": "Reverse ETL",       // Optional (empty string if not provided)
  "newsletter": true               // Boolean (false if unchecked)
}
```

**Important:** All optional fields send an empty string `''` (not null or undefined) when not filled.

### Step 3: Google Sheets Row Format

Your Google Apps Script should store data in this row format (matching your backend):

```javascript
[
  timestamp,           // Current timestamp
  fullName,            // From form
  email,               // From form
  company,             // From form (or empty string)
  phone,               // From form (or empty string)
  platform,            // From form (or empty string)
  brief,               // From form (or empty string)
  interest,            // From form (or empty string)
  newsletter,          // Boolean from form
  token,               // Generated verification token
  expiry,              // Token expiry timestamp
  verified,            // false initially
  verificationDate     // empty string initially
]
```

## Form Fields

### Required Fields
- **Full Name** (`fullName`) - Minimum 2 characters
- **Email Address** (`email`) - Valid email format

### Optional Fields
- **Company** (`company`) - Text input
- **Phone Number** (`phone`) - Validated for international format if provided
- **Current Platform** (`platform`) - Dropdown with options:
  - Shopify
  - BigCommerce
  - Magento
  - WooCommerce
  - Commercetools
  - SAP Hybris
  - Custom Built
  - Other

- **Interest** (`interest`) - Dropdown with options:
  - Reverse ETL
  - Real-time Inventory Sync
  - Data Migration
  - Custom Integration
  - Ecommerce Data Integration
  - Schedule a Demo
  - Just Exploring

- **Brief** (`brief`) - Textarea, maximum 500 characters
- **Newsletter** (`newsletter`) - Checkbox, defaults to unchecked (false)

## Form Behavior

### Validation
- **Client-side validation** runs on form submission
- **Email format:** Uses standard email regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Phone validation:** International format (optional) `/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/`
- **Brief field:** Maximum 500 characters enforced

### Submission Flow

1. **User fills form** and clicks "Get Started"
2. **Validation runs** - If errors, displays inline error messages
3. **Loading state** - Button text changes to "Submitting...", form is disabled
4. **POST request** sent to Google Apps Script with `mode: 'no-cors'`
5. **Success handling:**
   - Success message displays: "Thank you for registering! We've sent a verification email to [email]..."
   - Form clears completely
   - Success message auto-hides after 5 seconds
   - Google Analytics event fires (if GA4 configured)
6. **Error handling:**
   - Error message displays with specific error text
   - Form remains filled for user to retry
   - User can correct and resubmit

### Success Message

```
✓ Thank you for registering!
We've sent a verification email to user@example.com.
Please check your inbox (and spam folder) and click the
verification link to complete your registration.
```

### Error Messages

- **Network failure:** "Connection failed. Please check your internet and try again."
- **Generic error:** "Something went wrong. Please try again or email us at info@apilets.com"

## Technical Details

### Why `mode: 'no-cors'`?

Google Apps Script requires `no-cors` mode for cross-origin requests. This means:
- The browser won't allow reading the response body
- We assume success if the fetch doesn't throw an error
- Error detection is limited to network failures

### Form Location

The registration form is located in:
- **File:** `src/app/data-integration/page.tsx`
- **Section:** `<section id="register">` (around line 794)
- **Page URL:** `/data-integration`

The form appears at the bottom of the Data Nexus landing page, before the footer CTA.

### Configuration Options

You can customize these settings in the `FORM_CONFIG` object:

```typescript
const FORM_CONFIG = {
  GOOGLE_SCRIPT_URL: '[YOUR_URL]',     // Your Google Apps Script URL
  COMPANY_NAME: 'Apilets',             // Your company name
  CONTACT_EMAIL: 'info@apilets.com',   // Support email
  SUCCESS_MESSAGE_DURATION: 5000,      // Auto-hide success message (ms)

  PLATFORMS: [...],  // Platform dropdown options
  INTERESTS: [...],  // Interest dropdown options
};
```

## Testing Checklist

Before going live, verify:

- [ ] **Configuration:**
  - [ ] Google Apps Script URL is correctly added
  - [ ] URL is from your deployed script (not test/dev)
  - [ ] Contact email is correct

- [ ] **Form Functionality:**
  - [ ] Form loads on `/data-integration` page
  - [ ] All fields are visible and styled correctly
  - [ ] Required fields show validation errors when empty
  - [ ] Email validation rejects invalid formats
  - [ ] Phone validation works for international formats
  - [ ] Brief field limits to 500 characters
  - [ ] Dropdown options display correctly

- [ ] **Submission:**
  - [ ] Clicking "Get Started" triggers validation
  - [ ] Form disables during submission
  - [ ] Button text changes to "Submitting..."
  - [ ] Success message displays with submitted email
  - [ ] Form clears after successful submission
  - [ ] Success message auto-hides after 5 seconds
  - [ ] Can submit multiple times without page refresh

- [ ] **Data Flow:**
  - [ ] Data appears in "Pending Verifications" Google Sheet
  - [ ] All fields are correctly populated
  - [ ] Empty optional fields show as empty strings (not null)
  - [ ] Newsletter checkbox value is boolean (true/false)
  - [ ] Verification email is sent
  - [ ] Email contains verification link

- [ ] **Error Handling:**
  - [ ] Network errors show appropriate message
  - [ ] Form remains filled after error
  - [ ] User can correct and resubmit
  - [ ] Error message is user-friendly

- [ ] **Mobile Responsiveness:**
  - [ ] Form displays correctly on mobile (<768px)
  - [ ] Two-column layout becomes single-column
  - [ ] All fields are accessible
  - [ ] Submit button is easily tappable
  - [ ] Success/error messages are readable

- [ ] **Accessibility:**
  - [ ] All fields have proper labels
  - [ ] Tab navigation works correctly
  - [ ] Error messages are announced (screen readers)
  - [ ] Focus states are visible
  - [ ] Required fields are marked clearly

## Development Workflow

### Local Testing

1. **Start development server:**
   ```bash
   PORT=3003 npm run dev
   ```

2. **Navigate to:**
   ```
   http://localhost:3003/data-integration
   ```

3. **Scroll to registration section** or click "Get Started Free" button in hero

4. **Test form submission:**
   - Fill required fields (name and email)
   - Optionally fill other fields
   - Submit and check Google Sheets

### Production Deployment

1. **Verify Google Apps Script URL** is production URL
2. **Build the application:**
   ```bash
   npm run build
   ```
3. **Test production build:**
   ```bash
   npm start
   ```
4. **Deploy to hosting** (Vercel, AWS, etc.)
5. **Test live form** on production domain

## Troubleshooting

### Form doesn't submit
- **Check:** Console for errors (F12 → Console)
- **Check:** Google Apps Script URL is correct
- **Check:** Script is deployed and accessible
- **Try:** Test submission with curl to verify script works

### No data in Google Sheets
- **Check:** Google Apps Script execution logs
- **Check:** Sheet permissions (script has write access)
- **Check:** Correct sheet names ("Pending Verifications")
- **Check:** Field mapping matches script expectations

### Verification email not sent
- **Check:** Google Apps Script email quota
- **Check:** Gmail account has access
- **Check:** Email template in script is correct
- **Check:** "Sent" folder in Gmail

### Form validation not working
- **Check:** Browser console for JavaScript errors
- **Check:** react-hook-form and zod are installed
- **Check:** Field names match schema definitions

### Success message doesn't display
- **Check:** `submitStatus` state is being set to 'success'
- **Check:** `submittedEmail` is populated
- **Check:** No conflicting CSS hiding the message

## Google Apps Script Requirements

Your Google Apps Script should:

1. **Accept POST requests** at the deployed web app URL
2. **Parse JSON payload** from request body
3. **Generate unique token** for email verification
4. **Send verification email** with token link
5. **Store in Google Sheets** ("Pending Verifications" sheet)
6. **Handle verification** when user clicks link in email
7. **Move to "Sheet1"** when verified
8. **Detect bounced emails** and move to "Bounced Emails" sheet

### Example Script Structure

```javascript
function doPost(e) {
  try {
    // Parse request
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.fullName || !data.email) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Missing required fields' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Generate token
    const token = Utilities.getUuid();
    const expiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store in "Pending Verifications" sheet
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID')
      .getSheetByName('Pending Verifications');

    sheet.appendRow([
      new Date(),
      data.fullName,
      data.email,
      data.company || '',
      data.phone || '',
      data.platform || '',
      data.brief || '',
      data.interest || '',
      data.newsletter || false,
      token,
      expiry,
      false,
      ''
    ]);

    // Send verification email
    const verificationLink = `https://yourdomain.com/verify?token=${token}`;
    MailApp.sendEmail({
      to: data.email,
      subject: 'Verify your email for Apilets',
      htmlBody: `
        <p>Hi ${data.fullName},</p>
        <p>Please click the link below to verify your email:</p>
        <p><a href="${verificationLink}">Verify Email</a></p>
        <p>This link expires in 24 hours.</p>
      `
    });

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Support

For issues with:
- **Form functionality:** Check this documentation and troubleshooting section
- **Google Apps Script:** Check Apps Script execution logs
- **Email delivery:** Check Gmail sent folder and quota
- **Google Sheets:** Verify permissions and sheet structure

**Contact:** info@apilets.com

## Change Log

- **Initial Implementation:** Added registration form with Google Apps Script integration
- **Fields Added:** fullName, email, company, phone, platform, brief, interest, newsletter
- **Validation:** Client-side validation with Zod schema
- **Integration:** no-cors mode for Google Apps Script compatibility
