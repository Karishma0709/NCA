import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const RegisteredNow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6  space-y-4 md:mx-16 md:space-y-0 md:my-16">
      
      {/* Text section */}
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-600">
          To register for our programs, please complete the following form. Ensure all information is accurate to facilitate a smooth registration process.
        </h1>
      </div>

      {/* Button section */}
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <NavLink to='/registration-form' className="bg-blue-900 flex items-center text-white font-bold rounded-full px-16 py-3 hover:bg-blue-950 transition duration-300">
          <FaRegArrowAltCircleRight className="text-xl mr-2" /> 
          <span>Register Now</span>
        </NavLink>
      </div>
      
    </div>
  );
};

export default RegisteredNow;
