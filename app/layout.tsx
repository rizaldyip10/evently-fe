import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/provider/toast-provider";
import { SessionProvider } from "next-auth/react";
import RqProvider from "@/utils/providers/rq-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evently",
  description: "Find your buscket list show ticket here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <RqProvider>
          <body className={inter.className}>
            <ToastProvider />
            {children}
          </body>
        </RqProvider>
      </SessionProvider>
    </html>
  );
}
