import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { NavigationMenu } from "@/components/navigation-menu";
import { BottomMenu } from "@/components/bottom-menu";
import { Analytics } from '@vercel/analytics/react';

const approach = localFont({
  src: [
    {
      path: '../fonts/Urbanist-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Urbanist-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Urbanist-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Urbanist-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Urbanist-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
})
export const metadata: Metadata = {
  title: "Miau Club",
  description: "Tudo para o seu PET, na palma da mão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={approach.className}>
        <NavigationMenu />
        {children}
        <BottomMenu />
        <Analytics />
      </body>
    </html>
  );
}
