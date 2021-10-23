import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Dot from "./components/Dot";
import Line from "./components/Line";
import HeaderComponent from "./components/HeaderComponent";

var listOfDots = [];

export default function App() {
  const canvasRef = useRef(null);
  const canvas2Ref = useRef(null);
  const contextRef = useRef(null);
  const context2Ref = useRef(null);

  const [currentColor, setCurrentColor] = useState("#000000");
  const [numberOfDotsToConnect, setNumberOfDotsToConnect] = useState(2);
  const [isAnimatedRender, setIsAnimatedRender] = useState(true);
  const [isRandomColor, setIsRandomColor] = useState(true);
  const [width, setWidth] = useState(12);

  const clearTheCanvas = (contextRefValue, canvasRefValue) => {
    contextRefValue.current.clearRect(
      0,
      0,
      canvasRefValue.current.width,
      canvasRefValue.current.height
    );
  };

  const clearAll = () => {
    clearTheCanvas(contextRef, canvasRef);
    clearTheCanvas(context2Ref, canvas2Ref);
    listOfDots.length = 0;
  };

  const updateColorValues = (newColor) => {
    contextRef.current.strokeStyle = newColor;
    context2Ref.current.strokeStyle = newColor;
    context2Ref.current.fillStyle = newColor;
  };

  const getRandomColor = (e) => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  const { drawDot } = Dot(
    contextRef,
    context2Ref,
    canvas2Ref,
    listOfDots,
    clearTheCanvas,
    isAnimatedRender,
    width
  );
  const { drawLine } = Line(
    contextRef,
    listOfDots,
    numberOfDotsToConnect,
    isAnimatedRender,
    width
  );

  const handleMouseDown = (e) => {
    updateColorValues(currentColor);
    drawDot(e);

    if (listOfDots.length > 1) {
      if (isRandomColor) {
        setCurrentColor(getRandomColor(e));
      }
      drawLine(e);
    }
  };

  useEffect(() => {
    let heightCustomValue = 80;

    const canvas = canvasRef.current;
    canvas.width = (window.innerWidth - 2) * 2;
    canvas.height = (window.innerHeight - heightCustomValue) * 2;
    const context = canvas.getContext("2d");
    canvas.style.width = `${window.innerWidth - 2}px`;
    canvas.style.height = `${window.innerHeight - heightCustomValue}px`;
    context.scale(2, 2);

    context.lineCap = "round";
    context.strokeStyle = currentColor;
    context.lineWidth = width;
    context.lineJoin = "round";
    contextRef.current = context;

    const canvas2 = canvas2Ref.current;
    canvas2.width = (window.innerWidth - 2) * 2;
    canvas2.height = (window.innerHeight - heightCustomValue) * 2;
    const context2 = canvas2.getContext("2d");
    canvas2.style.width = `${window.innerWidth - 2}px`;
    canvas2.style.height = `${window.innerHeight - heightCustomValue}px`;
    context2.scale(2, 2);

    context2.lineCap = "round";
    context2.strokeStyle = currentColor;
    context2.lineWidth = width;
    context2.lineJoin = "round";
    context2Ref.current = context2;
  }, []);

  return (
    <>
      <HeaderComponent
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
      <Canvas
        canvasRef={canvasRef}
        canvas2Ref={canvas2Ref}
        handleMouseDown={handleMouseDown}
        //handleMouseUp={handleMouseUp}
        //handleMouseMove={handleMouseMove}
      />
    </>
  );
}
