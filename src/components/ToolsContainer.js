import React from "react";
import "../App.css";
import Clear from "../tools/Clear";
import ColorTools from "../tools/ColorTools";
import NumOfLines from "../tools/NumOfLines";
import ToggleColorAndAnim from "../tools/ToggleColorAndAnim";
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
    <>
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

      <ToggleColorAndAnim
        isAnimatedRender={isAnimatedRender}
        setIsAnimatedRender={setIsAnimatedRender}
        isRandomColor={isRandomColor}
        setIsRandomColor={setIsRandomColor}
      />
    </>
  );
}
