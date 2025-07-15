import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Light Screen Studio – Web Design for Creators",
  description: "Helping brands shine online with custom websites that sparkle.",
  openGraph: {
    title: "Light Screen Studio",
    description: "Helping brands shine online.",
    url: "https://yourdomain.com",
    siteName: "Light Screen Studio",
    images: [
      {
        url: "/metaimage.png",
        width: 1200,
        height: 630,
        alt: "LightScreen Studios Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Light Screen Studio",
    description: "Helping brands shine online.",
    images: ["/metaimage.png"],
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
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
