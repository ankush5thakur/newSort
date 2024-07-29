// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectionSort from "./pages/SelectionSort";
import BubbleSort from "./pages/BubbleSort";
import InsertionSort from "./pages/InsertionSort";
import MergeSort from "./pages/MergeSort";
import QuickSort from "./pages/QuickSort";
import PageNotFound from "./pages/Pagenotfound";
import SortingProvider from "./components/SortingProvider";

const App = () => {
  return (
    <Router>
      <SortingProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection-sort" element={<SelectionSort />} />
          <Route path="/bubble-sort" element={<BubbleSort />} />
          <Route path="/insertion-sort" element={<InsertionSort />} />
          <Route path="/merge-sort" element={<MergeSort />} />
          <Route path="/quick-sort" element={<QuickSort />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </SortingProvider>
    </Router>
  );
};

export default App;
