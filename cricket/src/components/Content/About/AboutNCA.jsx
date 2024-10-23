import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/About/vvs-laxman.png';
import { BsThreeDots } from 'react-icons/bs';
import { gsap } from 'gsap';

const AboutNCA = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate text on load from the left
    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 }, // Start from left
      { x: 0, opacity: 1, duration: 0.5 }
    );

    // Animate image on load from the right
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 }, // Start from right
      { x: 0, opacity: 1, duration: 0.5 }
    );

    const handleScroll = () => {
      // Animate text when scrolled into view
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          gsap.fromTo(
            textRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
          );
        }
      }

      // Animate image when scrolled into view
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          gsap.fromTo(
            imageRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Left Section: Text */}
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 md:mx-16 text-justify">
        <div className="md:w-1/2 p-4" ref={textRef}>
          <h2 className="text-4xl font-bold text-center">About NCA</h2>
          <div className="flex font-extrabold justify-center items-center text-5xl mb-5">
            <BsThreeDots className="" />{' '}
            <BsThreeDots className="" />
            <BsThreeDots className="" />
            <BsThreeDots className="" />
          </div>
          <p className="text-lg">
            The NCA’s vision is to create world-class cricketers by providing a comprehensive and professional training environment.
          </p>
          <p className="text-lg mt-2">
            Its mission includes identifying and nurturing talent, enhancing skills, and preparing players for the demands of international cricket. Equipped with state-of-the-art facilities such as multiple training grounds, all-weather indoor practice nets, a fully equipped gym, a swimming pool, and medical and rehabilitation centers, the NCA ensures comprehensive player development. These facilities cater to the physical, technical, and medical needs of the players, ensuring their overall well-being and readiness for competitive cricket.
          </p>
          <p className="text-lg mt-2">
            The NCA’s continuous evolution and commitment to excellence make it a cornerstone of Indian cricket, fostering the next generation of cricketing stars.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 p-4" ref={imageRef}>
          <img src={image1} alt="NCA Training" className="w-[90%] h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutNCA;
