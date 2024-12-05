import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyVisaApplications = () => {
  const applicationsLoader = useLoaderData()
  const [applications, setApplications] = useState(applicationsLoader)

  const handleCancel = () => {
    console.log('cancel')
  }

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">My Visa Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application) => (
          <div
            key={application.id} // Use a unique ID for each application
            className="bg-white shadow-md rounded p-4"
          >
            <img
              src={application.countryImage}
              alt={application.country}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{application.country}</h2>
            <p>
              <strong>Visa Type:</strong> {application.visaType}
            </p>
            <p>
              <strong>Processing Time:</strong> {application.processingTime}
            </p>
            <p>
              <strong>Fee:</strong> ${application.fee}
            </p>
            <p>
              <strong>Validity:</strong> {application.validity}
            </p>
            <p>
              <strong>Application Method:</strong> {application.applicationMethod}
            </p>
            <p>
              <strong>Applied Date:</strong> {application.appliedDate}
            </p>
            <p>
              <strong>Applicant Name:</strong> {`${application.firstName} ${application.lastName}`}
            </p>
            <p>
              <strong>Applicant Email:</strong> {application.email}
            </p>
            <button
              onClick={() => handleCancel(application.id)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
