import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestVisas = () => {

  const [visas, setVisas] = useState([]);

  useEffect(() => {
    // Fetch the latest visas from the backend
    fetch('https://visa-navigator-portal-server-five.vercel.app/latestVisaData') // Adjust the URL as per your setup
      .then((response) => response.json())
      .then((data) => setVisas(data))
      // .catch((error) => console.error('Error fetching latest visas:', error));
  }, []);


  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="border border-fuchsia-400 shadow-md rounded-lg p-4 flex flex-col"
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{visa.countryName}</h3>
            <p className=" mb-2">
              <strong>Visa Type:</strong> {visa.visaType}
            </p>
            <p className=" mb-2">
              <strong>Processing Time:</strong> {visa.processingTime}
            </p>
            <p className=" mb-2">
              <strong>Fee:</strong> ${visa.fee}
            </p>
            <p className=" mb-2">
              <strong>Validity:</strong> {visa.validity}
            </p>
            <p className=" mb-2">
              <strong>Application Method:</strong> {visa.applicationMethod}
            </p>
            <Link
              to={`/visa-details/${visa._id}`}
              className="mt-auto bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/all-visas"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisas;
