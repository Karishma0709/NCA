import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo/NCA-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the navigation items with title and link
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Our Center', link: '/our-center' },
    { title: 'Registration Form', link: '/registration-form' },
    { title: 'Contact Us', link: '/contact-us' },
  ];

  return (
    <nav className="">
      <div className="mx-auto flex justify-evenly items-center shadow-lg px-10 py-5">
        {/* Logo */}
        <div className="w-[300px]"> 
          <a href="/" className="hover:text-black text-orange-500">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </a>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 flex-grow justify-end"> 
          {navItems.map(({ title, link }) => (
            <NavLink
              key={title}
              to={link}
              className="hover:text-black text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-yellow-500"
            >
              {title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col mt-4">
            {navItems.map(({ title, link }) => (
              <NavLink
                key={title}
                to={link}
                className="text-orange-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
