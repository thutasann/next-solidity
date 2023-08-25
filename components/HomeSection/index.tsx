'use client';

import { useAddress } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React from 'react';

function HomeSection() {
  const address = useAddress();

  if (!address) {
    redirect('/login');
  }

  return <div>HomeSection</div>;
}

export default HomeSection;
