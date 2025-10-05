// EmailJS Configuration for LZ-Tech Contact Form
// 
// To activate the contact form, follow these steps:
// 
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - your email (yourdanovkristian@gmail.com)
// 
// 4. Get your credentials from EmailJS dashboard:
//    - Service ID
//    - Template ID  
//    - Public Key
// 
// 5. Replace the placeholder values in App.tsx with your actual EmailJS credentials:
//    - serviceId: 'YOUR_SERVICE_ID'
//    - templateId: 'YOUR_TEMPLATE_ID'  
//    - publicKey: 'YOUR_PUBLIC_KEY'
//
// Example template for EmailJS:
// Subject: New Contact from LZ-Tech Website - {{subject}}
// 
// You have received a new message from your LZ-Tech website:
//
// Name: {{from_name}}
// Email: {{from_email}}
// Subject: {{subject}}
//
// Message:
// {{message}}
//
// Reply to: {{from_email}}

export const EMAIL_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', 
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
};