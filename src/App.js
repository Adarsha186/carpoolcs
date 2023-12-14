import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Customer from "./Customer";
import Driver from "./Driver";

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <NavLink to="/" className="logo">
          <h1 className="text-4xl flex items-center justify-center font-bold tracking-tight sm:text-6xl text-black">
            DriveSync
          </h1>
        </NavLink>

        <div className="header-container flex justify-center">
          <div className="header bg-gray-500 text-white p-4">
            <div className="nav-links flex gap-4">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="text-white hover:bg-gray-600 px-3 py-2 rounded"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/driver"
                className="text-white hover:bg-gray-600 px-3 py-2 rounded"
              >
                Driver
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/customer"
                className="text-white hover:bg-gray-600 px-3 py-2 rounded"
              >
                Customer
              </NavLink>
            </div>
          </div>
        </div>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/customer" element={<Customer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
