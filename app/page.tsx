'use client';

import Header from '@/components/Header';
import { useAddress } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const address = useAddress();

  if (!address) {
    redirect('/login');
  }

  return (
    <main>
      <Header />
    </main>
  );
}
