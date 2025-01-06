import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Contex } from '../ContexApi/Contex';


const Navbar = () => {
  const { user, logOut, toggleTheme, theme } = useContext(Contex);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(user?.email)

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex text-xl font-bold">

          <h2>Visa Navigator</h2>
        </Link>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/all-visas" className="hover:underline">
            All Visas
          </NavLink>
          <NavLink to="/about-us" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
          
          <div onClick={toggleTheme}>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {user ? (
            <div className="flex items-center space-x-4">
              {/* User Profile */}
              <Link to='/my-profile/add-visa' className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-white cursor-pointer"
                />
                {/* Display Name Tooltip */}
                {/* <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user?.displayName}
                </div> */}
              </Link>
              {/* Logout Button */}
              <button
                onClick={logOut}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="hover:underline">
                Login
              </NavLink>
              <NavLink to="/register" className="hover:underline">
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Hamburger menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-700 space-y-2 px-6 py-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* <div onClick={toggleTheme}>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div> */}

          <NavLink to="/" className="block hover:underline">
            Home
          </NavLink>
          <NavLink to="/all-visas" className="block hover:underline">
            All Visas
          </NavLink>
          <NavLink to="/my-profile/add-visa" className="block hover:underline">
            Add Visa
          </NavLink>
          <NavLink to="/my-profile/my-added-visas" className="block hover:underline">
            My Added Visas
          </NavLink>
          <NavLink to={`/my-profile/my-visa-applications/email`} className="block hover:underline">
            My Visa Applications
          </NavLink>
          {user ? (
            <div className="flex flex-col items-start space-y-2">
              {/* <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-white"
                />
                <span>{user.displayName}</span>
              </div> */}
              <button
                onClick={logOut}
                className="block hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="block hover:underline">
                Login
              </NavLink>
              <NavLink to="/register" className="block hover:underline">
                Register
              </NavLink>
            </>
          )}
          <div onClick={toggleTheme} className='flex justify-end'>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
