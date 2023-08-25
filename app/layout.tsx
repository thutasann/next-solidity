import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomThirdwebProvider from '@/providers/CustomThirdWebProvider';
import ToastProvider from '@/providers/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Lottery',
  description:
    'This is the crypto lottery web3 app crafted with nextjs and solidity',
  icons: {
    icon: './assets/logo.png',
  },
  authors: {
    name: 'thuta sann',
    url: 'http://thutadev.vercel.app/',
  },
  openGraph: {
    images: './assets/og.jpeg',
    type: 'website',
    url: 'https://next-crypto-lottery.vercel.app/',
    locale: 'en',
    title: 'Crypto Lottery',
    description: 'This is the Crypto Lottery',
    siteName: 'Crypto Lottery',
    countryName: 'Myanmar',
    alternateLocale: 'eng',
  },
  twitter: {
    title: 'Crypto Lottery',
    description: 'This is the Crypto Lottery',
    card: 'summary_large_image',
    site: '@thutasann3',
    images: './assets/og.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#141717]'}>
        <CustomThirdwebProvider>
          <ToastProvider />
          {children}
        </CustomThirdwebProvider>
      </body>
    </html>
  );
}
