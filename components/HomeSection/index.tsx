'use client';

import { useAddress, useContract } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { Loader } from '../Loader';
import Lorem from '../Lorem';

function HomeSection() {
  const address = useAddress();

  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
  );

  if (isLoading) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!address) {
    redirect('/login');
  }

  return <div className="text-white"></div>;
}

export default HomeSection;
