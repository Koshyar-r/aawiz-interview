import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Next.js Dashboard App As Requested By Aawiz",
  description: "Dashboard with shadcn UI, dark mode, React Hook Form, and product API fetching.",
  keywords: [
    "Next.js",
    "Dashboard",
    "React",
    "Tailwind",
    "shadcn UI",
    "React Hook Form",
    "Dark Mode"
  ],
  authors: [{ name: "Kushyar" }],

  openGraph: {
    title: "Next.js Dashboard App As Requested By Aawiz",
    description: "A mini dashboard app built with Next.js, featuring dark mode and product fetching.",
    url: "https://your-vercel-url.vercel.app",
    siteName: "Next.js Dashboard App",
    images: [
      {
        url: "https://your-vercel-url.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dashboard Preview"
      }
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next.js Dashboard App",
    description: "A mini dashboard built with Next.js + shadcn UI.",
    images: ["https://your-vercel-url.vercel.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}