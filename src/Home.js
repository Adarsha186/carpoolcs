import React from "react";
import { useNavigate } from "react-router-dom";
import car1 from './images/car1.png';

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterCarClick = () => {
    navigate("/driver");
  };

  const handleBookCarClick = () => {
    navigate("/customer");
  };

  return (
    <div
      className="relative px-6 pt-14 lg:px-8 h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage: `url(${car1})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-black">
        <div className="flex items-center justify-between">
          <button
            className="rounded-md bg-indigo-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleBookCarClick}
          >
            Book a Car
          </button>
          <button
            className="rounded-md bg-black px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            onClick={handleRegisterCarClick}
          >
            Register a Car
          </button>
        </div>
      </div>
      <footer className="text-center text-white py-4 bg-gray-800">
        <p className="text-sm">© 2023 DriveSync Inc. | Developed by Adarsha and Dilip</p>
      </footer>
    </div>
  );
};

export default Home;
