import React from 'react';
// import heroImg from "../../../assets/Home/NCA-Image.png";
// import { FaRegArrowAltCircleRight } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
import SliderSection from './Slider';

const HeroSection = () => {
  return (
    <div className="relative hidden md:block">
      <SliderSection/>
      {/* <img src={heroImg} alt="Hero" className="w-full h-auto" />
      
      
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <NavLink to='/registration-form' className="bg-buttonColor flex items-center text-white font-bold rounded-full px-16 py-3 hover:bg-blue-950 transition duration-300">
          <FaRegArrowAltCircleRight className="text-xl mr-2" /> 
          <span >Register Now</span>
        </NavLink>
      </div> */}
    </div>
  );
};

export default HeroSection;
