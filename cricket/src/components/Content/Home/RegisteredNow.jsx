import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const RegisteredNow = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
        <h1 className="w-4/5 text-2xl font-semibold text-gray-600">
        To register for our programs, please complete the following form. Ensure all information is accurate to facilitate a smooth registration process.
      </h1> 
        </div>
     <div className='w-2/5'>
     <button className=" bg-blue-900 flex text-white font-bold rounded-full px-14 py-3  hover:bg-blue-950 transition duration-300">
     <FaRegArrowAltCircleRight className="text-xl mr-2 mt-1" />  <span className=''> Register Now</span> 
      </button>
     </div>
      
    </div>
  );
};

export default RegisteredNow;
