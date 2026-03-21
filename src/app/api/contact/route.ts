import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gustaavohenrique@hotmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>Name</h2>
        <p>${escapeHtml(name)}</p>
        <h2>Email</h2>
        <p>${escapeHtml(email)}</p>
        <h2>Subject</h2>
        <p>${escapeHtml(subject)}</p>
        <h2>Message</h2>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
