import React from 'react';
import LoginButton from './components/LoginButton';
import AuthCheck from './components/AuthCheck';
import BlurImage from '@/components/BlurImage';

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AuthCheck />
      <div className="flex flex-col items-center px-4">
        <BlurImage
          src={'/assets/logo.png'}
          width={60}
          height={60}
          alt="Logo"
          className="rounded-full mb-2"
        />
        <h1 className="text-3xl mb-3 md:text-7xl text-white text-center font-extrabold">
          Lottery
        </h1>
        <h2 className="text-white text-center">
          To Get Started, you need to LogIn with you metamask
        </h2>

        <LoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
