import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const AllVisas = () => {
  const addedVisaLoader = useLoaderData()
  const [visas, setVisas] = useState(addedVisaLoader)
  return (
    <div>
      <div className="p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">All Visas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="bg-white shadow-md rounded p-4 flex flex-col"
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="h-40 w-full object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{visa.countryName}</h2>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllVisas