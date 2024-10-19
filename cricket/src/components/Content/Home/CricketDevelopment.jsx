import React, { useEffect, useRef } from 'react';
import img1 from '../../../assets/Home/cricket-action.png';
import { FaStar } from 'react-icons/fa';
import { gsap } from 'gsap';
import { BsThreeDots } from 'react-icons/bs';

const CricketDevelopment = () => {
  // Create refs for the elements to animate
  const col1Ref = useRef(null);
  const imgRef = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    // GSAP Animation for the image to bounce in the center
    gsap.fromTo(
      imgRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'bounce.out',
        duration: 1,
      }
    );

    // GSAP Animation for the text in columns 1 and 3 to move from center to left/right
    gsap.fromTo(
      col1Ref.current.children,
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: -10,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.5,
      }
    );

    gsap.fromTo(
      col3Ref.current.children,
      { opacity: 0, x: 0 },
      {
        opacity: 1,
        x: 10,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold text-center my-10 ">
        <div className="flex font-extrabold justify-center items-center text-5xl">
          <BsThreeDots className="text-blue-600 " />{' '}
          <BsThreeDots className="text-blue-600" />
        </div>
        How To Get Selected In NCA
      </h2>
      <div className="bg-secondary text-center md:text-right px-10 py-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Column */}
          <div ref={col1Ref} className="col-span-1 space-y-4">
            <div className="p-4">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-end">
                <h2 className="text-xl font-bold md:ms-24 lg:ms-48 text-center md:text-right">
                  Start Young
                </h2>
                <FaStar className="text-2xl md:ml-2 md:mt-0 mt-2" />
              </div>
              <p className="text-center md:text-right">
                Begin playing cricket at a young age to develop fundamental
                skills.
              </p>
            </div>
            <div className="p-4">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
                <h2 className="text-xl font-bold text-center md:text-right">
                  Participate in BCCI-Conducted Tournaments
                </h2>
                <FaStar className="text-2xl md:ml-2 md:mt-0 mt-2" />
              </div>
              <p className="text-center md:text-right">
                Take part in age-group tournaments conducted by the BCCI such as
                Under 14, Under-16, Under-19, and Under-23 tournaments.
                Performances in these tournaments are closely monitored by
                selectors.
              </p>
            </div>
          </div>

          {/* Second Column - Image */}
          <div
            ref={imgRef}
            className="col-span-1 flex items-center justify-center"
          >
            <img
              src={img1}
              alt="Cricket Development"
              className="rounded-lg w-full h-auto max-w-xs"
            />
          </div>

          {/* Third Column */}
          <div ref={col3Ref} className="col-span-1 space-y-4">
            <div className="p-4">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
                <h2 className="text-xl font-bold text-center md:ms-16 md:text-right">
                  Attend Talent Hunt Camps
                </h2>
                <FaStar className="text-2xl md:ml-2 md:mt-0 mt-2" />
              </div>
              <p className="text-center md:text-right">
                Attend talent hunt camps organized by the BCCI in different
                regions. These camps are designed to identify and nurture young
                talent.
              </p>
            </div>
            <div className="p-4">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
                <h2 className="text-xl font-bold text-center md:ms-10 md:text-right">
                  Perform in Domestic Cricket
                </h2>
                <FaStar className="text-2xl md:ml-2 md:mt-0 mt-2" />
              </div>
              <p className="text-center md:text-right">
                Perform well in other domestic tournaments like the Vijay Hazare
                Trophy (50-over competition) and Syed Mushtaq Ali Trophy (T20
                competition).
              </p>
            </div>
            <div className="p-4">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
                <h2 className="text-xl font-bold text-center md:ms-12 lg:ms-32 md:text-right">
                  Attend NCA Trials
                </h2>
                <FaStar className="text-2xl md:ml-2 md:mt-0 mt-2" />
              </div>
              <p className="text-center md:text-right">
                In some cases, players are invited to NCA trials based on their
                performance in domestic cricket or recommendations from coaches
                and selectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CricketDevelopment;
