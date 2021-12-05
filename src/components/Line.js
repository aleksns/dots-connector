import React from "react";
import "../App.css";

var objects = [];
var objectsWaypoints = [];

export default function Line(
  contextRef,
  listOfDots,
  numberOfDotsToConnect,
  isAnimatedRender,
  width
) {
  var numOfIterations = 20;
  var t;
  var endX;
  var endY;

  function drawLine() {
    contextRef.current.lineWidth = width / 3;

    objects = [];
    objectsWaypoints = [];

    let lastDot = listOfDots[listOfDots.length - 1];
    endX = lastDot[0];
    endY = lastDot[1];

    for (
      let i = 2;
      i <= numberOfDotsToConnect + 1 && prevDotIndexExists(i);
      i++
    ) {
      let prevDot = listOfDots[listOfDots.length - i];
      objects.push({
        startX: prevDot[0],
        startY: prevDot[1],
      });
    }

    if (isAnimatedRender) {
      renderLineAnimation();
    } else {
      renderLine();
    }
    contextRef.current.closePath();
  }

  function calculateWaypoints(object) {
    var waypoints = [];

    let obj = object;

    let dx = endX - obj.startX;
    let dy = endY - obj.startY;

    for (let j = 0; j <= numOfIterations; j++) {
      var x = obj.startX + (dx * j) / numOfIterations;
      var y = obj.startY + (dy * j) / numOfIterations;
      waypoints.push({ x: x, y: y });
    }
    objectsWaypoints.push(waypoints);
  }

  function renderLineAnimation() {
    t = 1;

    objects.forEach((obj) => {
      calculateWaypoints(obj);
    });

    playLineAnimation();
  }

  function playLineAnimation() {
    if (t <= numOfIterations) {
      requestAnimationFrame(playLineAnimation);

      objectsWaypoints.forEach((obj) => {
        contextRef.current.beginPath();
        contextRef.current.moveTo(obj[t - 1].x, obj[t - 1].y);
        contextRef.current.lineTo(obj[t].x, obj[t].y);
        contextRef.current.stroke();
      });
    }

    t++;
  }

  function renderLine() {
    objects.forEach((obj) => {
      contextRef.current.beginPath();
      contextRef.current.moveTo(obj.startX, obj.startY);
      contextRef.current.lineTo(endX, endY);
      contextRef.current.stroke();
      contextRef.current.closePath();
    });
  }

  function prevDotIndexExists(i) {
    return listOfDots.length - i >= 0;
  }

  return {
    drawLine,
  };
}
