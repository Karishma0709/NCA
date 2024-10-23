import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import img2 from "../../../assets/Home/slider6.jpg";
import img4 from "../../../assets/Home/slider5.webp";
import img5 from "../../../assets/Home/slider7.jpg";
import { gsap } from "gsap";

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <button className="bg-white rounded-full p-2 shadow-lg">
        &#10095; {/* Right arrow character */}
      </button>
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <button className="bg-white rounded-full p-2 shadow-lg">
        &#10094; {/* Left arrow character */}
      </button>
    </div>
  );
};

const SliderSection = () => {
  const slidesRef = useRef([]);

  const settings = {
    dots: false,           // Show navigation dots
    infinite: true,       // Infinite scrolling
    speed: 500,           // Slide transition speed
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at once
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Autoplay interval in ms
    fade: true,           // Fade effect between slides
    arrows: true,         // Enable previous/next arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  // Array of slide data
  const slides = [
    {
      image: img2,
      // title: "Hero Title 1",
      // subtitle: "Hero Subtitle 1"
    },
    {
      image: img4,
      // title: "Hero Title 2",
      // subtitle: "Hero Subtitle 2"
    },
    {
      image: img5,
      // title: "Hero Title 3",
      // subtitle: "Hero Subtitle 3"
    }
  ];

  // Function to animate slides
  const animateSlides = () => {
    slidesRef.current.forEach((slide, index) => {
      gsap.fromTo(slide, 
        { opacity: 0, y: 50 }, // Starting position
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.2, // Staggering delay for each slide
          ease: "power1.out",
        }
      );
    });
  };

  useEffect(() => {
    // Animate slides on mount
    animateSlides();
  }, []);

  return (
    <div className="mb-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative" ref={el => slidesRef.current[index] = el}>
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-[600px] object-cover" />
            <div className="hero-text absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;  
