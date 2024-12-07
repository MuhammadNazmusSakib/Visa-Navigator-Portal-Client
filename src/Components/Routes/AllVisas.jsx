// import React, { useState } from 'react'
// import { Link, useLoaderData } from 'react-router-dom'

// const AllVisas = () => {
//   const addedVisaLoader = useLoaderData()
//   const [visas, setVisas] = useState(addedVisaLoader)
//   return (
//     <div>
//       <div className="p-8 bg-gray-100">

        
//         <div className="mb-6">
//           <label className="mr-2 font-semibold">Filter by Visa Type:</label>
//           <select
//             className="select select-bordered w-full max-w-xs"
//             value={visaType}
//             onChange={(e) => setVisaType(e.target.value)}
//           >
//             <option value="all">All</option>
//             <option value="work">Work Visa</option>
//             <option value="student">Student Visa</option>
//             <option value="tourist">Tourist Visa</option>
//           </select>
//         </div>

//         <h1 className="text-3xl font-bold text-center mb-6">All Visas</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {visas.map((visa) => (
//             <div
//               key={visa._id}
//               className="bg-white shadow-md rounded p-4 flex flex-col"
//             >
//               <img
//                 src={visa.countryImage}
//                 alt={visa.countryName}
//                 className="h-40 w-full object-cover rounded mb-4"
//               />
//               <h2 className="text-lg font-semibold mb-2">{visa.countryName}</h2>
//               <p className="text-gray-600 mb-2">
//                 <strong>Visa Type:</strong> {visa.visaType}
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <strong>Processing Time:</strong> {visa.processingTime}
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <strong>Fee:</strong> ${visa.fee}
//               </p>
//               <Link
//                 to={`/visa-details/${visa._id}`}
//                 className="mt-auto bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
//               >
//                 See Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AllVisas


import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisas = () => {
  const addedVisaLoader = useLoaderData(); // Load all visa data
  const [visas, setVisas] = useState(addedVisaLoader); // State to manage displayed visas
  const [visaType, setVisaType] = useState('all'); // State to track selected visa type

  // Function to filter visas based on the selected type
  const handleFilterChange = (e) => {
    const selectedType = e.target.value;
    setVisaType(selectedType);
    // console.log(selectedType)

    if (selectedType === 'all') {
      setVisas(addedVisaLoader); // Show all visas if "All" is selected
    } else {
      const filteredVisas = addedVisaLoader.filter(
        (visa) => visa.visaType === selectedType
      );
      setVisas(filteredVisas);
    }
  };

  return (
    <div>
      <div className="px-4 py-8">
        {/* Dropdown Menu for Filtering */}
        <div className="mb-6">
          <label className="mr-2 font-semibold">Filter by Visa Type:</label>
          <select
            className="select select-bordered w-full max-w-xs"
            value={visaType}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="Official visa">Official visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Tourist visa">Tourist Visa</option>
          </select>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">All Visas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visas.length > 0 ? (
            visas.map((visa) => (
              <div
                key={visa._id}
                className="bg-white shadow-md rounded p-4 flex flex-col"
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="h-40 w-full object-cover rounded mb-4"
                />
                <h2 className="text-lg text-gray-800 font-semibold mb-2">{visa.countryName}</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Visa Type:</strong> {visa.visaType}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Processing Time:</strong> {visa.processingTime}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Fee:</strong> ${visa.fee}
                </p>
                <Link
                  to={`/visa-details/${visa._id}`}
                  className="mt-auto bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
                >
                  See Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No visas found for the selected type.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllVisas;
