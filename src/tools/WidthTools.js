import React from "react";
import "../App.css";

export default function WidthTools(props) {
  const { width, setWidth } = props;

  const handleWidthChange = (e) => {
    setWidth(parseInt(e.target.value));
  };

  return (
    <div className="container-with-border">
      <h4>Width: {width}</h4>
      <input
        defaultValue={width}
        type="range"
        min="8"
        max="50"
        onChange={handleWidthChange}
        className="tools"
      />
    </div>
  );
}
