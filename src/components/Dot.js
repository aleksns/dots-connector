import React from "react";
import "../App.css";

export default function Dot(
  contextRef,
  context2Ref,
  canvas2Ref,
  listOfDots,
  clearTheCanvas,
  isAnimatedRender,
  width,
  getScaledMouseCoordinates
) {
  var newDot;
  var opacity;
  var opacityModifier;
  var radius;

  function drawDot({ nativeEvent }) {
    contextRef.current.lineWidth = width;

    var { x, y } = getScaledMouseCoordinates({ nativeEvent });
    newDot = {};
    newDot = [x, y];

    addDotToList(newDot);

    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
    contextRef.current.closePath();

    if (isAnimatedRender) {
      renderDotAnimation();
    }
  }

  function addDotToList(newDot) {
    listOfDots.push(newDot);
  }

  function renderDotAnimation() {
    updateAnimatedDotValues();
    playDotAnimation();
  }

  function updateAnimatedDotValues() {
    opacity = 0.1;
    opacityModifier = 0.05;
    radius = width;
  }

  function playDotAnimation() {
    if (opacity >= 0) {
      requestAnimationFrame(playDotAnimation);
    }
    clearTheCanvas(context2Ref, canvas2Ref);

    context2Ref.current.globalAlpha = opacity;
    context2Ref.current.beginPath();
    context2Ref.current.arc(newDot[0], newDot[1], radius, 0, 2 * Math.PI);
    context2Ref.current.fill();
    context2Ref.current.closePath();

    radius += 1.6;
    opacity += opacityModifier;
    opacity = Math.round((opacity + Number.EPSILON) * 100) / 100;

    if (opacity >= 0.4) {
      opacityModifier = opacityModifier * -1;
    }
  }

  return {
    drawDot,
  };
}
