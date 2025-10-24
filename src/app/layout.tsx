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
  title: {
    default: "TADS Tech - Professional Web Development & 3D Experiences",
    template: "%s | TADS Tech",
  },
  description:
    "TADS Tech specializes in cutting-edge web development with Next.js, React, TypeScript, and Three.js. We create stunning, high-performance web applications and immersive 3D experiences.",
  keywords: [
    "web development",
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "3D web experiences",
    "frontend development",
    "custom web applications",
    "web design",
    "UI/UX",
    "TADS Tech",
    "Nigeria web developers",
    "modern web technologies",
  ],
  authors: [{ name: "TADS Tech" }],
  creator: "TADS Tech",
  publisher: "TADS Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tadstechfe.web.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tadstechfe.web.app",
    siteName: "TADS Tech",
    title: "TADS Tech - Professional Web Development & 3D Experiences",
    description:
      "Transform your vision into reality with cutting-edge web solutions. We specialize in Next.js, React, TypeScript, and Three.js development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TADS Tech - Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TADS Tech - Professional Web Development & 3D Experiences",
    description:
      "Transform your vision into reality with cutting-edge web solutions. We specialize in Next.js, React, TypeScript, and Three.js development.",
    images: ["/twitter-image.jpg"],
    creator: "@tadstech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#134a87" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${SpaceMono.variable} ${PoppinsHeader.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
