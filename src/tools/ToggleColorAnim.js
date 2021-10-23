import React from "react";
import "../App.css";

export default function ToggleColorAnim(props) {
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
    <>
      <h4>RNG Color (ON/OFF)</h4>

      <button
        className={`btn btn-random-color btn-box tools" ${
          isRandomColor ? "btn-toggled" : ""
        }`}
        onClick={handleRandomColor}
      ></button>

      <h4>Animation (ON/OFF)</h4>

      <button
        className={`btn btn-animation btn-box tools" ${
          isAnimatedRender ? "btn-toggled" : ""
        }`}
        onClick={handleAnimationToggle}
      ></button>
    </>
  );
}
