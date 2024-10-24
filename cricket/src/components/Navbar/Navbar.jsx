import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import logo from "../../assets/logo/NCA-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null); // Ref for the logo

  // Define the navigation items with title and link
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Our Center', link: '/our-center' },
    { title: 'Registration Form', link: '/registration-form' },
    { title: 'Contact Us', link: '/contact-us' },
  ];

  // Function to animate navbar items on scroll
  const animateNavItems = () => {
    const items = navRef.current.children;
    gsap.fromTo(items,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1, // Stagger the animation
        ease: 'power1.out',
      }
    );
  };

  // Function to animate logo on scroll
  const animateLogo = () => {
    gsap.fromTo(logoRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power1.out',
      }
    );
  };

  useEffect(() => {
    // Call the animation functions on component mount
    animateNavItems();
    animateLogo();
    
    // Optionally, you can also call them on scroll
    window.addEventListener('scroll', () => {
      animateNavItems();
      animateLogo();
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', () => {
        animateNavItems();
        animateLogo();
      });
    };
  }, []);

  return (
    <nav className="bg-white shadow-md font-bold">
      <div className="mx-auto flex justify-between items-center px-6 py-4 max-w-7xl">
        {/* Logo */}
        <div className="w-[150px] md:w-[285px]" ref={logoRef}>
          <a href="/" className="hover:text-black text-orange-500">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </a>
        </div>

        {/* Nav Links for Desktop */}
        <div ref={navRef} className="hidden md:flex space-x-6 flex-grow justify-end">
          {navItems.map(({ title, link }) => (
            <NavLink
              key={title}
              to={link}
              className="hover:text-orange-600 text-orange-400 px-3 py-2 rounded-md text-lg font-medium"
              activeClassName="text-yellow-500"
            >
              {title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-orange-500 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col mt-4">
            {navItems.map(({ title, link }) => (
              <NavLink
                key={title}
                to={link}
                className="text-orange-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-yellow-500"
                onClick={() => setIsOpen(false)} // Close the menu on link click
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
