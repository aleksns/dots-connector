import React from "react";
import "../App.css";

export default function Canvas(props) {
  const { canvasRef, canvas2Ref, handleMouseDown } = props;

  return (
    <>
      <div>
        <canvas
          id="main-layer"
          onMouseDown={handleMouseDown}
          ref={canvasRef}
          style={{ zIndex: 0 }}
          className="canvas"
        />
        <canvas
          id="draft-layer"
          onMouseDown={handleMouseDown}
          ref={canvas2Ref}
          style={{ zIndex: 1 }}
          className="canvas"
        />
      </div>
    </>
  );
}
