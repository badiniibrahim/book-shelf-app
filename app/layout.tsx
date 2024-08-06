import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getServerUrl } from "@/get-server-url";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Shelf",
  description: "The best reading or listening experience on any computer",
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
