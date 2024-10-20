import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="w-full py-8 lg:py-16 px-4 lg:px-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-10">We Care For Our Community</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center lg:text-left">People Who Benefit From Our Work</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full lg:w-1/2">
          <div className="text-xl font-semibold text-center lg:text-left">20+ Schools Use Our Infrastructure</div>
          <div className="text-xl font-semibold text-center lg:text-left">100+ Mosques In The Cloud</div>
          <div className="text-xl font-semibold text-center lg:text-left">All Types Of Apps</div>
          <div className="text-xl font-semibold text-center lg:text-left">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  );
};

export default Community;
