import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing phone and email icons
import logo from '../../assets/logo/NCA-Logo.png'; // Adjust the path as needed
import { FaCircleArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 text-black py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-center items-center md:items-start">
          {/* Left Section: Logo */}
          <div className="flex items-center mb-4 md:mb-0 md:mr-16">
            <img src={logo} alt="Logo" className="h-24 w-auto" />
          </div>

          {/* Center Section: Links and Contact Information */}
          <div className="flex flex-col md:mr-14  md:items-start">
            <h4 className="font-bold text-2xl mb-2">Get Links</h4>
            {['Home', 'About Us', 'Our Center', 'Registration', 'Contact Us'].map((link) => (
              <div key={link} className="flex items-center mb-1">
                <FaCircleArrowRight className="mr-2" /> {/* Arrow icon */}
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-black text-orange-500"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col  md:items-start">
            <h4 className="font-bold text-2xl mb-2">Contact Us</h4>
            <div className="flex items-center mb-1">
              <FaPhone className="mr-2" />
              <p>Phone: 7596840958</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-sm" />
              <p>Email: support@nationalcricketsacademy.com</p>
            </div>
          </div>

          {/* Right Section: Small Map */}
          <div className="text-center mt-4 md:mt-0 md:ml-8">
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509352!2d144.9537353156813!3d-37.817209979751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0e6f1d4b%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Victoria!5e0!3m2!1sen!2sau!4v1637764301840!5m2!1sen!2sau"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-gray-200 text-center py-4 border-t border-gray-400">
        <p className="text-sm">
          © {new Date().getFullYear()} National Cricket Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
