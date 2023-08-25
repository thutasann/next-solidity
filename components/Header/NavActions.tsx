'use client';

import React from 'react';
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useDisconnect } from '@thirdweb-dev/react';

function NavActions() {
  const disconnect = useDisconnect();

  return (
    <>
      <div className="hidden md:flex md:col-span-3 items-center justify-center">
        <div className="bg-black/20 p-4 rounded-md space-x-2">
          <NavButton isActive title="Buy Ticket" aria-label="Buy Ticket" />
          <NavButton onClick={disconnect} title="Logout" aria-label="Logout" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right pr-2">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer hover:text-white/50" />
        <div className="md:hidden mt-2">
          <NavButton
            onClick={disconnect}
            isActive
            title="Logout"
            aria-label="Logout"
          />
        </div>
      </div>
    </>
  );
}

export default NavActions;
