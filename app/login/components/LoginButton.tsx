'use client';

import { useMetamask } from '@thirdweb-dev/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function LoginButton() {
  const connect = useMetamask();
  const [loading, setLoading] = useState(false);

  function handleConnect() {
    connect()
      .then(() => {
        setLoading(true);
      })
      .catch(() => toast.error('Install Metamask on your chrome first!'))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <button
      onClick={handleConnect}
      className="bg-white hover:bg-white/90 px-4 md:px-8 py-3 md:py-5 mt-10 rounded-lg shadow-lg font-bold text-[#141717]"
    >
      {loading ? 'Logging...' : 'Login'} with Metamask
    </button>
  );
}

export default LoginButton;
