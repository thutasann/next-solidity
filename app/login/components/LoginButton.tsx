'use client';

import { useMetamask } from '@thirdweb-dev/react';
import React from 'react';

function LoginButton() {
  const connect = useMetamask();

  return (
    <button
      onClick={() => connect()}
      className="bg-white hover:bg-white/90 px-8 py-5 mt-10 rounded-lg shadow-lg font-bold text-[#141717]"
    >
      Login with Metamask
    </button>
  );
}

export default LoginButton;
