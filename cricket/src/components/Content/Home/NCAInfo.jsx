import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { gsap } from 'gsap';

const NCAInfo = () => {
  const ncaRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ncaRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
        gsap.fromTo(
          ncaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const ncaDetails = [
    { label: "Abbreviation", value: "NCA" },
    { label: "Founded", value: "2000; 24 years ago" },
    { label: "Founder", value: "Raj Singh Dungarpur" },
    { label: "Academy", value: "Cricket Academy" },
    { label: "Legal status", value: "Active" },
    { label: "Focus", value: "Developing young cricketers" },
    { label: "Location", value: "Bangalore, India" },
    { label: "Area served", value: "India" },
    { label: "Services", value: "Training, Guidance and Rehabilitation" },
    { label: "Owner", value: "BCCI" },
    { label: "Director", value: "VVS Laxman" },
    { label: "Parent organization", value: "BCCI" },
    { label: "Website", value: <a href="https://nationalcricketsacademy.com/" target="_blank" rel="noopener noreferrer">nationalcricketsacademy.com</a> },
    { label: "Registration Fee", value: "₹3150/-" },
  ];

  return (
    <div ref={ncaRef} className="bg-primary mx-auto my-auto md:mx-16 p-6">
      <div className="flex font-extrabold justify-center items-center text-5xl">
        <BsThreeDots className="text-blue-600" />{' '}
        <BsThreeDots className="text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">National Cricket Academy</h1>
      <table className="min-w-full border border-gray-200 rounded-lg shadow-md mt-10">
        <tbody>
          {ncaDetails.map((detail, index) => (
            <tr key={index} className="border lg:text-lg text-sm">
              <td className="py-3 px-4 border border-gray-400 font-semibold bg-gray-100">{detail.label}</td>
              <td className="py-3 border border-gray-400 px-4">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NCAInfo;
