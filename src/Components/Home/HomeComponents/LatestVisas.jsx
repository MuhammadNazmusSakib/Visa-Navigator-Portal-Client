import React from "react";
import { useNavigate } from "react-router-dom";
import VisaCard from "./VisaCard";

const LatestVisas = () => {



  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Visas</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <VisaCard key={visa.id} visa={visa} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/all-visas")}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          See All Visas
        </button>
      </div> */}
    </section>
  );
};

export default LatestVisas;
