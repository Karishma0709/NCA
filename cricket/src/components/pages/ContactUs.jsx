import React from 'react';
import banner from "../../assets/Contact/images-2.jpeg";
import { FaRegAddressCard } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";

const ContactUs = () => {
  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Section */}
      <div className="w-full h-[500px]">
        <img src={banner} alt="Contact Banner" className="w-full h-full object-cover" />
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Email */}
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center text-5xl font-bold mb-4">
              <FaRegAddressCard />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get Quick
            Registeration</h3>
            <p className="text-white "><span className='bg-slate-700 p-4 mt-4 rounded-full'> Registeration</span></p>
          
          </div>

          {/* Card 2 - Phone */}
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center text-5xl font-bold mb-4">
              <BsSendFill />
            </div>
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p className="text-gray-600">M Chinnaswamy Stadium Premises, MG</p>
            <p className="mt-2 text-gray-500 font-semibold">Road, Bangalore – 560001</p>
          </div>

          {/* Card 3 - Location */}
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center text-5xl font-bold mb-4">
              <LuMessagesSquare />
            </div>
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-gray-600">support@nationalcricketsacademy.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-12">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509243!2d144.95373531550412!3d-37.816279442021886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1e0a191%3A0x2b0a071c02b34db1!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1634158265032!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
