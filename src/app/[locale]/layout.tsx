import type { Metadata } from "next";
import localFont from 'next/font/local'
import "../globals.css";
import { NavigationMenu } from "@/components/navigationMenu";
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Footer } from "@/components/footer";


const urbanist = localFont({
  src: [
    {
      path: '../../fonts/Urbanist-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/Urbanist-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Urbanist-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Urbanist-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/Urbanist-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: "Miau Club",
  description: "Tudo para o seu PET, na palma da mão."
};

export default async function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <NextIntlClientProvider
          messages={messages}
        >
          <NavigationMenu />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
