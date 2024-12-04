import React from "react";
import { useNavigate } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/visa-details/${visa.id}`);
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={visa.countryImage}
        alt={visa.country}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold">{visa.country}</h2>
      <p className="text-sm text-gray-600">Visa Type: {visa.visaType}</p>
      <p className="text-sm text-gray-600">Processing Time: {visa.processingTime}</p>
      <p className="text-sm text-gray-600">Fee: {visa.fee}</p>
      <p className="text-sm text-gray-600">Validity: {visa.validity}</p>
      <p className="text-sm text-gray-600">Application Method: {visa.applicationMethod}</p>
      <button
        onClick={handleSeeDetails}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        See Details
      </button>
    </div>
  );
};

export default VisaCard;
