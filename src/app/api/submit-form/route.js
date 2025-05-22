import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Format date for spreadsheet
    const formattedDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // 1. Save to Google Sheets
    await saveToGoogleSheets({
      date: formattedDate,
      firstName: data.firstName,
      lastName: data.lastName || 'N/A',
      email: data.email,
      phone: data.phone || 'N/A',
      requirements: data.requirements || 'N/A',
      message: data.message
    });
    
    // 2. Send confirmation email
    await sendEmail({
      to: data.email,
      name: data.firstName,
      message: data.message
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

async function saveToGoogleSheets(data) {
  try {
    // Auth with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: '160HiaYBPbzCZNhUuzgaFM3EI1n_xpvb8Ftof4glp3lI',
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [
            data.date,
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.requirements,
            data.message
          ]
        ]
      }
    });
  } catch (error) {
    console.error('Google Sheets error:', error);
    throw new Error('Failed to save to Google Sheets');
  }
}

async function sendEmail({ to, name, message }) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mihirdomadiya5@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    // Email template
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #111; color: white; border-radius: 10px; border: 1px solid #313131;">
        <h1 style="color: #3f92ff; text-align: center;">Thank You for Connecting!</h1>
        <p>Hello ${name},</p>
        <p>Thank you for reaching out to me. I've received your message:</p>
        <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3f92ff;">
          <p style="font-style: italic;">"${message}"</p>
        </div>
        <p>I'll review your request and get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p><strong>Mihir Domadiya</strong></p>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #313131;">
          <p style="font-size: 12px; color: #6e6e6e;">© 2025 Mihir. All rights reserved.</p>
        </div>
      </div>
    `;
    
    // Send email
    await transporter.sendMail({
      from: '"Mihir Domadiya" <mihirdomadiya5@gmail.com>',
      to,
      subject: 'Thank You for Connecting with Mihir',
      html: emailContent
    });
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
}