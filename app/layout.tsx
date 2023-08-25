import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomThirdwebProvider from '@/providers/CustomThirdWebProvider';
import CheckAuth from '@/providers/CheckAuth';
import { useRouter } from 'next/navigation';

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
      <CustomThirdwebProvider>
        <CheckAuth />
        <body className={inter.className + ' bg-[#141717]'}>{children}</body>
      </CustomThirdwebProvider>
    </html>
  );
}
