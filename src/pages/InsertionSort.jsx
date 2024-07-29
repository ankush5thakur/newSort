// src/pages/InsertionSort.jsx
import React from "react";
import SortingVisualizer from "./../components/SortingVisualizer";

const InsertionSort = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Insertion Sort
      </h1>
      <SortingVisualizer algorithm="insertion_sort" />;
      <div className="bg-blue-100 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-6 text-gray-700">
          Insertion Sort is a simple comparison-based sorting algorithm. It
          works by building the final sorted array one item at a time. It is
          much less efficient on large lists than more advanced algorithms such
          as quicksort, heapsort, or merge sort.
        </p>
        <h2 className="text-2xl font-bold mb-4">Algorithm Steps</h2>
        <ol className="list-decimal list-inside mb-6 text-gray-700">
          <li>
            Start with the second element (assume the first element is already
            sorted).
          </li>
          <li>Compare the current element with the previous elements.</li>
          <li>
            Shift all the elements greater than the current element to the
            right.
          </li>
          <li>Insert the current element in the correct position.</li>
          <li>Repeat the steps for all elements.</li>
        </ol>
        <h2 className="text-2xl font-bold mb-4">Characteristics</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <span className="font-semibold bg-red-600 text-white rounded px-2">
              Time Complexity
            </span>
            : <span className="bg-red-400 mx-2 px-2 rounded">O(n²)</span> in the{" "}
            <span className="text-red-500 font-semibold">
              {" "}
              worst and average cases,
            </span>{" "}
            <span className="bg-red-400 mx-2 px-2 rounded">O(n)</span> in the{" "}
            <span className="text-red-500 font-semibold"> best </span>
            case.
          </li>
          <li>
            <span className="font-semibold bg-green-600 text-white rounded px-2">
              Space Complexity
            </span>
            : <span className="bg-green-400 mx-2 px-2 rounded">O(1)</span>as it
            requires a{" "}
            <span className="text-green-500 font-semibold">
              constant amount of additional memory.
            </span>
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
            : <span className="text-purple-400 font-semibold">Yes </span>, it
            maintains the relative order of equal elements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InsertionSort;
