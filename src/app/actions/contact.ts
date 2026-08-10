'use server';

import { Resend } from 'resend';

// Make sure to lazily instantiate this or check if the API key exists 
// so we don't crash on build if the key isn't provided yet.
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

export type ContactState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const honeypot = formData.get('_honey') as string;

  // Anti-spam honeypot
  if (honeypot) {
    // silently fail to confuse bots
    return { error: 'Spam detected' };
  }

  // Server-side validation
  if (!name || !email || !message) {
    return { error: 'All fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: 'Invalid email address.' };
  }

  if (name.length > 100) {
    return { error: 'Name is too long.' };
  }

  if (email.length > 254) {
    return { error: 'Email is too long.' };
  }

  if (message.length > 5000) {
    return { error: 'Message is too long.' };
  }

  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!toEmail) {
    console.error('CONTACT_EMAIL environment variable is missing.');
    return { error: 'Server configuration error. Please try again later.' };
  }

  const resend = getResendClient();
  if (!resend) {
    console.error('RESEND_API_KEY environment variable is missing.');
    return { error: 'Server configuration error. Please try again later.' };
  }

  try {
    const data = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio Contact — ${name}`,
      text: `PORTFOLIO CONTACT\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return { error: "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { error: "Something went wrong. Please try again." };
  }
}
