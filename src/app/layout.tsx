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
  title: "Dhanush Draksharapu | Full Stack Developer",
  description:
    "Portfolio of Dhanush Draksharapu (dhanushdotcodes), an Applied AI and Full Stack Developer specializing in Next.js, TypeScript, and AI-powered applications. Previously at Zentor.",
  keywords: [
    "Dhanush Draksharapu",
    "D Dhanush",
    "dhanushdotcodes",
    "Dhanush Draksharapu Zentor",
    "Dhanush Draksharapu Linkedin",
    "Dhanush Draksharapu X",
    "Dhanush Draksharapu Full Stack Developer",
    "D Dhanush Full Stack Developer",
    "Applied AI",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI Developer",
    "TypeScript",
    "React Developer",
  ],
  authors: [{ name: "Dhanush Draksharapu", url: "https://dhanush.codes" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dhanush Draksharapu | Full Stack Developer",
    description:
      "Welcome to my portfolio. I build full-stack, AI-powered applications with a focus on Applied AI. Discover my projects and experience.",
    url: "https://dhanush.codes",
    siteName: "Dhanush Draksharapu Portfolio",
    images: [
      {
        url: "https://dhanush.codes/preview.png",
        width: 1200,
        height: 630,
        alt: "Dhanush Draksharapu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush Draksharapu | Applied AI & Full Stack Developer",
    description: "Applied AI and Full Stack Developer Portfolio",
    images: ["https://dhanush.codes/preview.png"],
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
    name: "Dhanush Draksharapu",
    alternateName: "dhanushdotcodes",
    url: "https://dhanush.codes",
    image: "https://dhanush.codes/preview.png",
    jobTitle: "Applied AI and Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Zentor",
    },
    sameAs: [
      "https://github.com/dhanushdotcodes",
      "https://www.linkedin.com/in/dhanushdotcodes/",
      "https://x.com/dhanushdotcodes",
      "https://peerlist.io/dhanushdotcodes",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Generative AI",
      "FastAPI",
      "Express",
      "PostgreSQL",
      "Vercel"
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
