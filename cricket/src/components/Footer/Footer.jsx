import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing phone and email icons
import logo from '../../assets/logo/NCA-Logo.png'; // Adjust the path as needed
import { FaCircleArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 py-10 mx-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          
          {/* Left Section: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="h-24 w-auto mb-4" />
            <p className="text-gray-500 text-sm text-center md:text-left">
              National Cricket Academy<br />
              Empowering the future of cricket.
            </p>
          </div>

          {/* Center Section: Links and Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-3xl mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About Us', 'Our Center', 'Registration', 'Contact Us'].map((link) => (
                <div key={link} className="flex items-center">
                  <FaCircleArrowRight className="mr-2 text-orange-500" /> {/* Arrow icon */}
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-orange-600 text-orange-500 text-lg transition-colors duration-300"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-3xl mb-4">Contact Us</h4>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-3 text-orange-500" />
              <p className="text-lg">9733629753</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-orange-500 text-sm" />
              <p className="text-lg">support@nationalcricketsacademy.com</p>
            </div>
          </div>

          {/* Right Section: Google Map */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h4 className="font-bold text-3xl mb-4">Find Us</h4>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9656957871266!2d80.25985367438675!3d23.60556319432312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981718c8c84bfdb%3A0x8187dae5e4f7a828!2sM.chinnaswamy%20stadium%20lite!5e0!3m2!1sen!2sin!4v1729681415526!5m2!1sen!2sin"
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
                className="w-full h-48 md:h-64"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-gray-200 text-center py-4 border-t border-gray-300">
        <p className="text-md text-gray-600">
          © {new Date().getFullYear()} National Cricket Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
