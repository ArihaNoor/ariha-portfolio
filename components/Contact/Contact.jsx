"use client";
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className="w-full py-20 flex flex-col md:flex-row justify-between items-center px-4">
      <div className="w-full md:w-1/2 p-6 md:p-12 mt-10 md:mt-20 bg-white border-4 border-black shadow-lg md:ml-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
        <p className="mb-6">I would love to hear from you.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg font-semibold" htmlFor="name">First name</label>
            <input
              className="w-full px-3 py-2 border border-black"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg font-semibold" htmlFor="email">Your Email</label>
            <input
              className="w-full px-3 py-2 border border-black"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg font-semibold" htmlFor="project-idea">Project Idea</label>
            <input
              className="w-full px-3 py-2 border border-black"
              type="text"
              id="project-idea"
              placeholder="Project Idea"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg font-semibold" htmlFor="project-details">Your Project Details</label>
            <textarea
              className="w-full px-3 py-2 border border-black"
              id="project-details"
              rows="4"
              placeholder="Enter Project Details....."
            ></textarea>
          </div>
          <button className="bg-golden text-black px-8 font-bold text-xl py-4 shadow rounded-lg transition duration-200">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/3 mt-10 md:mt-0 flex flex-col items-start space-y-6 md:ml-4">
        <div className="flex items-center space-x-3">
          <div className="bg-golden p-3 rounded-full">
            <FaEnvelope className="text-black" />
          </div>
          <div>
            <p className="text-gray-700">Phone</p>
            <p className="font-semibold">+92 304 2160150</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-golden p-3 rounded-full">
            <FaPhone className="text-black" />
          </div>
          <div>
            <p className="text-gray-700">Mail</p>
            <p className="font-semibold">dev.ariha0@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-golden p-3 rounded-full">
            <FaMapMarkerAlt className="text-black" />
          </div>
          <div>
            <p className="text-gray-700">Reach Me</p>
            <p className="font-semibold">Faisalabad, Pakistan</p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-4">
          <Image src="/contact.png" alt="Contact illustration" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
