// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Sorting Algorithms
      </h1>
      <div className="bg-blue-100 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-6 text-gray-700">
          Sorting refers to rearrangement of a given array or list of elements
          according to a comparison operator on the elements. The comparison
          operator is used to decide the new order of elements in the respective
          data structure. Sorting means reordering of all the elements either in
          ascending or in descending order.
        </p>
        <h2 className="text-2xl font-bold mb-4">Sorting Terminology</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">In-place Sorting</h3>
            <p className="text-gray-700">
              An in-place sorting algorithm uses constant space for producing
              the output (modifies the given array only). It sorts the list only
              by modifying the order of the elements within the list. Examples:
              Selection Sort, Bubble Sort, Insertion Sort, and Heap Sort.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Internal Sorting</h3>
            <p className="text-gray-700">
              Internal Sorting is when all the data is placed in the main memory
              or internal memory. In internal sorting, the problem cannot take
              input beyond its size. Examples: heap sort, bubble sort, selection
              sort, quick sort, shell sort, insertion sort.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">External Sorting</h3>
            <p className="text-gray-700">
              External Sorting is when all the data that needs to be sorted
              cannot be placed in memory at a time, the sorting is called
              external sorting. External Sorting is used for the massive amount
              of data. Examples: Merge sort, Tag sort, Polyphase sort, Four tape
              sort, External radix sort, etc.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Stable Sorting</h3>
            <p className="text-gray-700">
              When two same data appear in the same order in sorted data without
              changing their position is called stable sort. Examples: Merge
              Sort, Insertion Sort, Bubble Sort.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Unstable Sorting</h3>
            <p className="text-gray-700">
              When two same data appear in the different order in sorted data it
              is called unstable sort. Examples: Quick Sort, Heap Sort, Shell
              Sort.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Characteristics of Sorting Algorithms
          </h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Time Complexity</span>: Time
            complexity, a measure of how long it takes to run an algorithm, is
            used to categorize sorting algorithms. The worst-case, average-case,
            and best-case performance of a sorting algorithm can be used to
            quantify the time complexity of the process.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Space Complexity</span>: Sorting
            algorithms also have space complexity, which is the amount of memory
            required to execute the algorithm.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Stability</span>: A sorting
            algorithm is said to be stable if the relative order of equal
            elements is preserved after sorting. This is important in certain
            applications where the original order of equal elements must be
            maintained.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">In-Place Sorting</span>: An in-place
            sorting algorithm is one that does not require additional memory to
            sort the data. This is important when the available memory is
            limited or when the data cannot be moved.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Adaptivity</span>: An adaptive
            sorting algorithm is one that takes advantage of pre-existing order
            in the data to improve performance.
          </p>
        </div>
        <div className="bg-blue-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Applications of Sorting Algorithms
          </h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Searching Algorithms</span>: Sorting
            is often a crucial step in search algorithms like binary search,
            ternary search, where the data needs to be sorted before searching
            for a specific element.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Data Management</span>: Sorting data
            makes it easier to search, retrieve, and analyze. Database
            optimization: Sorting data in databases improves query performance.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Machine Learning</span>: Sorting is
            used to prepare data for training machine learning models.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Data Analysis</span>: Sorting helps
            in identifying patterns, trends, and outliers in datasets. It plays
            a vital role in statistical analysis, financial modeling, and other
            data-driven fields.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Operating Systems</span>: Sorting
            algorithms are used in operating systems for tasks like task
            scheduling, memory management, and file system organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
