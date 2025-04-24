'use client';
import Link from 'next/link';


import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords don't match!");
      return;
    }
    alert(`Signed up with:\nEmail: ${email}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-300 to-orange-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-xl w-96 transition-all transform hover:scale-105 duration-500 ease-in-out"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-orange-600">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4  text-gray-400 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4  text-gray-400 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 text-gray-400 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />

        <button
          type="submit"
          className="w-full py-3 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">Already Have an Account ? </span>
          {/* Use Link to navigate to the SignUp page */}
          <Link
            href="/Signin"
            className="text-sm text-orange-500 font-semibold hover:text-orange-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
