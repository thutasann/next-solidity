'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface INavbutton
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  title: string;
  isActive?: boolean;
}

function NavButton({ title, isActive, ...props }: INavbutton) {
  return (
    <button
      className={twMerge(
        ' hover:bg-[#036756] cursor-pointer text-sm text-white py-2 px-3 rounded-md transition-all duration-300 ease-in-out',
        isActive ? 'bg-[#036756]' : '',
      )}
      {...props}
    >
      {title}
    </button>
  );
}

export default NavButton;
