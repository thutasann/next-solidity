import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Lottery',
  description:
    'This is the crypto lottery web3 app crafted with nextjs and solidity',
  icons: {
    icon: './assets/logo.png',
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
        <Header />
        {children}
      </body>
    </html>
  );
}
