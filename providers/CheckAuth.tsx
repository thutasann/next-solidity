'use client';

import { useAddress } from '@thirdweb-dev/react';
import { useRouter } from 'next/navigation';
import React from 'react';

function CheckAuth() {
  const address = useAddress();
  const router = useRouter();

  if (address) {
    router.push('/');
  } else {
    router.push('/login');
  }

  return <></>;
}

export default CheckAuth;
