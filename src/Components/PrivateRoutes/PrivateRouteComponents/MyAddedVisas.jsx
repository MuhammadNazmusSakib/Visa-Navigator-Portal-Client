import React, { useContext, useEffect, useState } from 'react'
import { Contex } from '../../ContexApi/Contex'
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom'

const MyAddedVisas = () => {
  const { user } = useContext(Contex)
  const allVisa = useLoaderData()
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [myAddedVisa, setMyAddedVisa] = useState({
    email: user.email,
    firstName: "",
    lastName: "",
    fee: allVisa.fee,
    countryImage: allVisa.countryImage,
    countryName: allVisa.countryName,
    processingTime: allVisa.processingTime,
    visaType: allVisa.visaType,
    description: allVisa.description,
    ageRestriction: allVisa.ageRestriction,
    validity: allVisa.validity,
    applicationMethod: allVisa.applicationMethod,
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({
      ...applicationData,
      [name]: value,
    });
  };

  // Fetch myAddedVisa based on the current user
  useEffect(() => {
    if (user?.email) {
      setIsLoading(true) // Start loading
      fetch(`http://localhost:5000/addedVisaData/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyAddedVisa(data)
          setIsLoading(false) // Stop loading
        })
    }
  }, [user]);

  // Delete an application
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addedVisaData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The application has been deleted.", "success");
              setMyAddedVisa(myAddedVisa.filter((app) => app._id !== id));
            }
          });
      }
    });
  };

  // Update myVisaData
  const handleApply = (e) => {
    e.preventDefault();
    // console.log("Application Data:", applicationData);
    // alert("Application Submitted!");
    setIsModalOpen(false); // Close the modal after submission

    // send data to server
    fetch('http://localhost:5000/addedVisaData', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(myAddedVisa)
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
      <h1 className="text-3xl font-bold mb-6 text-center">My Visa Applications</h1>
      {isLoading ? (
        <div className="text-center text-gray-600">Loading applications...</div>
      ) : myAddedVisa.length === 0 ? (
        <div className="text-gray-600 h-screen">
          <h2 className="text-2xl">No Visa Applications Found</h2>
          <p className="mt-5">You have not applied for any visas yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAddedVisa.map((application) => (
            <div
              key={application._id} // Unique key
              className="bg-white shadow-md rounded p-4"
            >
              <img
                src={application.countryImage}
                alt={application.country}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{application.countryName}</h2>
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
              <div className='flex place-content-around'>
                <button
                  onClick={() => handleDelete(application._id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
              </div>
            </div>
          ))}

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
                      value={myAddedVisa.email}
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={myAddedVisa.firstName}
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
                      value={myAddedVisa.lastName}
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
                      value={myAddedVisa.appliedDate}
                      readOnly
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-2">Fee</label>
                    <input
                      type="text"
                      name="fee"
                      value={`$${myAddedVisa.fee}`}
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
      )}
    </div>
  )
}

export default MyAddedVisas