'use client';

import React from 'react';
import { Loader } from '.';

function FullPageLoader() {
  return (
    <div className="flex fixed top-0 left-0 z-50 h-[100vh] backdrop-blur-md w-full items-center justify-center">
      <Loader />
    </div>
  );
}

export default FullPageLoader;
