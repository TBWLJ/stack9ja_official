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
    default: "Beitora — Get your Kiosk-Link Band.",
    template: "%s | Stack9ja",
  },
  description:
    "Beitora is a Kiosk-Link Band that provides secure, contactless access control for businesses and organizations. With Beitora, you can easily manage access to your facilities, events, and more.",
  keywords: [
    "Beitora",
    "Kiosk-Link Band",
    "Access Control",
    "Finswitz",
    "Mivelo",
    "Panelly",
    "Fintech",
    "Ecommerce",
    "Client Portal",
    "Payment Infrastructure",
    "Secure Access",
    "Contactless Access",
    "Event Management",
    "Facility Management",
  ],
  authors: [{ name: "Beitora" }],
  creator: "Beitora",
  publisher: "Beitora",
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
    title: "Beitora — Get your Kiosk-Link Band.",
    description:
    "Beitora is a Kiosk-Link Band that provides secure, contactless access control for businesses and organizations. With Beitora, you can easily manage access to your facilities, events, and more.",
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
    title: "Beitora — Get your Kiosk-Link Band.",
    description:
    "Beitora is a Kiosk-Link Band that provides secure, contactless access control for businesses and organizations. With Beitora, you can easily manage access to your facilities, events, and more.",
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
