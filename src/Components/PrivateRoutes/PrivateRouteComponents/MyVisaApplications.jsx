import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Contex } from "../../ContexApi/Contex";

const MyVisaApplications = () => {
  const { user } = useContext(Contex);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch applications based on the current user
  useEffect(() => {
    if (user?.email) {
      setIsLoading(true); // Start loading
      fetch(`http://localhost:5000/applicationData/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          setFilteredApplications(data); // Initialize with full data
          setIsLoading(false); // Stop loading
        });
    }
  }, [user]);

  // Handle search functionality
  const handleSearch = () => {
    const searchResults = applications.filter((application) =>
      application.countryName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredApplications(searchResults);
  };

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
        fetch(`http://localhost:5000/applicationData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The application has been deleted.", "success");
              const updatedApplications = applications.filter((app) => app._id !== id);
              setApplications(updatedApplications);
              setFilteredApplications(updatedApplications); // Keep filtered state consistent
            }
          });
      }
    });
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">My Visa Applications</h1>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : filteredApplications.length === 0 ? (
        <div className="text-gray-600 h-screen">
          {/* Search Bar */}
          <div className="mb-6 flex justify-center items-center">
            <input
              type="text"
              className="input input-bordered w-full max-w-md mr-4"
              placeholder="Search by country name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          <h2 className="text-2xl">No Visa Applications Found</h2>
          <p className="mt-5">You have not applied for any visa yet.</p>
        </div>
      ) : (
        <div>
          {/* Search Bar */}
          <div className="mb-6 flex justify-center items-center">
            <input
              type="text"
              className="input input-bordered w-full max-w-md mr-4"
              placeholder="Search by country name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((application) => (
              <div
                key={application._id} // Unique key
                className="bg-white shadow-md rounded p-4"
              >
                <img
                  src={application.countryImage}
                  alt={application.countryName}
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
                  onClick={() => handleDelete(application._id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyVisaApplications;
