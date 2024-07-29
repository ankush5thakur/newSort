import React, { useContext, useEffect } from "react";
import { SortingContext } from "./SortingProvider";
import "./Style.css";

const SortingVisualizer = ({ algorithm }) => {
  const {
    sortingState,
    generateSortingArray,
    startVisualizing,
    changeSortingSpeed,
    getAlgo,
  } = useContext(SortingContext);

  useEffect(() => {
    getAlgo(algorithm);
    generateSortingArray();
  }, []);

  return (
    <div className="contained">
      <div className="bars">
        {sortingState.array.map((bar, idx) => (
          <div
            className={`bar ${bar.state}`}
            key={idx}
            style={{ height: `${bar.value / 10}%` }}
          >
            <span className="bar-value">{bar.value}</span>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => generateSortingArray(false)}>New Array</button>
        <button onClick={startVisualizing} disabled={sortingState.sorting}>
          Start
        </button>
        <select onChange={changeSortingSpeed} disabled={sortingState.sorting}>
          <option value="slow">Slow</option>
          <option value="normal">Normal</option>
          <option value="fast">Fast</option>
        </select>
      </div>
    </div>
  );
};

export default SortingVisualizer;
