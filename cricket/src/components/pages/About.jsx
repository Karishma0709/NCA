import React from 'react';
import banner from '../../assets/About/Banner.jpeg';
import AboutNCA from '../Content/About/AboutNCA';
import HistoryNCA from '../Content/About/HistoryNCA';
import RoleOfINCA from '../Content/About/RoleOfINCA ';

const About = () => {
  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Image */}
      <div className="w-full h-[500px]">
        <img
          src={banner}
          alt="Center"
          className="w-full h-full object-center"
        />
      </div>

      <AboutNCA />
      <HistoryNCA/>
      <RoleOfINCA/>
    </div>
  );
};

export default About;
