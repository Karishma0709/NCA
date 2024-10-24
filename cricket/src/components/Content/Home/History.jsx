import React, { useEffect, useRef } from "react";
import img1 from "../../../assets/Home/sca15.jpg";
import { gsap } from "gsap";

const History = () => {
  const historyRef = useRef(null);

  useEffect(() => {
    const element = historyRef.current;

    const handleScroll = () => {
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (top < windowHeight && bottom > 0) {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
        });
      } else {
        gsap.to(element, {
          opacity: 0,
          y: 50,
          duration: 1,
        });
      }
    };

    // Set initial opacity and position
    gsap.set(element, { opacity: 0, y: 50 });

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={historyRef}
      className="relative bg-primary h-[450px] lg:h-[500px] w-full flex items-center justify-center md:my-20"
    >
      <img
        src={img1}
        alt="History Image"
        className="h-full w-full md:w-[95%] md:ms-20 object-cover"
      />
      <div className="absolute w-[90%] md:w-[700px] bg-white h-[400px] md:h-[300px] lg:h-[400px] top-1/2 md:left-96 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 shadow-2xl md:p-10 p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">History of NCA</h1>
        <ul className="list-disc pl-6 space-y-2 text-blue-900 lg:text-lg text-sm">
          <li>
            The National Cricket Academy (NCA), established by the Board of
            Control for Cricket in India (BCCI) in 2000, is the premier
            institution for developing cricketing talent in India. Located
            initially at the M. Chinnaswamy Stadium in Bangalore, the NCA was
            created to provide young cricketers with world-class training
            facilities and a structured, professional environment.
          </li>
          <li>
            Over the years, the academy has expanded its infrastructure to
            include state-of-the-art training grounds, indoor practice areas,
            fitness centers, medical and rehabilitation facilities, and
            comfortable accommodations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default History;
