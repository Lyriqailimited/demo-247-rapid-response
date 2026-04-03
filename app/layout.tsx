import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "247 Rapid Response — AI Receptionist Demo",
  description: "Experience AI-powered call handling for 247 Rapid Response",
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
