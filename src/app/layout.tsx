import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import StoreProvider from "./StoreProvider";
import { Analytics } from "@vercel/analytics/react";

const hankenGrotesk = localFont({
  src: "../fonts/Hanken_Grotesk/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhanush.tech"),
  title: "Dhanush | Applied AI & Full Stack Developer",
  description:
    "Portfolio of D Dhanush, an Applied AI and Full Stack Developer specializing in Next.js, TypeScript, and AI-powered applications.",
  keywords: [
    "D Dhanush",
    "Dhanush",
    "Applied AI",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI Developer",
    "TypeScript",
    "React Developer",
  ],
  authors: [{ name: "D Dhanush", url: "https://dhanush.tech" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dhanush | Applied AI & Full Stack Developer",
    description:
      "Welcome to my portfolio. I build full-stack, AI-powered applications with a focus on Applied AI.",
    url: "https://dhanush.tech",
    siteName: "Dhanush's Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Dhanush Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush | Applied AI & Full Stack Developer",
    description: "Applied AI and Full Stack Developer Portfolio",
    images: ["/preview.png"],
    creator: "@orcatwt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "D Dhanush",
    url: "https://dhanush.tech",
    image: "https://dhanush.tech/preview.png",
    jobTitle: "Applied AI and Full Stack Developer",
    sameAs: [
      "https://github.com/dhanushd-27",
      "https://www.linkedin.com/in/dhanush27/",
      "https://x.com/orcatwt",
      "https://peerlist.io/dhanush_d27",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${hankenGrotesk.className} antialiased`}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
