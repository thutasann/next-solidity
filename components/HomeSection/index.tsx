'use client';

import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React, { Fragment, useRef, useState } from 'react';
import FullPageLoader from '../Loader/FullPageLoader';
import { ethers } from 'ethers';
import { currency } from '@/libs/constants';
import CountdownTimer from '../CountdownTimer';

function HomeSection() {
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);
  const ref = useRef<any>();

  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
  );

  const { data: remainingTickets } = useContractRead(
    contract,
    'RemainingTickets',
  );

  const { data: currentWinningReward } = useContractRead(
    contract,
    'CurrentWinningReward',
  );

  const { data: ticketPrice } = useContractRead(contract, 'ticketPrice');

  const { data: ticketCommission } = useContractRead(
    contract,
    'ticketCommission',
  );

  const { data: expiration } = useContractRead(contract, 'expiration');

  if (isLoading) return <FullPageLoader />;

  if (!address) {
    redirect('/login');
  }

  return (
    <Fragment>
      {/* The Next Draw boxs */}
      <section className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 max-w-6xl mx-auto px-4">
        <div className="stats-container">
          <h1 className="text-4xl mb-3 text-white font-bold text-center">
            The Next draw
          </h1>
          <div className="flex justify-between py-2 space-x-2">
            <div className="stats">
              <h2 className="text-sm">Total pool</h2>
              <p className="text-xl font-semibold">
                {currentWinningReward
                  ? ethers.utils.formatEther(currentWinningReward.toString())
                  : '---'}
                &nbsp; {currency}
              </p>
            </div>
            <div className="stats">
              <h2 className="text-sm">Tickets Remaining</h2>
              <p className="text-xl font-semibold">
                {remainingTickets ? remainingTickets?.toNumber() : '---'}
              </p>
            </div>
          </div>
          <div className="mt-5 mb-3">
            <CountdownTimer />
          </div>
        </div>

        <div className="stats-container space-y-2">
          <div className="stats-container">
            <div className="flex justify-between items-center text-white pb-2">
              <h2 className="font-semibold">Price per ticket</h2>
              <p className="">
                {ticketPrice
                  ? ethers.utils.formatEther(ticketPrice?.toString())
                  : '---'}
                &nbsp; {currency}
              </p>
            </div>
            <div className="flex text-white items-center space-x-2 bg-[#141a1a] border-[#004335] border p-4">
              <p onClick={() => ref.current?.focus()}>TICKETS</p>
              <input
                ref={ref.current}
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
                <p>
                  {ticketPrice ? (
                    <>
                      {Number(
                        ethers.utils.formatEther(ticketPrice?.toString()),
                      ) * quantity}
                      &nbsp; {currency}
                    </>
                  ) : (
                    '---'
                  )}
                </p>
              </div>
              <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                <p>Service fees</p>
                <p>
                  {ticketCommission
                    ? ethers.utils.formatEther(ticketCommission?.toString())
                    : '---'}
                  &nbsp; {currency}
                </p>
              </div>

              <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                <p>+ Network Fees</p>
                <p>TBC</p>
              </div>
            </div>

            <button
              disabled={
                expiration?.toString() < Date.now().toString() ||
                remainingTickets?.toNumber() === 0
              }
              className="buy-ticket-btn"
            >
              Buy tickets
            </button>
          </div>
        </div>
      </section>

      {/* The price per tickt box */}
      <section>
        <div></div>
      </section>
    </Fragment>
  );
}

export default HomeSection;
