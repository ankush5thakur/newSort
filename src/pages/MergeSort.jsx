// src/pages/MergeSort.jsx
import React from "react";
import SortingVisualizer from "./../components/SortingVisualizer";

const MergeSort = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8">Merge Sort</h1>
      <SortingVisualizer algorithm="merge_sort" />;
      <div className="bg-blue-100  shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-6 text-gray-700">
          Merge Sort is an efficient, stable, comparison-based, divide and
          conquer sorting algorithm. Most implementations produce a stable sort,
          meaning that the implementation preserves the input order of equal
          elements in the sorted output. Merge Sort is often the algorithm of
          choice for sorting a linked list.
        </p>
        <h2 className="text-2xl font-bold mb-4">Algorithm Steps</h2>
        <ol className="list-decimal list-inside mb-6 text-gray-700">
          <li>
            Divide the unsorted list into n sublists, each containing one
            element.
          </li>
          <li>
            Repeatedly merge sublists to produce new sorted sublists until there
            is only one sublist remaining.
          </li>
        </ol>
        <h2 className="text-2xl font-bold mb-4">Characteristics</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <span className="font-semibold bg-red-600 text-white rounded px-2">
              Time Complexity
            </span>
            : <span className="bg-red-400 mx-2 px-2 rounded">O(nlogn)</span>
            in the{" "}
            <span className="text-red-500 font-semibold">
              {" "}
              worst, average,{" "}
            </span>{" "}
            and
            <span className="text-red-500 font-semibold"> best </span> cases.
          </li>
          <li>
            <span className="font-semibold bg-green-600 text-white rounded px-2">
              Space Complexity
            </span>
            : <span className="bg-green-400 mx-2 px-2 rounded">O(n)</span> due
            to the
            <span className="text-green-500 font-semibold">
              {" "}
              extra space{" "}
            </span>{" "}
            required for the temporary arrays.
          </li>
          <li>
            <span className="font-semibold bg-yellow-600 text-white rounded px-2">
              In-place
            </span>
            : <span className="text-yellow-700 font-semibold">No </span>, it
            requires additional storage.
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

export default MergeSort;
