import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-10">
      <div className="flex flex-col justify-between lg:flex-row items-center ">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/4S4m3Yv/about-us.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-fit"
          />
        </div>

        {/* Right Side: Description */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
          <h2 className="text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-lg">
            At <span className="font-bold text-indigo-600">Visa Navigator</span>,
            we are committed to simplifying the visa application process for individuals and businesses.
            Our expert team provides comprehensive guidance, tailored support, and real-time tracking
            to ensure a seamless experience from start to finish. With our innovative platform,
            you can explore visa options, track your application progress, and receive updates in real-time.
          </p>
          <p className="mt-4 text-lg">
            We understand that navigating visa regulations can be overwhelming. That’s why we take care of the challenging paperwork and procedures, allowing you to focus on what truly matters—your travel goals, career opportunities, or academic pursuits. Whether you're applying for a tourist visa, student visa, work permit, or family sponsorship, we have you covered.
          </p>
          <p className="mt-4 text-lg">
            Let us navigate the complexities of visa processing for you, so you can focus on your travel
            plans and opportunities. Your journey starts here!
          </p>
          {/* <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all">
            Learn More
          </button> */}
        </div>
      </div>
      {/* Google Map */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Find Us Here:
        </h3>
        <div className="w-full h-96 rounded shadow-lg overflow-hidden">
          <iframe
            title="Library Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1650.7713972630224!2d80.347509!3d7.501568000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcd5907d2eae21%3A0x111f1acaabebd2eb!2sOnline%20Visa%20Advisor%20PVT%20LTD!5e1!3m2!1sen!2slk!4v1736229210831!5m2!1sen!2slk"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


