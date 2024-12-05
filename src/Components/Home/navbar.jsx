import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Contex } from '../ContexApi/Contex';

const Navbar = () => {
  const { user, logOut } = useContext(Contex)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Visa Navigator
        </Link>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-4">
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
          <NavLink to={`/my-visa-applications/${user.email}`} className="hover:underline">
            My Visa Applications
          </NavLink>
          {user ? (
            <button
              onClick={logOut}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
              Logout
            </button>
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
          className="md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
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
          <NavLink to="/my-visa-applications" className="block hover:underline">
            My Visa Applications
          </NavLink>
          {user ? (
            <button
              onClick={logOut}
              className="block w-full text-left bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
              Logout
            </button>
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
