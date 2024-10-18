import React from 'react';
import banner1 from '../../assets/Center/CenterBanner.png';
import img1 from '../../assets/Center/Center1.jpg';
import img2 from '../../assets/Center/Center2.jpg';
import img3 from '../../assets/Center/Center3.jpg';
import img4 from '../../assets/Center/Center4.jpg';
import img5 from '../../assets/Center/Center5.jpg';
import img6 from '../../assets/Center/Center6.jpg';
import img7 from '../../assets/Center/Center7.jpg';
import img8 from '../../assets/Center/Center8.jpg';
import img9 from '../../assets/Center/Center9.jpeg';
import img10 from '../../assets/Center/Center10.jpg';
import img11 from '../../assets/Center/Center11.jpg';
import img12 from '../../assets/Home/sca15.jpg';

const academies = [
  { img: img1, title: 'Academy for Cricketing Excellence', location: 'Nyorch market, Yupia, Arunachal Pradesh 791110' },
  { img: img2, title: 'Santipur Cricket Academy', location: 'Plot No. 42, Santipur Main Road, Santipur, Guwahati – 781009' },
  { img: img3, title: 'MS Dhoni Cricket Academy', location: 'Urja Stadium, opposite DAV School, Rajbansi Nagar, Patna, Bihar 80002' },
  { img: img4, title: 'Terminator Cricket Academy', location: 'Pt.Ravi Shankar Shukla University Campus, Raipur, Chhattisgarh 492001' },
  { img: img5, title: 'Panjim Gymkhana', location: 'FRR8+M2R, Campal, Panaji, Goa 403001' },
  { img: img6, title: 'Samarpan Cricket Academy', location: 'Samarpan College, Sector 26, Gandhinagar, Gujarat 382041' },
  { img: img7, title: 'YMCA Cricket Academy', location: '1025, Udyan Path, Sector 11, Chandigarh, 160011' },
  { img: img8, title: 'DA Sports Factory', location: 'DA Sports Factory, Central Park Area, Kasumpti, Shimla, Himachal Pradesh 171009' },
  { img: img9, title: 'Gurukul Cricket Academy', location: 'Argora Housing Colony, Argora, Ranchi, Jharkhand 834002' },
  { img: img10, title: 'Epic Cricket Academy', location: 'TC-98, Kallingal Rd, Technopark Campus, Thiruvananthapuram, Kerala 695582' },
  { img: img11, title: 'Cricket Academy of Pathans', location: 'Arif Nagar Stadium, Bhopal, Madhya Pradesh 462001' },
  { img: img12, title: 'Sunil Cricket Academy', location: 'Plot No – 9 , Corss maidan, Churchgate, Mumbai, Maharashtra 400020' },
];

const Center = () => {
  return (
    <div className="bg-primary w-full h-auto">
      {/* Banner Image */}
      <div className="w-full h-[500px]">
        <img src={banner1} alt="Center" className="w-full h-full object-center" />
      </div>

      {/* Cards for each Academy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 justify-center items-center mx-20">
        {academies.map((academy, index) => (
          <div key={index} className="border-2 border-green-600 rounded-3xl overflow-hidden shadow-2xl h-[500px] p-5 max-w-[400px] w-full">
            <img src={academy.img} alt={academy.title} className="h-[60%] w-full object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{academy.title}</h3>
              <p className="text-gray-600 text-xl">{academy.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
