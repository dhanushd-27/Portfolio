import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import localFont from "next/font/local";

const dmSans = localFont({
  src: [
    {
      path: "../fonts/DM_Sans/static/DMSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/static/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/static/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/static/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/static/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/static/DMSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/DM_Sans/static/DMSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ]
});

export const metadata: Metadata = {
  title: "D Dhanush",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${dmSans.className}`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
