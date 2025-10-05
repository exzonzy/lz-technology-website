// Simple Contact Form Handler (Alternative Solution)
// This creates a mailto link with pre-filled data but in a more user-friendly way

export const createMailtoLink = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = formData;
  
  const emailSubject = `New Contact from LZ-Tech Website - ${subject}`;
  const emailBody = `Hello Kristian,

You have received a new message from your LZ-Tech website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your LZ-Tech website contact form.
Reply directly to: ${email}`;

  const mailtoUrl = `mailto:yourdanovkristian@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
  return mailtoUrl;
};

export const sendEmailViaBrowser = (formData: any) => {
  const mailtoLink = createMailtoLink(formData);
  window.open(mailtoLink, '_blank');
};