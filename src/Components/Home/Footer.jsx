import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-bold">Visa Navigator</h2>
            <p>&copy; {new Date().getFullYear()} Visa Navigator. All rights reserved.</p>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Email: support@visanavigator.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Visa St, Global City</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-indigo-800">
            <FaFacebookSquare className="text-4xl cursor-pointer"/>
            <FaInstagramSquare className="text-4xl cursor-pointer"/>
            <FaLinkedin className="text-4xl cursor-pointer"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
