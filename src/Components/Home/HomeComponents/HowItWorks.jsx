import React from "react";
import Lottie from "lottie-react";
import processAnimation from "../../../animations/process.json"; // Path to your Lottie file

const HowItWorks = () => {
  return (
    <div className="py-16 light:bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="md:w-2/3 h-fit">
            <Lottie animationData={processAnimation} loop={true} />
          </div>
          <div className=" text-left">
            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300">
              <li>Choose your destination.</li>
              <li>Find the visa type that suits your needs.</li>
              <li>Submit your application with ease.</li>
              <li>Track your application in real-time.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
