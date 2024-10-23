import React from 'react';
import banner1 from '../../assets/Center/CenterBanner.png';

const RegistrationForm = () => {
  return (
    <div className="bg-primary w-full h-auto mb-10">
      {/* Registration Image */}
      <div className="relative w-full h-[300px]">
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-10"></div>
  <img src={banner1} alt="Gallery Banner" className="w-full h-full object-cover" />

  {/* Centered Text with Transparent Background */}
  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <h2 className="text-3xl font-bold text-gray-100 shadow-2xl bg-green-700 bg-opacity-70 p-2 rounded-md md:text-5xl text-shadow-lg tracking-wide">
    Registration
    </h2>
  </div>
</div>
      {/* Registration Form */}
      <form
        className="mx-auto mt-8 p-8 md:mx-16 bg-white shadow-lg rounded-lg animate-fade-in-up transition-transform duration-300"
        action="https://formspree.io/f/xyzyzdvr"
        method="POST"
      >
        <h2 className="text-5xl font-bold text-gray-700 mb-4 text-center">National Cricket Academy Registration</h2>
        <p className="text-red-600 text-2xl font-bold mb-6 text-center">Welcome to the National Cricket Academy!</p>
        <p className="text-gray-600 text-lg mb-6 text-center">
          To register for our programs, please complete the following form.
        </p>

        <div className="space-y-6">
          {/* Input Fields */}
          {['name', 'dob', 'mobile', 'email', 'address', 'city', 'state', 'pincode', 'trailLocation'].map((field) => (
            <input
              key={field}
              type={field === 'dob' ? 'date' : field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
              name={field}
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ease-in-out transform "
              required
            />
          ))}

          {/* Dropdown Field */}
          <select
            name="interest"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ease-in-out transform text-gray-400"
            required
          >
            <option value="" disabled selected>
              Interested in *
            </option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="Keeper">Keeper</option>
            <option value="All Rounder">All Rounder</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full py-3 bg-red-800 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform duration-300 ease-in-out transform "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
