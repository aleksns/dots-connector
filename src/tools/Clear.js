import React from "react";
import "../App.css";

export default function Clear(props) {
  const { clearAll } = props;

  return (
    <>
      <button
        className="btn btn-clear"
        style={{ width: "40px", height: "40px" }}
        onClick={clearAll}
      ></button>
    </>
  );
}
