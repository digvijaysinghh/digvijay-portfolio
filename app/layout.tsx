import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digvijay Singh — Cybersecurity Engineer',
  description:
    'The personal portfolio of Digvijay Singh: cybersecurity engineering, API security, security validation, and practical problem-solving.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
