import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avo Money",
  description: "Seamless Banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute inset-0 z-10 bg-black/[0.96]">{children}</body>
    </html>
  );
}
