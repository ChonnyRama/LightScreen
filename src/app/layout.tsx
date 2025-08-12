import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Web Development and Digital Systems | Light Screen Studio",
  description:
    "I help small brands and creatives launch fast, high-performing websites with systems that save time, boost visibility, and support growth.",
  openGraph: {
    title: "Light Screen Studio",
    description: "Helping brands shine online.",
    url: "https://lightscreenstudio.com",
    siteName: "Light Screen Studio",
    images: [
      {
        url: "/LSlogo.png",
        width: 1200,
        height: 630,
        alt: "LightScreen Studios Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          GeistSans.variable,
          GeistMono.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
