import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { NavigationMenu } from "@/components/navigation-menu";

const approach = localFont({
  src: [
    {
      path: '../fonts/Approach-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Approach-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Approach-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Approach-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Approach-Bold.ttf',
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
      </body>
    </html>
  );
}
