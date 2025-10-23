import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google';
 
const SpaceMono = localFont({
  src: '../../public/Space_Mono/SpaceMono-Regular.ttf',
  variable: '--font-space-mono',
})

const PoppinsHeader = Poppins({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "TADS-FE",
  description: "Frontend development by a data minded individual.",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceMono.variable} ${PoppinsHeader.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
