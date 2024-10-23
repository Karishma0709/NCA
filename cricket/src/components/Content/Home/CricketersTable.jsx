import React, { useEffect, useRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CricketersTable = () => {
  // List of cricketers (3 per row)
  const cricketers = [
    ["Yuvraj Singh", "Gautam Gambhir", "Zaheer Khan"],
    ["Sridharan Sriram", "Laxmi Ratan Shukla", "Shiv Sunder Das"],
    ["Reetinder Singh Sodhi", "Robin Uthappa", "Tinu Yohanan"],
    ["Mohammad Kaif", "L Balaji", "Sarandeep Singh"],
    ["Harbhajan Singh", "Parthiv Patel", "Murali Karthik"],
    ["Virat Kohli", "Deep Dasgupta", "Rohit Sharma"],
    ["Ajay Ratra", "Rohit Sharma", "Piyush Chawla"],
    ["Manoj Tiwary", "Vinayak Mane", "Mohammad Shami"],
    ["Shikhar Dhawan", "Suresh Raina", "RP Singh"],
    ["Cheteshwar Pujara", "Mayank Agarwal", "K. L. Rahul"]
  ];

  const tableRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 80%', // start animation when the top of the table reaches 80% of the viewport height
            toggleActions: 'play none none reverse', // play on enter, reverse on leave
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-primary mx-auto p-6 md:mx-16">
      <div className="flex font-extrabold justify-center items-center text-5xl">
        <BsThreeDots className="text-blue-600" />{' '}
        <BsThreeDots className="text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">Cricketers List</h1>
      <table ref={tableRef} className="min-w-full border border-gray-200 rounded-lg shadow-md mt-10">
        <thead>
          {/* <tr className="bg-gray-100 border-b">
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Cricketer 1</th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Cricketer 2</th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Cricketer 3</th>
          </tr> */}
        </thead>
        <tbody>
          {cricketers.map((row, index) => (
            <tr key={index} className="border border-gray-400 lg:text-lg text-sm">
              <td className="py-3 px-4 border border-gray-400">{row[0]}</td>
              <td className="py-3 px-4 border border-gray-400">{row[1]}</td>
              <td className="py-3 px-4 border border-gray-400">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CricketersTable;
