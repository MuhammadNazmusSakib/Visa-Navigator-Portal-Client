import React, { useContext, useEffect, useState } from 'react';
import { Contex } from '../../ContexApi/Contex';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';

const MyAddedVisas = () => {
  const { user } = useContext(Contex);
  const allVisa = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myAddedVisa, setMyAddedVisa] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    if (user?.email) {
      setIsLoading(true);
      fetch(`http://localhost:5000/addedVisaData/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyAddedVisa(data);
          setIsLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addedVisaData/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'The application has been deleted.', 'success');
              setMyAddedVisa(myAddedVisa.filter((app) => app._id !== id));
            }
          });
      }
    });
  };

  const openModal = (visa) => {
    setSelectedVisa(visa); // Set the selected visa data
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedVisa(null); // Reset the selected visa
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">My Added Visas</h1>
      {isLoading ? (
        <div className="text-center text-gray-600">Loading applications...</div>
      ) : myAddedVisa.length === 0 ? (
        <div className="text-gray-600 h-screen">
          <h2 className="text-2xl">No Added Visa Found</h2>
          <p className="mt-5">You have not added any visa yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAddedVisa.map((application) => (
            <div
              key={application._id}
              className="bg-white shadow-md rounded p-4"
            >
              <img
                src={application.countryImage}
                alt={application.countryName}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{application.countryName}</h2>
              <p><strong>Visa Type:</strong> {application.visaType}</p>
              <p><strong>Processing Time:</strong> {application.processingTime}</p>
              <p><strong>Fee:</strong> ${application.fee}</p>
              <p><strong>Validity:</strong> {application.validity}</p>
              <p><strong>Application Method:</strong> {application.applicationMethod}</p>
              <div className="flex place-content-around">
                <button
                  onClick={() => handleDelete(application._id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => openModal(application)} // Pass application data
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Update
                </button>
              </div>
            </div>
          ))}

          {isModalOpen && selectedVisa && (
            <Modal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              visaData={selectedVisa}
              myAddedVisa={myAddedVisa}
              setMyAddedVisa={setMyAddedVisa}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;

