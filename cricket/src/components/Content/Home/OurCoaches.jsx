import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
const OurCoaches = () => {
  // List of coaches
  const coaches = [
    { name1: "Rahul Dravid", name2: "VVS Laxman" },
    { name1: "Roger Binny", name2: "Rajesh Kamath" },
    { name1: "Venkatesh Prasad", name2: "Chandrakant Pandit" },
    { name1: "S. Basu", name2: "Sanath Kumar" },
    { name1: "Raghuram Bhat", name2: "Dinesh Nanavaty" },
    { name1: "Satish Chimote", name2: "Anand Date" },
    { name1: "Nagendra Prasad", name2: "Dr. Kinjal Suratwala" },
    { name1: "Sudarsan VP", name2: "PR Sreenivasa Rao" },
    { name1: "Ashish Kaushik", name2: "Nitin Patel" },
    { name1: "Bharat Arun", name2: "R Sridhar" },
    { name1: "V. Venkataram", name2: "Dinesh Nanavaty" },
    { name1: "Balwinder Sandhu", name2: "K Jayantilal" },
  ];

  return (
    <div className="bg-primary mx-auto md:mx-14 p-6">
       <div className="flex font-extrabold justify-center items-center text-5xl">
          <BsThreeDots className="text-blue-600 " />{' '}
          <BsThreeDots className="text-blue-600" />
        </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Our Coaches</h1>
      <table className="min-w-full border border-gray-200 rounded-lg shadow-md mt-10">
        <thead>
          {/* <tr className="bg-gray-100 border-b border-gray-300">
            <th className="py-3 px-4 text-left text-gray-600 font-semibold border-b border-gray-300">Coach 1</th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold border-b border-gray-300">Coach 2</th>
          </tr> */}
        </thead>
        <tbody>
          {coaches.map((coach, index) => (
            <tr key={index} className="border-b border-gray-400">
              <td className="py-3 px-4 border border-gray-400">{coach.name1}</td>
              <td className="py-3 px-4 border border-gray-400">{coach.name2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OurCoaches;
