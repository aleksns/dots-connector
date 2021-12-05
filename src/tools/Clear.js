import React from "react";
import "../App.css";

export default function Clear(props) {
  const { clearAll } = props;

  return (
    <div className="container-with-border wrapper-clear">
      <button
        className="btn btn-clear btn-clear-png"
        onClick={clearAll}
      ></button>
    </div>
  );
}
