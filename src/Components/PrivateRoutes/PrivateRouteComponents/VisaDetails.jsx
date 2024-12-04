import React, { useContext, useState } from "react";
import { format } from "date-fns"; // For formatting the current date
import { useLoaderData } from "react-router-dom";
import { Contex } from "../../ContexApi/Contex";
import Swal from "sweetalert2";

const VisaDetailsPage = () => {
    const visaDetails = useLoaderData()
    const { user } = useContext(Contex)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applicationData, setApplicationData] = useState({
        email: user.email,
        firstName: "",
        lastName: "",
        appliedDate: format(new Date(), "yyyy-MM-dd"), // Current date
        fee: visaDetails.fee,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationData({
            ...applicationData,
            [name]: value,
        });
    };

    const handleApply = (e) => {
        e.preventDefault();
        // console.log("Application Data:", applicationData);
        // alert("Application Submitted!");
        setIsModalOpen(false); // Close the modal after submission

        // send data to server
        fetch('http://localhost:5000/applicationData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

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
        <div className="p-8 bg-gray-100">
            <div className="w-10/12 mx-auto flex flex-col items-center">
                {/* Visa Details Section */}
                <h1 className="text-3xl font-bold mb-6">{visaDetails.countryName} Visa</h1>
                <img
                    src={visaDetails.countryImage}
                    alt={visaDetails.countryName}
                    className="w-96 h-fit object-cover mb-6"
                />
                <div className="py-5">
                    <p>
                        <strong>Description:</strong> {visaDetails.description}
                    </p>
                    <p>
                        <strong>Visa Type:</strong> {visaDetails.visaType}
                    </p>
                    <p>
                        <strong>Processing Time:</strong> {visaDetails.processingTime}
                    </p>
                    <p>
                        <strong>Fee:</strong> ${visaDetails.fee}
                    </p>
                    <p>
                        <strong>Validity:</strong> {visaDetails.validity}
                    </p>
                    <p>
                        <strong>Age Restriction:</strong> {visaDetails.ageRestriction}+
                    </p>
                    <p>
                        <strong>Application Method:</strong> {visaDetails.applicationMethod}
                    </p>
                    <p>
                        <strong>Required Documents:</strong> {visaDetails.requiredDocuments.join(", ")}
                    </p>
                </div>

                {/* Apply for Visa Button */}
                <button
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={() => setIsModalOpen(true)}
                >
                    Apply for the Visa
                </button>

                {/* Modal for Applying */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-4">Apply for the Visa</h2>
                            <form onSubmit={handleApply}>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={applicationData.email}
                                        readOnly
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={applicationData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={applicationData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Applied Date</label>
                                    <input
                                        type="text"
                                        name="appliedDate"
                                        value={applicationData.appliedDate}
                                        readOnly
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-2">Fee</label>
                                    <input
                                        type="text"
                                        name="fee"
                                        value={`$${applicationData.fee}`}
                                        readOnly
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                                >
                                    Apply
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-full bg-gray-300 text-gray-800 py-2 rounded mt-2 hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisaDetailsPage;
