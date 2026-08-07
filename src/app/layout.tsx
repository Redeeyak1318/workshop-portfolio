import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raktim Sonowal",
  description: "Computer Science Engineer | Full Stack Developer | AI Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
