import React from 'react';

const Clients: React.FC = () => {
  return (
    <div className="text-center py-8 lg:py-16 px-4 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-10">Our Valued Clients</h2>
      <div className="flex justify-center items-center gap-6 lg:gap-8">
        <img src="/assets/logoipsum/logoipsum-297.svg" alt="Client Logo 1" className="w-40 h-auto lg:w-52" />
        <img src="/assets/logoipsum/logoipsum-311.svg" alt="Client Logo 2" className="w-40 h-auto lg:w-52" />
        <img src="/assets/logoipsum/logoipsum-325.svg" alt="Client Logo 3" className="w-40 h-auto lg:w-52" />
        <img src="/assets/logoipsum/logoipsum-237.svg" alt="Client Logo 4" className="w-40 h-auto lg:w-52" />
        <img src="/assets/logoipsum/logoipsum-286.svg" alt="Client Logo 5" className="w-40 h-auto lg:w-52" />
        <img src="/assets/logoipsum/logoipsum-253.svg" alt="Client Logo 6" className="w-40 h-auto lg:w-52" />
      </div>
    </div>
  );
};

export default Clients;
