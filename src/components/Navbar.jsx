import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto">
        <div className="flex justify-between w-full sm:w-auto items-center">
          <NavLink
            to="/"
            className="text-white font-bold text-2xl flex items-center gap-2"
          >
            <img
              src="https://img.icons8.com/?size=160&id=lsTvs3SoZ67c&format=png"
              className="w-12 h-12"
              alt="Logo"
            />
            Sorting Visualizer
          </NavLink>
          <button className="text-white sm:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`flex-col sm:flex-row sm:flex ${
            isOpen ? "flex" : "hidden"
          } sm:flex items-center w-full sm:w-auto mt-4 sm:mt-0 gap-12`}
        >
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-gray-200"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const links = [
  { to: "/selection-sort", label: "Selection Sort" },
  { to: "/bubble-sort", label: "Bubble Sort" },
  { to: "/insertion-sort", label: "Insertion Sort" },
  { to: "/merge-sort", label: "Merge Sort" },
  { to: "/quick-sort", label: "Quick Sort" },
];

export default Navbar;
