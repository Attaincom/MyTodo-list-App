import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Illustration from '../assets/Illustration.jpg'; // Adjust path to match your folder structure

const Homepage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center w-full md:w-3/4 bg-white p-5 md:p-8 rounded-3xl shadow-2xl">
        <div className="flex justify-center items-center w-full mb-6">
          <img
            src={Illustration}
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>

        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-2">
            Task Management & To-Do List
          </h1>
          <p className="text-gray-500 mb-6">
            This productive tool is designed to help you better manage your
            tasks project-wise conveniently!
          </p>
          <div className="flex justify-center">
            <Link to="/tasks"> {/* Use Link to navigate to Tasks */}
              <button className=" w-64 text-center bg-purple-700 text-white text-lg font-medium py-3 rounded-xl shadow-md hover:bg-purple-600 transition">
                Let’s Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
