import React from "react";
import GithubLinkWithIcon from "./GithubLinkWithIcon";
import ToolsContainer from "./ToolsContainer";

export default function HeaderComponent(props) {
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
      <div className="background-main"></div>
      <ToolsContainer
        clearAll={clearAll}
        numberOfDotsToConnect={numberOfDotsToConnect}
        setNumberOfDotsToConnect={setNumberOfDotsToConnect}
        isAnimatedRender={isAnimatedRender}
        setIsAnimatedRender={setIsAnimatedRender}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        isRandomColor={isRandomColor}
        setIsRandomColor={setIsRandomColor}
        width={width}
        setWidth={setWidth}
      />
      <GithubLinkWithIcon />
    </>
  );
}
