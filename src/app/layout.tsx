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
  title: "Dhanush",
  description: "Welcome to Dhanush's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
