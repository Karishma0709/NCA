import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing phone and email icons
import logo from '../../assets/logo/NCA-Logo.png'; // Adjust the path as needed
import { FaCircleArrowRight } from "react-icons/fa6";

const Footer = () => {
  // Define the footer links
  const footerLinks = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Our Center', link: '/our-center' },
    { title: 'Registration Form', link: '/registration-form' },
    { title: 'Contact Us', link: '/contact-us' },
  ];

  return (
    <div>
      <footer className="bg-gray-100 text-black py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-center items-center md:items-start">
          {/* Left Section: Logo */}
          <div className="flex items-center mb-4 md:mb-0 md:mr-16">
            <img src={logo} alt="Logo" className="h-24 w-auto" />
          </div>

          {/* Center Section: Links and Contact Information */}
          <div className="flex flex-col md:mr-14 md:items-start">
            <h4 className="font-bold text-2xl mb-2">Get Links</h4>
            {footerLinks.map(({ title, link }) => (
              <div key={title} className="flex items-center mb-1">
                <FaCircleArrowRight className="mr-2" /> {/* Arrow icon */}
                <a
                  href={link}
                  className="hover:text-black text-orange-500"
                >
                  {title}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:items-start">
            <h4 className="font-bold text-2xl mb-2">Contact Us</h4>
            <div className="flex items-center mb-1">
              <FaPhone className="mr-2" />
              <p>Phone: 9733629753</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-sm" />
              <p>Email: support@nationalcricketsacademy.com</p>
            </div>
          </div>

          {/* Right Section: Google Map */}
          <div className="text-center mt-4 md:mt-0 md:ml-8">
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9656957871266!2d80.25985367438675!3d23.60556319432312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981718c8c84bfdb%3A0x8187dae5e4f7a828!2sM.chinnaswamy%20stadium%20lite!5e0!3m2!1sen!2sin!4v1729681415526!5m2!1sen!2sin"
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
