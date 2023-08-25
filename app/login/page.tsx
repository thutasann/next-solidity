import BlurImage from '@/components/BlurImage';
import React from 'react';
import LoginButton from './components/LoginButton';

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <BlurImage
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
