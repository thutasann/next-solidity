import React from 'react';
import LoginButton from './components/LoginButton';
import Image from 'next/image';
import AuthCheck from './components/AuthCheck';

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AuthCheck />
      <div className="flex flex-col items-center">
        <Image
          src={'/assets/logo.png'}
          width={60}
          height={60}
          alt="Logo"
          className="rounded-full mb-2"
        />
        <h1 className="mb-3 text-7xl text-white font-extrabold">T- Lottery</h1>
        <h2 className="text-white">
          To Get Started, you need to LogIn with you metamask
        </h2>

        <LoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
