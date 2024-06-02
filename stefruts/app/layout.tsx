import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stefruts - Pour ceux qui veulent des fruits",
  description: "Pour ceux qui veulent des fruits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link rel="icon" href="/stefruts_32x32.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
