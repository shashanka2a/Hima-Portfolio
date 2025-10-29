import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Himavarshini Parvathreddy | Digital Marketing Portfolio',
  description: 'Digital marketing intern passionate about crafting campaigns that connect through Instagram, Facebook, and storytelling.',
  keywords: ['digital marketing', 'social media marketing', 'portfolio', 'marketing', 'Instagram', 'Facebook', 'content creation'],
  authors: [{ name: 'Himavarshini Parvathreddy' }],
  openGraph: {
    title: 'Himavarshini Parvathreddy | Digital Marketing Portfolio',
    description: 'Digital marketing intern passionate about crafting campaigns that connect through Instagram, Facebook, and storytelling.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himavarshini Parvathreddy | Digital Marketing Portfolio',
    description: 'Digital marketing intern passionate about crafting campaigns that connect through Instagram, Facebook, and storytelling.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

