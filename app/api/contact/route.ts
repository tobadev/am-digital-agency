import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'AM Digital Agency <noreply@hello.amdigital.agency>',
      to: 'hello@amdigital.agency',
      bcc: 'hello@amdigital.agency',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="margin-bottom:24px">
          <img src="https://amdigital.agency/am-logo.svg" alt="AM Digital Agency" width="120" height="16" style="display:block" />
        </div>
        <h2 style="margin-top:0">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr style="margin-top:32px;border:none;border-top:1px solid #e5e5e5">
        <p style="font-size:12px;color:#999;margin-top:16px">This email was sent from an unmonitored mailbox. Please reply directly to <a href="mailto:hello@amdigital.agency">hello@amdigital.agency</a>.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
