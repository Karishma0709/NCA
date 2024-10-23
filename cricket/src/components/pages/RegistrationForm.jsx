import React from 'react';
import img1 from '../../assets/Registration/Registration.jpg';

const RegistrationForm = () => {
  return (
    <div className="bg-primary w-full h-auto mb-10">
      {/* Registration Image */}
      <div className="w-full h-[500px]">
        <img src={img1} alt="Registration" className="w-full h-full object-center" />
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
          className="mt-8 w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
