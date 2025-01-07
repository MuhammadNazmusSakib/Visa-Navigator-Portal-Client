import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Contex } from "../../ContexApi/Contex";


const AddVisa = () => {
const {user} = useContext(Contex)

  const handleSubmit = (e) => {
    e.preventDefault()
    const countryImage = e.target.countryImage.value
    const countryName = e.target.countryName.value
    const processingTime = e.target.processingTime.value
    const visaType = e.target.visaType.value
    const description = e.target.description.value
    const ageRestriction = e.target.ageRestriction.value
    const fee = e.target.fee.value
    const validity = e.target.validity.value
    const applicationMethod = e.target.applicationMethod.value
    const email = user.email

    // Collect selected checkboxes
    const requiredDocuments = Array.from(
      e.target.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.nextSibling.textContent.trim())

    const addedVisaData = { countryImage, countryName, processingTime, visaType, description, ageRestriction, fee, validity, applicationMethod, requiredDocuments, email }
    // console.log(addedVisaData)

    // send data to server
    fetch('https://visa-navigator-portal-server-five.vercel.app/addedVisaData', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addedVisaData)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Added successfully!",
          icon: "success"
        });
      }
    })
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Add Visa</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto bg-gray-300 text-black shadow-md rounded p-6"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-2">Country Image URL</label>
          <input
            type="text"
            name="countryImage"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Country Name</label>
          <input
            type="text"
            name="countryName"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Visa Type</label>
          <select
            name="visaType"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
          >
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Required Documents</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <label>
              <input
                type="checkbox" value="Valid passport"
              />
              Valid passport
            </label>
            <label>
              <input
                type="checkbox" value="Visa application form"
              />
              Visa application form
            </label>
            <label>
              <input
                type="checkbox" value="Recent passport-sized photograph"
              />
              Recent passport-sized photograph
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Age Restriction</label>
          <input
            type="number"
            name="ageRestriction"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Fee</label>
          <input
            type="number"
            name="fee"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Validity</label>
          <input
            type="text"
            name="validity"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            className="w-full border border-gray-300 bg-gray-50 rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;
