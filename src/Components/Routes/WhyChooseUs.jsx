import React, { useContext } from "react";
import { Contex } from "../ContexApi/Contex";

const WhyChooseUs = () => {
    const {theme} = useContext(Contex)
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 ${theme === 'dark' ? '' : 'bg-blue-50'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Description */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Why Do You Choose Visa Navigator?
          </h2>
          <p className=" text-lg">
            Visa Navigator provides Visa Consultation service for Tourist,
            Business, Medical, and Transit visas for over 50 countries under 150
            visa categories. We have introduced a simple way to search and get
            details about visas in just one click.
          </p>
          <p className=" text-lg">
            We strongly believe that our website will save you considerable time
            compared to searching here and there. Our expert visa consultants
            are ready to give very clear, exact, and accurate information in a
            simple way through discussions with you.
          </p>
          <p className=" text-lg">
            Furthermore, we provide document pick-up and delivery services (only
            for visas) for all our clients.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/4pWFZ0V/Why-Do-you-Choose-our-Service.webp" 
            alt="Why Choose Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
