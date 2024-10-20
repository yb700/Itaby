import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 lg:px-8 lg:py-6 bg-opacity-0 absolute w-full">
      <a href="/" className="w-36 lg:w-40">
        <Image src={`/assets/logo.png`} alt='Logo' width={1000} height={1000}/>
      </a>
      <nav className="flex space-x-4 lg:space-x-8 text-lg lg:text-2xl">
        <a href="/" className="font-bold text-gray-900 hover:text-dclblue">Home</a>
        <a href="/about" className="text-gray-800 hover:text-dclblue">About</a>
        <a href="/services" className="text-gray-800 hover:text-dclblue">Services</a>
        <a href="/contact" className="text-gray-800 hover:text-dclblue">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
