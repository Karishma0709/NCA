import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { gsap } from 'gsap';

const BestCricketCoaching = () => {
  const coachingRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = coachingRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
        gsap.fromTo(
          coachingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const features = [
    {
      title: "Experienced Coaching Staff",
      description: "The NCA employs head coaches with vast national and international experience. Specialized coaches focus on specific skills in batting, bowling, fielding, and wicketkeeping.",
    },
    {
      title: "Mentorship by Legends",
      description: "Cricket legends and former international players regularly interact with and mentor NCA trainees, sharing their invaluable insights and experiences.",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "The NCA features multiple pitches, all-weather indoor practice nets, and a fully equipped gym. On-site medical and rehabilitation centers manage and prevent injuries.",
    },
    {
      title: "Advanced Training Programs",
      description: "Skill development camps focus on specific techniques, while fitness and conditioning camps enhance physical fitness. Workshops with sports psychologists build mental toughness.",
    },
    {
      title: "Use of Modern Technology",
      description: "Video analysis, biomechanics, and data analytics refine techniques and track performance. Personalized dietary plans ensure optimal health and performance.",
    },
    {
      title: "Holistic Development Approach",
      description: "Leadership and teamwork programs develop essential qualities. Continuous mental health support and personalized nutrition plans provide comprehensive player development.",
    },
    {
      title: "Competitive Match Practice",
      description: "Regular practice matches against other academies and domestic tournaments offer competitive experience. Continuous scouting and talent identification ensure promising players are nurtured.",
    },
    {
      title: "Career Pathway Support",
      description: "Regular assessments and feedback sessions track progress and set future goals. Pathways to higher levels of cricket include selection for state and national teams based on performance.",
    },
  ];

  return (
    <section ref={coachingRef} className="py-10 bg-gray-100 md:px-10 md:mx-12 text-justify">
      <div className="flex font-extrabold justify-center items-center text-5xl">
        <BsThreeDots className="text-blue-600 " />{' '}
        <BsThreeDots className="text-blue-600" />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Get the Best Cricket Coaching at National Cricket Academy
        </h2>
        <div>
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <h3 className="text-xl font-semibold mb-2 underline">
                {index + 1}. {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-lg">{feature.description}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestCricketCoaching;
