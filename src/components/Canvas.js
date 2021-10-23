import React from "react";
import "../App.css";

export default function Canvas(props) {
  const {
    canvasRef,
    canvas2Ref,
    handleMouseDown,
    //handleMouseUp,
    //handleMouseMove,
  } = props;

  return (
    <div className="canvas-box">
      <div className="canvas-background"></div>
      <canvas
        id="main-layer"
        onMouseDown={handleMouseDown}
        //onMouseUp={handleMouseUp}
        //onMouseMove={handleMouseMove}
        ref={canvasRef}
        className="canvas-main"
      />
      <canvas
        id="draft-layer"
        onMouseDown={handleMouseDown}
        //onMouseUp={handleMouseUp}
        //onMouseMove={handleMouseMove}
        ref={canvas2Ref}
        className="canvas-draft"
      />
    </div>
  );
}
