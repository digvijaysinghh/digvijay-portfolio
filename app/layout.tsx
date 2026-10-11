import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digvijay Singh - Security Engineer',
  description:
    'The personal portfolio of Digvijay Singh: cybersecurity engineering, API security, security validation, and practical problem-solving.',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
