import React from "react";
import "../App.css";

export default function ToggleColorAndAnim(props) {
  const {
    isAnimatedRender,
    setIsAnimatedRender,
    isRandomColor,
    setIsRandomColor,
  } = props;

  const handleAnimationToggle = () => {
    setIsAnimatedRender(!isAnimatedRender);
  };

  const handleRandomColor = () => {
    setIsRandomColor(!isRandomColor);
  };

  return (
    <div className="container-with-border">
      <h3>ON / OFF</h3>

      <div className="wrapper-toggle-section">
        <div className="tools-section">
          <h5 className={isRandomColor ? "text-highlighted" : ""}>RNG Color</h5>
          <button
            className={`btn btn-random-color tools ${
              isRandomColor ? "btn-toggled" : ""
            }`}
            onClick={handleRandomColor}
          ></button>
        </div>

        <div className="tools-section">
          <h5 className={isAnimatedRender ? "text-highlighted" : ""}>
            Animation
          </h5>
          <button
            className={`btn-animation btn tools ${
              isAnimatedRender ? "btn-toggled" : ""
            }`}
            onClick={handleAnimationToggle}
          ></button>
        </div>
      </div>
    </div>
  );
}
