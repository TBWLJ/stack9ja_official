import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stack9Ja — Custom Software, Web & Mobile Solutions",
    template: "%s | Stack9ja",
  },
  description:
    "Stack9Ja builds custom software, websites, mobile apps, cloud solutions, and secure digital products for businesses and organizations. We help you scale with modern technology.",
  keywords: [
    "custom software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "business software",
    "IT consulting",
    "digital transformation",
    "software company in Nigeria",
    "Software company in Ogbomoso",
  ],
  authors: [{ name: "Stack9Ja" }],
  creator: "Stack9Ja",
  publisher: "Stack9Ja",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "YourBrand — Custom Software, Web & Mobile Solutions",
    description:
      "We build custom software, websites, mobile apps, and cloud solutions to help businesses grow faster and smarter.",
    url: "https://stack9ja.com.ng",
    siteName: "Stack9Ja",
    images: [
      {
        url: "https://stack9ja.com.ng/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stack9Ja - Custom Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack9Ja — Custom Software, Web & Mobile Solutions",
    description:
      "We build custom software, websites, mobile apps, and cloud solutions to help businesses grow faster and smarter.",
    images: ["https://stack9ja.com.ng/og-image.png"],
    creator: "@stack9ja", // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://stack9ja.com.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
