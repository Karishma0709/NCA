import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/9733629753', '_blank'); // Replace with your phone number
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 left-4 bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
