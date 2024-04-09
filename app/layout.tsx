import Nav from '@/Components/Nav';
import React, { ReactNode } from 'react';
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Title",
  description: "AI Commands",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
     
      <body className='dark:bg-medium'>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
