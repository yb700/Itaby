import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row bg-primary1 text-white py-8 px-4 lg:px-16 space-y-8 lg:space-y-0">
      <div className="flex flex-col lg:basis-1/3 space-y-6">
        <img src="/assets/output-onlinepngtools (1).png" alt="Footer Logo" className="w-56 mb-4" />
        <div className="flex space-x-16">
          <nav className="flex flex-col space-y-2 text-white">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
          <nav className="flex flex-col space-y-2 text-white">
            <a href="#" className="hover:text-gray-400">Terms Of Service</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </nav>
        </div>
      </div>
      <div className="lg:basis-1/3 flex flex-col justify-end items-center text-center">
        <p className="text-xs">@DCL-PRO Services. All Rights Reserved</p>
      </div>
      <div className="flex flex-col lg:basis-1/3 justify-end items-end text-right space-y-4">
        <h3 className="font-bold text-2xl">Have Any Questions?</h3>
        <p>
          Our support team is here to help. If you have any questions about this service, please{' '}
          <a href="#" className="text-blue-400 underline hover:text-blue-300">contact us</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
