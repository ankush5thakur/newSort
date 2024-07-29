// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container flex justify-between items-center h-10 mx-auto">
        <NavLink
          to="/"
          className="text-white font-bold text-2xl flex items-center gap-2"
        >
          <img
            src="https://img.icons8.com/?size=160&id=lsTvs3SoZ67c&format=png"
            className="w-12 h-12"
          />
          Sorting Visualizer
        </NavLink>
        <div className="flex space-x-10">
          <NavLink
            to="/selection-sort"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-gray-200"
            }
          >
            Selection Sort
          </NavLink>
          <NavLink
            to="/bubble-sort"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-gray-200"
            }
          >
            Bubble Sort
          </NavLink>
          <NavLink
            to="/insertion-sort"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-gray-200"
            }
          >
            Insertion Sort
          </NavLink>
          <NavLink
            to="/merge-sort"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-gray-200"
            }
          >
            Merge Sort
          </NavLink>
          <NavLink
            to="/quick-sort"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-gray-200"
            }
          >
            Quick Sort
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
