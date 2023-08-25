'use client';

import { useAddress, useContract } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import FullPageLoader from '../Loader/FullPageLoader';

function HomeSection() {
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);

  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
  );

  if (isLoading) return <FullPageLoader />;

  if (!address) {
    redirect('/login');
  }

  return (
    <>
      {/* The Next Draw boxs */}
      <section className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
        <div className="stats-container">
          <h1 className="text-4xl mb-3 text-white font-bold text-center">
            The Next draw
          </h1>
          <div className="flex justify-between p-2 space-x-2">
            <div className="stats">
              <h2 className="text-sm">Total pool</h2>
              <p className="text-xl font-semibold">0.1 MATIC</p>
            </div>
            <div className="stats">
              <h2 className="text-sm">Tickets Remaining</h2>
              <p className="text-xl font-semibold">100</p>
            </div>
          </div>

          {/* Countdown timer */}
        </div>

        <div className="stats-container space-y-2">
          <div className="stats-container">
            <div className="flex justify-between items-center text-white pb-2">
              <h2 className="font-semibold">Price per ticket</h2>
              <p className="ml-0 md:ml-6">0.01 MATIC</p>
            </div>
            <div className="flex text-white items-center space-x-2 bg-[#141a1a] border-[#004335] border p-4">
              <p>TICKETS</p>
              <input
                className="flex w-full bg-transparent text-right   outline-none"
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2 mt-5">
              <div className="flex items-center justify-between text-emerald-300 text-xs italic font-extrabold">
                <p>Total cost of tickets</p>
                <p>0.99</p>
              </div>
              <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                <p>Service fees</p>
                <p>0.001</p>
              </div>

              <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                <p>+ Network Fees</p>
                <p>TBC</p>
              </div>
            </div>

            <button className="mt-5 w-full bg-gradient-to-br from-teal-500 to-emerald-600 py-5 px-10 rounded-md text-white shadow-xl disabled:from-gray-500 disabled:to-gray-100 disabled:cursor-not-allowed hover:from-teal-300 hover:to-emerald-800 disabled:text-gray-600 ">
              Buy tickets
            </button>
          </div>
        </div>
      </section>

      {/* The price per tickt box */}
      <section>
        <div></div>
      </section>
    </>
  );
}

export default HomeSection;
