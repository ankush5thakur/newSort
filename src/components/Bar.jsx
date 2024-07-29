import { useState, useEffect } from "react";
import "./B.css";

const Bar = ({ index, length, colorKey, changeArray }) => {
  const [len, setLen] = useState(length);
  const colors = ["#3d5af1", "#ff304f", "#83e85a"];

  useEffect(() => {
    setLen(length);
  }, [length]);

  let barStyle = {
    background: colors[colorKey] || "#3d5af1",
    height: `${len}px`,
    marginTop: `${200 - len}px`,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
  };

  let textStyle = {
    color: "white",
    width: "100%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%) rotate(-90deg)",
    textAlign: "center",
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
  };

  const handleChange = (e) => {
    let val = e.target.value;
    if (val === "") {
      setLen(0);
      changeArray(index, 0);
    } else {
      val = parseInt(val, 10);
      if (val > 200) {
        setLen(200);
        changeArray(index, 200);
      } else {
        setLen(val);
        changeArray(index, val);
      }
    }
  };

  const increment = () => {
    let newLen = Math.min(len + 1, 200);
    setLen(newLen);
    changeArray(index, newLen);
  };

  const decrement = () => {
    let newLen = Math.max(len - 1, 0);
    setLen(newLen);
    changeArray(index, newLen);
  };

  return (
    <div className="bar" style={barStyle}>
      <input
        type="number"
        className="text"
        style={textStyle}
        value={len}
        onChange={handleChange}
      />
      <div className="quantityNav">
        <div className="quantity-btn" onClick={increment}>
          +
        </div>
        <div className="quantity-btn" onClick={decrement}>
          -
        </div>
      </div>
    </div>
  );
};

export default Bar;
