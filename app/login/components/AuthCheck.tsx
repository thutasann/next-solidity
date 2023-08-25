'use client';

import { useAddress } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React from 'react';

function AuthCheck() {
  const address = useAddress();

  if (address) {
    redirect('/');
  }
  return <></>;
}

export default AuthCheck;
