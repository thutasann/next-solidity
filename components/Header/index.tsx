import React from 'react';
import BlurImage from '../BlurImage';
import Address from './Address';
import NavActions from './NavActions';
import Image from 'next/image';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md grid grid-cols-2 md:grid-cols-5 items-center px-3 py-3">
      <div className="flex items-center space-x-2">
        <Image
          src={'/assets/logo.png'}
          width={60}
          height={60}
          alt="Logo"
          className="cursor-pointer"
        />
        <div>
          <h1 className="text-lg font-bold text-white">TLottery</h1>
          <Address />
        </div>
      </div>

      <NavActions />
    </header>
  );
}

export default Header;
