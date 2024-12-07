import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Modal = ({ isOpen, onClose, visaData, setMyAddedVisa, myAddedVisa }) => {
    const [formData, setFormData] = useState(visaData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            requiredDocuments: checked
                ? [...prev.requiredDocuments, value]
                : prev.requiredDocuments.filter((doc) => doc !== value),
        }));
    };
    // console.log(formData._id)
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/addedVisaData/${formData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa updated successfully!',
                        icon: 'success',
                    });
                    onClose();
                    setMyAddedVisa((prev) =>
                        prev.map((app) =>
                            app._id === formData._id ? { ...app, ...formData } : app
                        )
                    );
                }
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
                <h2 className="text-black text-2xl font-bold mb-4">Apply for the Visa</h2>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto bg-white shadow-md rounded text-black p-6"
                >
                    <div className="mb-4 ">
                        <label className="block font-semibold mb-2">Country Image URL</label>
                        <input
                            type="text"
                            name="countryImage"
                            value={formData.countryImage}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4 ">
                        <label className="block font-semibold mb-2">Country Name</label>
                        <input
                            type="text"
                            name="countryName"
                            value={formData.countryName}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Visa Type</label>
                        <select
                            name="visaType"
                            value={formData.visaType}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
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
                            value={formData.processingTime}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Required Documents</label>
                        <div className="flex gap-4">
                            <label>
                                <input
                                    type="checkbox"
                                    value="Valid passport"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Valid passport
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Visa application form"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Visa application form
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Recent passport-sized photograph"
                                    onChange={handleCheckboxChange}
                                />{" "}
                                Recent passport-sized photograph
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            rows="3"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Age Restriction</label>
                        <input
                            type="number"
                            name="ageRestriction"
                            value={formData.ageRestriction}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Fee</label>
                        <input
                            type="number"
                            name="fee"
                            value={formData.fee}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Validity</label>
                        <input
                            type="text"
                            name="validity"
                            value={formData.validity}
                            onChange={handleChange}
                            className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Application Method</label>
                        <input
                            type="text"
                            name="applicationMethod"
                            value={formData.applicationMethod}
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Update Visa
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full bg-gray-300 text-gray-800 py-2 rounded mt-2 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;




