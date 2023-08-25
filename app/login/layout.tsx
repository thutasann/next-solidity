import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Crypto Lottery',
  description:
    'This is the crypto lottery web3 app crafted with nextjs and solidity',
  icons: {
    icon: './assets/logo.png',
  },
};

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
