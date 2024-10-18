import React from 'react';
import banner from "../../assets/Contact/images-2.jpeg";

const ContactUs = () => {
  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Section */}
      <div className="w-full h-[500px]">
        <img src={banner} alt="Contact Banner" className="w-full h-full object-cover" />
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Email */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">You can reach us at:</p>
            <p className="mt-2 text-blue-500 font-semibold">contact@example.com</p>
          </div>

          {/* Card 2 - Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-600">Feel free to call us at:</p>
            <p className="mt-2 text-blue-500 font-semibold">+1 (234) 567-890</p>
          </div>

          {/* Card 3 - Location */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <p className="text-gray-600">1234 Street Name, City, Country</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-12">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509243!2d144.95373531550412!3d-37.816279442021886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1e0a191%3A0x2b0a071c02b34db1!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1634158265032!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
