import React, { useEffect } from 'react';
import banner1 from '../../assets/Center/CenterBanner.png';
import { FaRegAddressCard } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const ContactUs = () => {
  
  useEffect(() => {
    // GSAP Animation for Banner
    gsap.fromTo(".banner-text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" });
    
    // GSAP Animation for Cards
    gsap.fromTo(".card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 });

    // GSAP Animation for Map
    gsap.fromTo(".map-section", { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 1, ease: "power3.out" });
  }, []);

  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-10"></div>
        <img src={banner1} alt="Gallery Banner" className="w-full h-full object-cover" />
      
        {/* Centered Text with Transparent Background */}
        <div className="absolute inset-0 z-20 flex items-center justify-center banner-text">
          <h2 className="text-3xl font-bold text-gray-100 shadow-2xl bg-green-800 bg-opacity-70 p-2 rounded-md md:text-5xl text-shadow-lg tracking-wide">
            Our Center
          </h2>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Contact Us</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 - Email */}
          <div className="card bg-white text-center p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center items-center text-5xl font-bold mb-4 text-green-700">
              <FaRegAddressCard />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get Quick Registration</h3>
            <div className="w-full flex justify-center">
              <NavLink to='/registration-form' className="bg-green-800 flex items-center text-white font-bold rounded-full px-10 py-3 hover:bg-blue-950 transition duration-300">
                <FaRegArrowAltCircleRight className="text-xl mr-2" /> 
                <span>Register Now</span>
              </NavLink>
            </div>
          </div>

          {/* Card 2 - Address */}
          <div className="card bg-white text-center p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center items-center text-5xl font-bold mb-4 text-green-700">
              <BsSendFill />
            </div>
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p className="text-gray-600">M Chinnaswamy Stadium Premises, MG</p>
            <p className="mt-2 text-gray-500 font-semibold">Road, Bangalore – 560001</p>
          </div>

          {/* Card 3 - Email */}
          <div className="card bg-white text-center p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex justify-center items-center text-5xl font-bold mb-4 text-green-700">
              <LuMessagesSquare />
            </div>
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-gray-600">support@nationalcricketsacademy.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] my-12 map-section">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9656957871266!2d80.25985367438675!3d23.60556319432312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981718c8c84bfdb%3A0x8187dae5e4f7a828!2sM.chinnaswamy%20stadium%20lite!5e0!3m2!1sen!2sin!4v1729681415526!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
