import React, { createContext, useState } from "react";
import bubbleSort from "../Algorithms/Bsort";
import insertionSort from "../Algorithms/Insertion";
import selectionSort from "../Algorithms/Selectionsort";
import mergeSort from "../Algorithms/Merge";
import quickSort from "../Algorithms/Quick";
// import radixSort from "../Algorithms/RadixSort";
import { getRandomNumber } from "./../helpers/math";
import { awaitTimeout } from "./../helpers/promisses";

export const SortingContext = createContext();
const speedMap = {
  slow: 1000,
  normal: 500,
  fast: 250,
};

function SortingProvider({ children }) {
  const [sortingState, setSortingState] = useState({
    array: [],
    delay: speedMap["slow"],
    algorithm: "bubble_sort",
    sorted: false,
    sorting: false,
  });
  function getAlgo(algo) {
    setSortingState((prev) => {
      return {
        ...prev,
        algorithm: algo,
      };
    });
  }
  const changeBar = (index, payload) => {
    setSortingState((prev) => ({
      ...prev,
      array: prev.array.map((item, i) =>
        i === index ? { ...item, ...payload } : item
      ),
    }));
  };

  const generateSortingArray = (sorting) => {
    const generatedArray = Array.from({ length: 12 }, () => ({
      value: getRandomNumber(60, 970),
      state: "idle",
    }));
    setSortingState((prev) => ({
      ...prev,
      array: generatedArray,
      sorted: false,
      sorting: sorting || false,
    }));
  };

  const algorithmMap = {
    bubble_sort: bubbleSort,
    insertion_sort: insertionSort,
    selection_sort: selectionSort,
    merge_sort: mergeSort,
    quick_sort: quickSort,
  };

  const startVisualizing = async () => {
    setSortingState((prev) => ({
      ...prev,
      sorting: true,
    }));
    try {
      await algorithmMap[sortingState.algorithm](sortingState, changeBar);
    } catch (error) {
      console.log(error);
    }
    setSortingState((prev) => ({
      ...prev,
      sorted: true,
      sorting: false,
    }));
  };

  const changeSortingSpeed = (e) => {
    setSortingState((prev) => ({
      ...prev,
      delay: speedMap[e.target.value] || 500,
    }));
  };

  const changeAlgorithm = (algorithm) => {
    setSortingState((prev) => ({
      ...prev,
      algorithm,
    }));
  };

  return (
    <SortingContext.Provider
      value={{
        sortingState,
        generateSortingArray,
        startVisualizing,
        changeSortingSpeed,
        changeAlgorithm,
        getAlgo,
      }}
    >
      {children}
    </SortingContext.Provider>
  );
}

export default SortingProvider;
