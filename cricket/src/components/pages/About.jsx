import React from 'react';
import banner from '../../assets/About/Banner.jpeg';
import AboutNCA from '../Content/About/AboutNCA';
import HistoryNCA from '../Content/About/HistoryNCA';
import RoleOfINCA from '../Content/About/RoleOfINCA ';

const About = () => {
  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Image */}
      <div className="relative w-full h-[500px]">
        <img src={banner} alt="Gallery Banner" className="w-full h-full object-cover" />
        
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center md:bottom-[200px]">
          <h2 className="text-5xl font-bold text-yellow-500">About Us</h2>
        </div>
      </div>

      <AboutNCA />
      <HistoryNCA/>
      <RoleOfINCA/>
    </div>
  );
};

export default About;
