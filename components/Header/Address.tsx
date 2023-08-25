'use client';

import { useAddress } from '@thirdweb-dev/react';
import React from 'react';

function Address() {
  const address = useAddress();

  return (
    <p className="text-xs text-emerald-500 font-semibold bg-black/20 px-3 py-2 rounded-md">
      User: {address?.substring(0, 5)}...
      {address?.substring(address.length, address.length - 5)}
    </p>
  );
}

export default Address;
