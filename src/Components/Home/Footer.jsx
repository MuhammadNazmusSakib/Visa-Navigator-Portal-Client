import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
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
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22 12a10 10 0 1 0-11.63 9.88v-7h-2v-3h2v-1.6c0-2 1.2-3.11 3-3.11.87 0 1.62.06 1.84.09v2.15h-1.26c-1 0-1.2.48-1.2 1.17v1.3h2.4l-.31 3h-2.09v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19.633 7.997c.013.185.013.37.013.556 0 5.693-4.332 12.26-12.26 12.26A12.195 12.195 0 0 1 0 18.344a8.945 8.945 0 0 0 1.048.052 8.626 8.626 0 0 0 5.343-1.84A4.309 4.309 0 0 1 2.84 14.72c.247.038.494.05.753.05.364 0 .728-.052 1.079-.138a4.297 4.297 0 0 1-3.444-4.212v-.052a4.27 4.27 0 0 0 1.943.544 4.296 4.296 0 0 1-1.913-3.575c0-.79.208-1.522.576-2.158a12.207 12.207 0 0 0 8.862 4.494 4.848 4.848 0 0 1-.105-.983 4.297 4.297 0 0 1 4.296-4.296c1.237 0 2.352.525 3.137 1.37a8.616 8.616 0 0 0 2.72-1.037 4.28 4.28 0 0 1-1.889 2.36 8.621 8.621 0 0 0 2.472-.663 8.803 8.803 0 0 1-2.147 2.229Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20.452 20.452h-3.912v-5.898c0-1.405-.027-3.216-1.96-3.216-1.963 0-2.264 1.533-2.264 3.113v6h-3.912V8.928h3.757v1.567h.053a4.114 4.114 0 0 1 3.705-2.037c3.964 0 4.69 2.61 4.69 6.008v6.986Zm-16.49-13.76h3.92V20.45H3.96V6.692ZM5.92 4.931a2.27 2.27 0 1 1 0-4.54 2.27 2.27 0 0 1 0 4.54ZM22.245 0H1.765C.789 0 0 .78 0 1.742v20.516C0 23.22.789 24 1.765 24h20.48c.978 0 1.765-.779 1.765-1.742V1.742C24 .78 23.223 0 22.245 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
