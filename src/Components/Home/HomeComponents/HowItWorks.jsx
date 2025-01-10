import React, { useContext } from "react";
import Lottie from "lottie-react";
import processAnimation from "../../../animations/process.json"; // Path of Lottie file
import { Contex } from "../../ContexApi/Contex";

const HowItWorks = () => {

  const {theme} = useContext(Contex)

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${theme === 'dark' ? '' : 'bg-blue-50'}`}>
      <div className=" text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
          {/* Animation */}
          <div className="lg:w-1/2 h-fit">
            <Lottie animationData={processAnimation} loop={true} />
          </div>
          {/* Description */}
          <div className="lg:w-1/2 text-left">
            <div className="list-disc lg:pl-6 text-lg space-y-4">
              <p>
                Explore a wide range of destinations around the globe. Whether
                you're planning to study, work, or travel for leisure, we
                provide up-to-date visa requirements tailored to your chosen
                destination, ensuring you make informed decisions.
              </p>
              <p>
                From student visas to tourist and work visas, we guide you in
                selecting the one that aligns with your purpose of travel.
                Learn about eligibility criteria, required documents, and
                application processes in detail.
              </p>
              <p>
                Our platform streamlines the process, guiding you through every
                step. Access templates, document checklists, and expert tips to
                ensure an error-free application. Save your progress and
                complete it at your convenience.
              </p>
              <p>
                Stay updated with real-time tracking. Receive instant
                notifications on the status of your application, from
                submission to approval, giving you peace of mind during the
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

