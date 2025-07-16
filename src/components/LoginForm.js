import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder validation logic
    if (password !== 'correctpassword') {
      setError('Please enter correct password');
    } else {
      setError('');
      // Proceed with login
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#172554] bg-[url('/src/assets/banner.png')] bg-cover bg-center">
      <div className="bg-white mx-4 sm:mx-6 my-6 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-lg mb-4 font-bold tracking-widest text-[#E11D48]">/ JOBFORGE</span>
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="text-xs text-gray-500">Welcome back. Enter your credentials to access your account</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <a href="#" className="absolute right-2 -top-5 text-xs text-blue-700 hover:underline whitespace-nowrap">Forgot Password</a>
            <input
              type={showPassword ? 'text' : 'password'}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-200'}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
            </button>
          </div>
          {error && <p className="text-xs text-red-500  ml-1">{error}</p>}
          <div className="flex items-center gap-2 mt-2">
            <input
              id="keepSignedIn"
              type="checkbox"
              checked={keepSignedIn}
              onChange={() => setKeepSignedIn((prev) => !prev)}
              className="accent-blue-700"
            />
            <label htmlFor="keepSignedIn" className="text-sm">Keep me signed in</label>
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or sign up with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-md py-2 hover:bg-gray-50 transition"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_40)">
                <path d="M47.5 24.5C47.5 22.6 47.3 21 47 19.3H24V28.7H37.6C37.1 31.2 35.6 33.3 33.3 34.8V40H41.2C45 36.5 47.5 31.1 47.5 24.5Z" fill="#4285F4"/>
                <path d="M24 48C30.5 48 35.9 45.9 41.2 40L33.3 34.8C31.1 36.3 28 37.3 24 37.3C17.7 37.3 12.2 33.2 10.3 27.7H2.1V33.1C7.4 42.1 15.1 48 24 48Z" fill="#34A853"/>
                <path d="M10.3 27.7C9.7 26.2 9.4 24.6 9.4 23C9.4 21.4 9.7 19.8 10.3 18.3V13H2.1C-0.2 17.1-0.2 22.9 2.1 27.1L10.3 27.7Z" fill="#FBBC05"/>
                <path d="M24 9.5C27.7 9.5 30.7 10.8 32.8 12.7L40.1 5.4C35.9 1.6 30.5 0 24 0C15.1 0 7.4 5.9 2.1 13L10.3 18.3C12.2 12.8 17.7 9.5 24 9.5Z" fill="#EA4335"/>
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm">Google</span>
          </button>
          <div className="text-center text-sm mt-2">
            Don&apos;t have an Account?{' '}
            <Link to="/signup" className="text-blue-700 font-medium hover:underline">Sign up here</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white rounded-md py-2 mt-2 font-semibold hover:bg-blue-800 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm; 