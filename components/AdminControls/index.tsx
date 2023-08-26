'use client';

import React from 'react';
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from '@heroicons/react/24/solid';
import {
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { currency } from '@/libs/constants';
import toast from 'react-hot-toast';

function AdminControls() {
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
  );

  const { mutateAsync: RefundAll } = useContractWrite(
    contract,
    'DrawWinnerTicket',
  );

  const { mutateAsync: refundAll } = useContractWrite(contract, 'RefundAll');

  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    'restartDraw',
  );

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    'DrawWinnerTicket',
  );

  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    'WithdrawCommission',
  );

  const { data: totalCommission } = useContractRead(
    contract,
    'operatorTotalCommission',
  );

  const drawWinner = async () => {
    const notification = toast.loading('Picking a Lucky WInner...');
    try {
      // @ts-ignore
      const data = await DrawWinnerTicket([{}]);
      toast.error('A winner has been selected!', {
        id: notification,
      });
    } catch (error) {
      toast.error('Whoops something went wrong!', {
        id: notification,
      });
      console.error('Contract call failure', error);
    }
  };

  const onWithdrawCommission = async () => {
    const notification = toast.loading('Withdrawing commission...');
    try {
      // @ts-ignore
      const data = await WithdrawCommission([{}]);
      toast.error('Your commission has been withdrawn succesfully!', {
        id: notification,
      });
    } catch (error) {
      toast.error('Whoops something went wrong!', {
        id: notification,
      });
      console.error('Contract call failure', error);
    }
  };

  const onRestartDraw = async () => {
    const notification = toast.loading('Retarting draw...');
    try {
      // @ts-ignore
      const data = await restartDraw([{}]);
      toast.error('Draw restarted succesfully!', {
        id: notification,
      });
    } catch (error) {
      toast.error('Whoops something went wrong!', {
        id: notification,
      });
      console.error('Contract call failure', error);
    }
  };

  const onRefundAll = async () => {
    const notification = toast.loading('Refunding all...');
    try {
      // @ts-ignore
      const data = await refundAll([{}]);
      toast.error('All refunded succesfully!', {
        id: notification,
      });
    } catch (error) {
      toast.error('Whoops something went wrong!', {
        id: notification,
      });
      console.error('Contract call failure', error);
    }
  };

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border border-emerald-300/20">
      <h2 className="text-xl font-semibold mb-2">Admin controls</h2>
      <p className="mb-5">
        Total commission to be withdrawn: &nbsp;
        {totalCommission &&
          ethers.utils.formatEther(totalCommission?.toString())}
        {currency}
      </p>
      <div className="flex flex-col space-y-2 md:flex-row  md:space-y-0 md:space-x-2">
        <button
          className="admin-btn"
          aria-label="admin button"
          role="button"
          onClick={drawWinner}
        >
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw winner
        </button>
        <button
          className="admin-btn"
          aria-label="admin button"
          role="button"
          onClick={onWithdrawCommission}
        >
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button
          className="admin-btn"
          aria-label="admin button"
          role="button"
          onClick={onRestartDraw}
        >
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Restart draw
        </button>
        <button
          className="admin-btn"
          aria-label="admin button"
          role="button"
          onClick={onRefundAll}
        >
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2" />
          Refund all
        </button>
      </div>
    </div>
  );
}

export default AdminControls;
