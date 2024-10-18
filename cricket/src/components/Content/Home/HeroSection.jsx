import React from 'react';
import heroImg from "../../../assets/Home/NCA-Image.png";

const HeroSection = () => {
  return (
    <div className="hidden md:block"> {/* This hides the div on small screens */}
      <img src={heroImg} alt="Hero" className="w-full h-auto" /> {/* Adjust width as needed */}
    </div>
  );
};

export default HeroSection;
