import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-center py-8 lg:py-16 px-4 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-10">About Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="bg-primary1 p-6 lg:p-8 text-left rounded">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
          <p className="text-lg text-secondary2">At ITABY, our mission is to deliver innovative technology solutions that drive growth and efficiency for our clients. We are dedicated to excellence and committed to providing outstanding service.</p>
        </div>
        <div className="bg-primary1 p-6 lg:p-8 text-left rounded">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-lg text-secondary2">We envision a future where technology seamlessly integrates with every aspect of business, empowering organizations to achieve their fullest potential. Our goal is to be at the forefront of this transformation.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
