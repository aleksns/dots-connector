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
    <div className="container-with-border">
      <div className="wrapper-num-of-lines">
        <h4>Number of Dots to Connect: {numberOfDotsToConnect}</h4>
        <nav>
          <ul>
            <li style={{ borderRadius: "2px" }}>
              <label>{"▼"}</label>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <option
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
      </div>
    </div>
  );
}
