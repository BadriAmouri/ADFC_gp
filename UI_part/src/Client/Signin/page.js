'use client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
  
function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${isSignUp ? 'Signing up' : 'Signing in'} with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-orange-300 to-orange-500 overflow-hidden transition-all duration-700">
      
      {/* Background blobs */}
      <div className="absolute w-72 h-72 bg-white/30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
      <div className="absolute w-96 h-96 bg-orange-200/30 rounded-full blur-2xl bottom-10 right-10 animate-ping z-0" />
      <div className="absolute w-56 h-56 bg-white/20 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse z-0" />

      {/* Go Back */}
      <Link
        to='/home'
        className="absolute top-6 left-6 bg-white text-orange-600 rounded-full p-3 shadow-md hover:bg-orange-100 transition duration-300 z-20"
        title="Back to Home"
        >
        <HiArrowLeft size={20} />
        </Link>


      {/* Main layout */}
      <div className={`flex flex-1 items-center justify-between px-10 w-full z-10 flex-col md:flex-row ${isSignUp ? 'md:flex-row-reverse' : ''}`}>

        {/* Form */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-xl shadow-lg w-[360px] space-y-6 transition-all transform hover:scale-105 duration-500 ease-in-out"
          >
            <h2 className="text-4xl font-bold mb-6 text-center text-orange-600">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
              required
            />

            <button
              type="submit"
              className="w-full py-3 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 transition duration-300 ease-in-out"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">
                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              </span>
              <button
                type="button"
                className="text-sm text-orange-500 font-semibold hover:text-orange-600 transition duration-300"
                onClick={() => setIsSignUp(prev => !prev)}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>

        {/* Info Panel */}
        <div className="hidden md:flex flex-col justify-center items-center p-10 w-1/2">
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center max-w-md space-y-4">
            {/* Logo Display */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-48 h-48">
               {/*  <Image
                  src="/assets/ADFC_Logo_Full_-_AR_-_White_BG-removebg-preview.png"
                  alt="ADFC Logo"
                  fill
                  className="object-contain"
                />
  */}
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm">
              A group project developed by school students focused on <span className="font-medium">smart planning</span> and <span className="font-medium">employee distribution</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
