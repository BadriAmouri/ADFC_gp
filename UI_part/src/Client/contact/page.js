'use client';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Message sent:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-300 to-orange-500">
                    {/* Go Back */}
                    <Link
        to="/sign"
        className="absolute top-6 left-6 bg-white text-orange-600 rounded-full p-3 shadow-md hover:bg-orange-100 transition duration-300 z-20"
        title="Back to Home"
        >
        <HiArrowLeft size={20} />
        </Link>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-xl w-96 transition-all transform hover:scale-105 duration-500 ease-in-out"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-orange-600">Contact Us</h2>
        
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />
        
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />
        
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />
        
        <button
          type="submit"
          className="w-full py-3 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
