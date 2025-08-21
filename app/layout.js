import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientOnlyWrapper from "./providers/ClientOnlyWrapper";
import ThemeToggleButton from "./component/core/ThemeToggleButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MostofaDev - Web Developer & Designer",
  description: "I create professional, responsive websites using Next.js and React.",
  
  openGraph: {
    title: "MostofaDev",
    description: "I create professional, responsive websites using Next.js and React.",
    url: "https://mostofadev.com",
    siteName: "MostofaDev",
    images: [
      {
        url: "https://mostofadev.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MostofaDev",
    description: "I create professional, responsive websites using Next.js and React.",
    creator: "@mostofadev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientOnlyWrapper>
          <ThemeToggleButton />
          {children}
        </ClientOnlyWrapper>
      </body>
    </html>
  );
}
