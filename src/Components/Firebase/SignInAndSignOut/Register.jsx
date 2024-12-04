import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';
import { toast } from 'react-toastify';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { setUser, createNewUser, updateUserProfile, googleSignIn } = useContext(Contex)
  const [error, setError] = useState({})
  const [seePassword, setSeePassword] = useState(false)

  // see Password
  const handleSeePassword = () => setSeePassword((prev) => (!prev))

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target)
    const name = form.get("name")
    const email = form.get("email")
    const photo = form.get("photo")
    const password = form.get("password")
    if (password.length < 6) {
      setError({ ...error, name: 'Password must be at least 6 characters long.' })
      return
    }
    if (!/[A-Z]/.test(password)) {
      setError({ ...error, name: 'Password must have at least one uppercase letter.' })
      return
    }
    if (!/[a-z]/.test(password)) {
      setError({ ...error, name: 'Password must have at least one lowercase letter.' })
      return
    }


    createNewUser(email, password)
      .then(result => {
        const user = result.user
        setUser(user)

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            const redirectPath = location.state?.from || "/"
            navigate(redirectPath)
          }).catch(() => {
            toast("Failed!!")
          })
      })
      .catch(() => {
        toast("Registar Failed ! Please try again.", {
          position: "top-center",
          autoClose: 2000, // Close after 2 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  //  Handle Google Login 
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user
        setUser(user)

        const redirectPath = location.state?.from || "/"
        navigate(redirectPath)
      })
      .catch(() => {
        toast('Google login Failed. Please try again.');
      })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photo"
              type="url"
              placeholder="Enter a photo URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={!seePassword ? "password" : "text"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button onClick={handleSeePassword} className="absolute mt-2 -ml-10 text-2xl">
              {
                !seePassword ? <IoEyeOffSharp /> : <IoEyeSharp />
              }
            </button>

            {error.name && (
              <p className="text-red-500 text-sm mt-1">{error.name}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center mt-6">
          <button
            className="flex items-center justify-center w-full bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-200"
            onClick={handleGoogleLogin}
          >
            Sign up with Google
          </button>
        </div>

        {/* Redirect to Login */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
