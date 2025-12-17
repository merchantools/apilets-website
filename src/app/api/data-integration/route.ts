import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Form validation schema (server-side)
const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  platform: z.string().min(1, 'Please select a platform'),
  interest: z.string().min(1, 'Please select an area of interest'),
  newsletter: z.boolean().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = formSchema.parse(body);

    // Here you can implement your database storage or CRM integration
    // For now, we'll log the data and send a success response

    console.log('Data Nexus Lead Form Submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      source: 'data-integration-page',
    });

    // TODO: Implement one of the following:
    // 1. Save to MongoDB:
    //    const db = await connectToDatabase();
    //    await db.collection('leads').insertOne(validatedData);
    //
    // 2. Send to CRM (HubSpot example):
    //    await fetch('https://api.hubapi.com/contacts/v1/contact', {
    //      method: 'POST',
    //      headers: {
    //        'Content-Type': 'application/json',
    //        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //      },
    //      body: JSON.stringify({
    //        properties: [
    //          { property: 'email', value: validatedData.email },
    //          { property: 'firstname', value: validatedData.fullName.split(' ')[0] },
    //          { property: 'company', value: validatedData.company },
    //        ],
    //      }),
    //    });
    //
    // 3. Send email notification (SendGrid example):
    //    await fetch('https://api.sendgrid.com/v3/mail/send', {
    //      method: 'POST',
    //      headers: {
    //        'Content-Type': 'application/json',
    //        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //      },
    //      body: JSON.stringify({
    //        personalizations: [{
    //          to: [{ email: 'info@apilets.com' }],
    //          subject: 'New Data Nexus Lead',
    //        }],
    //        from: { email: 'noreply@apilets.com' },
    //        content: [{
    //          type: 'text/html',
    //          value: `
    //            <h2>New Lead Registration</h2>
    //            <p><strong>Name:</strong> ${validatedData.fullName}</p>
    //            <p><strong>Email:</strong> ${validatedData.email}</p>
    //            <p><strong>Company:</strong> ${validatedData.company}</p>
    //            <p><strong>Platform:</strong> ${validatedData.platform}</p>
    //            <p><strong>Interest:</strong> ${validatedData.interest}</p>
    //            <p><strong>Newsletter:</strong> ${validatedData.newsletter ? 'Yes' : 'No'}</p>
    //          `,
    //        }],
    //      }),
    //    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest! We will contact you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Data Integration Form Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
