import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['satyamsingh.shriram0929@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
              <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
                <p><strong style="color: #4b5563;">Email:</strong> ${email}</p>
                <p><strong style="color: #4b5563;">Message:</strong></p>
                <p style="background-color: #f3f4f6; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">
                This message was sent from your portfolio website.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent from your portfolio website.
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}