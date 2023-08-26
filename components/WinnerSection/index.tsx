'use client';

import { currency } from '@/libs/constants';
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import React from 'react';
import toast from 'react-hot-toast';
import Marquee from 'react-fast-marquee';

function WinnerSection() {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
  );

  const { data: lastWinner } = useContractRead(contract, 'lastWinner');
  const { data: lastWinnerAmount } = useContractRead(
    contract,
    'lastWinnerAmount',
  );

  const { data: winnings } = useContractRead(
    contract,
    'getWinningsForAddress',
    [address],
  );
  console.log('winnings', winnings);

  const { mutateAsync: WithDrawWinnings } = useContractWrite(
    contract,
    'WithdrawWinnings',
  );

  const handleWithdrawWinnings = async () => {
    //   @ts-ignore
    const data = await WithDrawWinnings([{}]);

    const notification = toast.loading('Withdrawing winnings...');

    try {
      toast.success('Winnings withdrawn successfully!', {
        id: notification,
      });
    } catch (error) {
      toast.error('Whoops something went wrong!', {
        id: notification,
      });
      console.error('withdraw error', error);
    }
  };

  return (
    <div>
      <Marquee className="bg-[#0A1F1C] p-5 mb-5" gradient={false} speed={100}>
        <div className="flex space-x-2 mx-10 text-white font-bold">
          <h3>Last winner : {lastWinner?.toString() || '---'} </h3>
          <h4>
            Previous winning:{' '}
            {lastWinnerAmount &&
              ethers.utils.formatEther(lastWinnerAmount?.toString())}{' '}
            {currency}
          </h4>
        </div>
      </Marquee>

      {winnings && (
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
          <button
            aria-label="winner button"
            className="buy-ticket-btn cursor-pointer !w-full"
            onClick={handleWithdrawWinnings}
          >
            <span>Winner Winner Chicken Dinnger!</span>
            <p>
              Total winnings: {ethers.utils.formatEther(winnings.toString())}{' '}
              {currency}
            </p>
            <br />
            <span className="font-semibold">Click Here to with Draw</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default WinnerSection;
