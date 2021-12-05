import React from "react";
import "../App.css";

export default function ColorTools(props) {
  const { currentColor, setCurrentColor } = props;

  const handleColorPicker = (e) => {
    let newColor = e.target.value;
    setCurrentColor(newColor);
  };
  return (
    <div className="container-with-border">
      <h4>Color</h4>
      <input
        id="color-picker"
        type="color"
        name="color"
        value={currentColor}
        className="btn tools"
        onChange={handleColorPicker}
      ></input>
    </div>
  );
}
