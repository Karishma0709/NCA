import React, { useState } from 'react';
import img1 from '../../assets/Registration/Registration.jpg';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '', dob: '', mobile: '', email: '',
    address: '', city: '', state: '', pincode: '', trailLocation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then(() => alert('Form submitted successfully!'))
      .catch(() => alert('Failed to send email.'));
    setFormData({ name: '', dob: '', mobile: '', email: '', address: '', city: '', state: '', pincode: '', trailLocation: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-primary w-full h-auto mb-10">
      {/* Registration Image */}
      <div className="w-full h-[500px]">
        <img src={img1} alt="Registration" className="w-full h-full object-center" />
      </div>

      {/* Registration Form */}
      <form className="mx-auto mt-8 p-8  md:mx-16 " onSubmit={handleSubmit}>
        <h2 className="text-5xl font-bold text-gray-700 mb-4">National Cricket Academy Registration Form</h2>
        <p className="text-red-600 text-2xl font-bold mb-6">Welcome to the National Cricket Academy!</p>
        <p className="text-gray-600 text-lg mb-6">
          To register for our programs, please complete the following form.
        </p>

        <div className="space-y-4">
          {['name', 'dob', 'mobile', 'email', 'address', 'city', 'state', 'pincode', 'trailLocation'].map(field => (
            <input
              key={field}
              type={field === 'dob' ? 'date' : field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
              name={field}
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
          ))}
        </div>

        <button type="submit" className="mt-6 bg-blue-900 font-bold text-white py-2 px-6 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
