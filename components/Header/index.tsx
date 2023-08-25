import React from 'react';
import BlurImage from '../BlurImage';

function Header() {
  return (
    <header>
      <div>
        <div className="relative w-[150px] h-[150px]">
          <BlurImage src={'/assets/logo.png'} alt="Logo" />
        </div>
      </div>
      <div>
        <h1>Crypto Lottery</h1>
        <p>User...</p>
      </div>
    </header>
  );
}

export default Header;
