'use client';

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import React from 'react';
import { ethers } from 'ethers';

interface IThirdWebProivder {
  children: React.ReactNode;
}

function CustomThirdwebProvider({ children }: IThirdWebProivder) {
  return (
    <ThirdwebProvider
      activeChain={ChainId.Mumbai}
      clientId="9a2db5c3c95c973c277dc571c0933890"
    >
      {children}
    </ThirdwebProvider>
  );
}

export default CustomThirdwebProvider;
