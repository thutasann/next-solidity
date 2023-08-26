'use client';

import React from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import Countdown from 'react-countdown';

interface ICountDown {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function CountdownTimer() {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS,
  );

  const { data: expiration, isLoading: isLoadingExpiration } = useContractRead(
    contract,
    'expiration',
  );

  const render = ({ hours, minutes, seconds, completed }: ICountDown) => {
    if (completed) {
      return (
        <div>
          <h2 className="text-white text-lg text-center animate-pulse mb-3">
            Ticket sales have now CLOSED for this Draw!
          </h2>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown">{hours}</div>
              <div className="countdown-label">Hours</div>
            </div>

            <div className="flex-1">
              <div className="countdown">{minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>

            <div className="flex-1">
              <div className="countdown">{seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="text-white text-sm mb-2 italic">Time Remaining :</h3>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown">{hours}</div>
              <div className="countdown-label">Hours</div>
            </div>

            <div className="flex-1">
              <div className="countdown">{minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>

            <div className="flex-1">
              <div className="countdown">{seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={new Date(expiration * 1000)} renderer={render} />;
}

export default CountdownTimer;
