import React from 'react';
import banner from "../../assets/Gallery/Banner.png";
import img1 from "../../assets/Gallery/image1.webp";
import img2 from "../../assets/Gallery/image2.webp";
import img3 from "../../assets/Gallery/image3.webp";
import img4 from "../../assets/Gallery/image4.webp";
import img5 from "../../assets/Gallery/image5.webp";
import img6 from "../../assets/Gallery/image6.webp";
import img7 from "../../assets/Gallery/image7.jpg";
import img8 from "../../assets/Gallery/image8.webp";
import img9 from "../../assets/Gallery/image9.jpg";
import img10 from "../../assets/Gallery/image10.jpg";
import img11 from "../../assets/Gallery/image11.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

const Gallery = () => {
  return (
    <div className="bg-primary w-full h-auto mb-10 ">
      {/* Banner Section */}
      <div className="relative w-full h-[500px]">
        <img src={banner} alt="Gallery Banner" className="w-full h-full object-cover" />
        
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center md:bottom-[50px] md:left-[200px]">
          <h2 className="text-5xl font-bold text-white">Gallery</h2>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="p-8 md:mx-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[300px] overflow-hidden rounded-lg shadow-md">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
