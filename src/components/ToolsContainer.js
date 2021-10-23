import React, { useEffect, useState } from "react";
import "../App.css";
import Clear from "../tools/Clear";
import ColorTools from "../tools/ColorTools";
import NumOfLines from "../tools/NumOfLines";
import ToggleColorAnim from "../tools/ToggleColorAnim";
import WidthTools from "../tools/WidthTools";

export default function ToolsContainer(props) {
  const {
    clearAll,
    numberOfDotsToConnect,
    setNumberOfDotsToConnect,
    isAnimatedRender,
    setIsAnimatedRender,
    currentColor,
    setCurrentColor,
    isRandomColor,
    setIsRandomColor,
    width,
    setWidth,
  } = props;

  return (
    <div className="tools-container-box">
      <div className="tools-border-1"></div>
      <div className="tools-border-2"></div>

      <Clear clearAll={clearAll} />
      <NumOfLines
        numberOfDotsToConnect={numberOfDotsToConnect}
        setNumberOfDotsToConnect={setNumberOfDotsToConnect}
      />
      <ColorTools
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <WidthTools width={width} setWidth={setWidth} />
      <ToggleColorAnim
        isAnimatedRender={isAnimatedRender}
        setIsAnimatedRender={setIsAnimatedRender}
        isRandomColor={isRandomColor}
        setIsRandomColor={setIsRandomColor}
      />
    </div>
  );
}
