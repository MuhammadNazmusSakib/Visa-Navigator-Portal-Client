import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileBar = () => {
  const location = useLocation();

  return (
    <div className='mt-4'>
      <div className="hidden lg:flex flex-col">
        <Link
          to="/my-profile/add-visa"
          className={`${
            location.pathname === '/my-profile/add-visa' ? 'bg-gray-300 text-black' : ''
          } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
        >
          Add Visa
        </Link>
        <Link
          to="/my-profile/my-added-visas"
          className={`${
            location.pathname === '/my-profile/my-added-visas' ? 'bg-gray-300 text-black' : ''
          } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
        >
          My Added Visas
        </Link>
        <Link
          to="/my-profile/my-visa-applications/email"
          className={`${
            location.pathname === '/my-profile/my-visa-applications/email' ? 'bg-gray-300 text-black' : ''
          } font-semi-bold p-2 hover:bg-slate-200 hover:text-blue-600`}
        >
          My Visa Applications
        </Link>
      </div>
    </div>
  );
};

export default ProfileBar;
