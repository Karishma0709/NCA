import React from 'react';
import banner1 from '../../assets/Center/CenterBanner.png';
import AboutNCA from '../Content/About/AboutNCA';
import HistoryNCA from '../Content/About/HistoryNCA';
import RoleOfINCA from '../Content/About/RoleOfINCA ';

const About = () => {
  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Image */}
      <div className="relative w-full h-[300px]">
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-10"></div>
  <img src={banner1} alt="Gallery Banner" className="w-full h-full object-cover" />

  {/* Centered Text with Transparent Background */}
  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <h2 className="text-3xl font-bold text-gray-100 shadow-2xl bg-green-800 bg-opacity-70 p-2 rounded-md md:text-5xl text-shadow-lg tracking-wide">
      About
    </h2>
  </div>
</div>

      <AboutNCA />
      <HistoryNCA/>
      <RoleOfINCA/>
    </div>
  );
};

export default About;
