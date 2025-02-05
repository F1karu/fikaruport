"use client";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from '../components/header';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {/* Set z-index for Header to ensure it stays on top */}
        <Header className="z-20 relative" /> {/* Set higher z-index for Header */}
        <div className="bg-home bg-no-repeat bg-cover">
          <div className="bg-brown w-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
