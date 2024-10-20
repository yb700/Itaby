import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="text-center py-8 lg:py-16 px-4 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/pexels-ketut-subiyanto-4307869.jpg" alt="Solomon Mohamoud" className="w-32 h-32 rounded-full" />
          <h3 className="text-2xl font-semibold">Solomon Mohamoud</h3>
          <p className="text-lg text-neutral2">Lead Rat</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/pexels-ketut-subiyanto-4307869.jpg" alt="Sami" className="w-32 h-32 rounded-full" />
          <h3 className="text-2xl font-semibold">Sami</h3>
          <p className="text-lg text-neutral2">Project Rat</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="/assets/pexels-ketut-subiyanto-4307869.jpg" alt="Hanad Abdilaqadir" className="w-32 h-32 rounded-full" />
          <h3 className="text-2xl font-semibold">Hanad Abdilaqadir</h3>
          <p className="text-lg text-neutral2">UX/UI Rat</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
