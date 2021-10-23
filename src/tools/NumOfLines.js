import React from "react";
import "../App.css";
import * as services from "../services/services";

const items = services.getNumberOfDotsToConnectVariants();

export default function NumOfLines(props) {
  const { numberOfDotsToConnect, setNumberOfDotsToConnect } = props;

  const handleNumberOfDotsToConnect = (e) => {
    let newValue = parseInt(e.target.value);
    setNumberOfDotsToConnect(newValue);
  };

  return (
    <>
      <h2>Number of Lines to Connect: {numberOfDotsToConnect}</h2>

      <nav className="tools">
        <ul>
          <li style={{ borderRadius: "5px" }}>
            <label>{"▼"}</label>
            <input type="checkbox" id="drop-1"></input>
            <ul>
              {items.map((item) => (
                <li>
                  <option
                    key={item.id}
                    value={item.value}
                    onClick={handleNumberOfDotsToConnect}
                  >
                    {item.id}
                  </option>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
