import React from 'react';
import img1 from "../../../assets/Home/cricket-action.png"; 

const CricketDevelopment = () => {
  return (
    <div className="bg-secondary text-right px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* First Column */}
        <div className="col-span-1 space-y-4">
          <div className=" p-4">
            <h2 className="text-xl font-bold">Start Young</h2>
            <p>
              Begin playing cricket at a young age to develop fundamental skills.
            </p>
          </div>

          <div className=" p-4 ">
            <h2 className="text-xl font-bold">Participate in BCCI-Conducted Tournaments</h2>
            <p>
              Take part in age-group tournaments conducted by the BCCI such as Under 14, Under-16, Under-19, and Under-23 tournaments. Performances in these tournaments are closely monitored by selectors.
            </p>
          </div>
        </div>

        {/* Second Column - Image */}
        <div className="col-span-1 flex items-center justify-center">
          <img src={img1} alt="Cricket Development" className="rounded-lg w-full h-auto max-w-xs" />
        </div>

        {/* Third Column */}
        <div className="col-span-1 space-y-4">
          <div className="p-4">
            <h2 className="text-xl font-bold">Attend Talent Hunt Camps</h2>
            <p>
              Attend talent hunt camps organized by the BCCI in different regions. These camps are designed to identify and nurture young talent.
            </p>
          </div>

          <div className=" p-4">
            <h2 className="text-xl font-bold">Perform in Domestic Cricket</h2>
            <p>
              Perform well in other domestic tournaments like the Vijay Hazare Trophy (50-over competition) and Syed Mushtaq Ali Trophy (T20 competition).
            </p>
          </div>

          <div className=" p-4">
            <h2 className="text-xl font-bold">Attend NCA Trials</h2>
            <p>
              In some cases, players are invited to NCA trials based on their performance in domestic cricket or recommendations from coaches and selectors.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CricketDevelopment;
