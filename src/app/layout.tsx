import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../../.semantic/dist/semantic.min.css';
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decipher",
  description: "crypto tools by sudomoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
