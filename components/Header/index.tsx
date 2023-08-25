import React from 'react';
import BlurImage from '../BlurImage';
import NavButton from './NavButton';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md grid grid-cols-2 md:grid-cols-5 items-center px-3 py-3">
      <div className="flex items-center space-x-2">
        <BlurImage
          src={'/assets/logo.png'}
          width={60}
          height={60}
          alt="Logo"
          className="cursor-pointer"
        />
        <div>
          <h1 className="text-lg font-bold text-white">TLottery</h1>
          <p className="text-xs text-emerald-500 font-semibold">User...</p>
        </div>
      </div>

      <div className="hidden md:flex md:col-span-3 items-center justify-center">
        <div className="bg-black/20 p-4 rounded-md space-x-2">
          <NavButton isActive title="Buy Ticket" aria-label="Buy Ticet" />
          <NavButton title="Logout" aria-label="Logout" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right pr-2">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer hover:text-white/50" />
        <div className="md:hidden mt-2">
          <NavButton isActive title="Logout" aria-label="Logout" />
        </div>
      </div>
    </header>
  );
}

export default Header;
