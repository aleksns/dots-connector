import React from "react";
import "../App.css";

export default function WidthTools(props) {
  const { width, setWidth } = props;

  const handleWidthChange = (e) => {
    setWidth(parseInt(e.target.value));
  };

  return (
    <>
      <h4 style={{ width: "60px" }}>Width: {width}</h4>

      <div className="width-slider">
        <input
          defaultValue={width}
          type="range"
          min="8"
          max="50"
          onChange={handleWidthChange}
          className="slider-width-range"
        />
      </div>
    </>
  );
}
