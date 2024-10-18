import React from 'react';
import img1 from "../../../assets/About/home-player.webp"; // Adjust the path as needed

const HistoryNCA = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Left Section: Image */}
      <div className="md:w-1/2 p-4">
        <img src={img1} alt="NCA History" className="w-full h-auto " />
      </div>

      {/* Right Section: Text */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">History of NCA</h2>
        <p className="text-lg">
          The National Cricket Academy (NCA), established by the Board of Control for Cricket in India (BCCI) in 2000, is the premier institution for developing cricketing talent in India. Located initially at the M. Chinnaswamy Stadium in Bangalore, the NCA was created to provide young cricketers with world-class training facilities and a structured, professional environment.
        </p>
        <p className="text-lg mt-2">
          Over the years, the academy has expanded its infrastructure to include state-of-the-art training grounds, indoor practice areas, fitness centers, medical and rehabilitation facilities, and comfortable accommodations. Despite challenges such as injury management and evolving game formats, the NCA continuously adapts its training methods and embraces new technologies to maintain its high standards.
        </p>
        <p className="text-lg mt-2">
          Embracing modern coaching techniques and collaborating with international experts, the NCA focuses on holistic player development, including physical fitness, mental toughness, technical skills, and leadership qualities.
        </p>
      </div>
    </div>
  );
};

export default HistoryNCA;
