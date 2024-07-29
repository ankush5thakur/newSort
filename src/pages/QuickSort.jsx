// src/pages/QuickSort.jsx
import React from "react";
import SortingVisualizer from "./../components/SortingVisualizer";

const QuickSort = () => {
  return (
    <div className="container mx-auto p-8 bg-slate-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8">Quick Sort</h1>
      <SortingVisualizer algorithm="quick_sort" />;
      <div className="bg-blue-100 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-6 text-gray-700">
          Quick Sort is an efficient comparison-based sorting algorithm. It
          works by selecting a 'pivot' element from the array and partitioning
          the other elements into two subarrays, according to whether they are
          less than or greater than the pivot. The subarrays are then sorted
          recursively.
        </p>
        <h2 className="text-2xl font-bold mb-4">Algorithm Steps</h2>
        <ol className="list-decimal list-inside mb-6 text-gray-700">
          <li>Select a pivot element from the array.</li>
          <li>Partition the array into two subarrays based on the pivot.</li>
          <li>Recursively apply the above steps to the subarrays.</li>
        </ol>
        <h2 className="text-2xl font-bold mb-4">Characteristics</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <span className="font-semibold bg-red-600 text-white rounded px-2">
              Time Complexity
            </span>
            : <span className="bg-red-400 mx-2 px-2 rounded">O(n log n)</span>
            on <span className="text-red-500 font-semibold">average</span>
            <span className="bg-red-400 mx-2 px-2 rounded"> O(n²) </span>in the
            <span className="font color-red"></span>{" "}
            <span className="text-red-500 font-semibold">worst </span>case.
          </li>
          <li>
            <span className="font-semibold bg-green-600 text-white rounded px-2">
              Space Complexity
            </span>
            :<span className="bg-green-400 mx-2 px-2 rounded"> O(log n)</span>
            due to{" "}
            <span className="text-green-500 font-semibold">
              recursive stack space
            </span>
            .
          </li>
          <li>
            <span className="font-semibold bg-yellow-600 text-white rounded px-2">
              In-place
            </span>
            : <span className="text-yellow-700 font-semibold">Yes </span>, it
            sorts the array without requiring additional storage.
          </li>
          <li>
            <span className="font-semibold bg-purple-600 text-white rounded px-2">
              Stable
            </span>
            : <span className="text-purple-400 font-semibold">No </span>, it
            does not maintain the relative order of equal elements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickSort;
