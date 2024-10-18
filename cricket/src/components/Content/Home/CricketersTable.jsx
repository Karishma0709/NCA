import React from 'react';

const CricketersTable = () => {
  // List of cricketers (3 per row)
  const cricketers = [
    ["Yuvraj Singh", "Gautam Gambhir", "Zaheer Khan"],
    ["Sridharan Sriram", "Laxmi Ratan Shukla", "Shiv Sunder Das"],
    ["Reetinder Singh Sodhi", "Robin Uthappa", "Tinu Yohanan"],
    ["Mohammad Kaif", "L Balaji", "Sarandeep Singh"],
    ["Harbhajan Singh", "Parthiv Patel", "Murali Karthik"],
    ["Virat Kohli", "Deep Dasgupta", "Rohit Sharma"],
    ["Ajay Ratra", "Rohit Sharma", "Piyush Chawla"],
    ["Manoj Tiwary", "Vinayak Mane", "Mohammad Shami"],
    ["Shikhar Dhawan", "Suresh Raina", "RP Singh"],
    ["Cheteshwar Pujara", "Mayank Agarwal", "K. L. Rahul"]
  ];

  return (
    <div className="bg-primary mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Cricketers List</h1>
      <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
        <thead>
          {/* <tr className="bg-gray-100 border-b">
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Cricketer 1</th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Cricketer 2</th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">Cricketer 3</th>
          </tr> */}
        </thead>
        <tbody>
          {cricketers.map((row, index) => (
            <tr key={index} className="border">
              <td className="py-3 px-4 border">{row[0]}</td>
              <td className="py-3 px-4 border">{row[1]}</td>
              <td className="py-3 px-4 border">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CricketersTable;
