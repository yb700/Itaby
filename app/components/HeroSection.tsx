import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row justify-center items-center px-4 lg:px-24 text-center">
      <div className="w-full flex flex-col justify-center items-center text-center space-y-4 lg:space-y-6">
        <h1 className="text-4xl lg:text-8xl font-bold text-primary1">Innovative Solutions for Your Needs</h1>
        <h2 className="text-2xl lg:text-6xl font-semibold">Empowering Your Business</h2>
        <p className="text-lg lg:text-xl text-secondary2 px-4 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae officia exercitationem assumenda quidem, voluptate dolores minima sint provident aliquam sunt.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
