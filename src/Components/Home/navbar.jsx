import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Contex } from '../ContexApi/Contex';

const Navbar = () => {
  const { user, logOut, toggleTheme, theme } = useContext(Contex);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(user?.email)

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Visa Navigator
        </Link>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/all-visas" className="hover:underline">
            All Visas
          </NavLink>
          <NavLink to="/add-visa" className="hover:underline">
            Add Visa
          </NavLink>
          <NavLink to="/my-added-visas" className="hover:underline">
            My Added Visas
          </NavLink>
          {/* `/my-visa-applications/${user?.email}` */}
          <NavLink to={`/my-visa-applications/email`} className="hover:underline">
            My Visa Applications
          </NavLink>
          <div onClick={toggleTheme}><input type="checkbox" value="synthwave" className="toggle theme-controller" /></div>
          {user ? (
            <div className="flex items-center space-x-4">
              {/* User Profile */}
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-white cursor-pointer"
                />
                {/* Display Name Tooltip */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user?.displayName}
                </div>
              </div>
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
          className="md:hidden focus:outline-none"
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
        <div className="md:hidden bg-blue-700 space-y-2 px-6 py-4">
          <div onClick={toggleTheme}><input type="checkbox" value="synthwave" className="toggle theme-controller" /></div>
          <NavLink to="/" className="block hover:underline">
            Home
          </NavLink>
          <NavLink to="/all-visas" className="block hover:underline">
            All Visas
          </NavLink>
          <NavLink to="/add-visa" className="block hover:underline">
            Add Visa
          </NavLink>
          <NavLink to="/my-added-visas" className="block hover:underline">
            My Added Visas
          </NavLink>
          <NavLink to={`/my-visa-applications/${user?.email}`} className="block hover:underline">
            My Visa Applications
          </NavLink>
          {user ? (
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-white"
                />
                <span>{user.displayName}</span>
              </div>
              <button
                onClick={logOut}
                className="block bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
