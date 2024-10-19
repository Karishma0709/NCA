import React from 'react';
import { FaPhone } from 'react-icons/fa'; 

const CallButton = () => {
  const handleClick = () => {
    // Make sure to include the '+' for international dialing
    window.location.href = 'tel:+917596840958'; 
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
    >
      <FaPhone size={24} />
    </button>
  );
};

export default CallButton;
