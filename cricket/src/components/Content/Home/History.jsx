import React from 'react';
import img1 from '../../../assets/Home/sca15.jpg';

const History = () => {
  return (
    <div className="bg-primary h-[500px] w-full flex items-center justify-center relative">
      <div className="h-[400px] w-full ps-20">
        <img
          src={img1}
          alt="History Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute w-[700px] bg-white h-[350px] top-20 left-6 shadow-2xl p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">History of NCA</h1>
        <ul className="list-disc pl-6 space-y-2 text-blue-900 text-lg">
          <li>
            The National Cricket Academy (NCA), established by the Board of
            Control for Cricket in India (BCCI) in 2000, is the premier
            institution for developing cricketing talent in India. Located
            initially at the M. Chinnaswamy Stadium in Bangalore, the NCA was
            created to provide young cricketers with world-class training
            facilities and a structured, professional environment.
          </li>
          <li>
            Over the years, the academy has expanded its infrastructure to
            include state-of-the-art training grounds, indoor practice areas,
            fitness centers, medical and rehabilitation facilities, and
            comfortable accommodations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default History;
