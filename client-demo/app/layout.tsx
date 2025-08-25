// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Demo Website',
  description: 'A modern website template',
  // This viewport meta tag is automatically added by Next.js and is crucial for responsiveness.
  // It tells mobile browsers to render the page at the device's actual width.
  viewport: 'width=device-width, initial-scale=1', 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        The <body> tag is a block-level element. By default, it will take up 
        100% of the available width, making it naturally responsive.
      */}
      <body className={inter.className}>
        
        {/* 
          --- DELEGATED RESPONSIVENESS ---
          The layout's primary job is to place the main components. The responsiveness
          of each component is handled *inside* that component's own file.
        */}

        {/* The Navbar component has its own mobile and desktop styles. */}
        <Navbar /> 

        {/* 
          The <main> tag holds your page content. It's a fluid container that
          will hold your other responsive pages and sections.
        */}
        <main>{children}</main>

        {/* The Footer component has its own mobile and desktop styles. */}
        <Footer />
        
        {/* 
          The CookieBanner is typically a 'fixed' position element. Its responsiveness
          is self-contained within its own file. It's placed outside the body's main
          flex/grid structure for correct positioning.
        */}
        <CookieBanner />
      </body>
    </html>
  );
}