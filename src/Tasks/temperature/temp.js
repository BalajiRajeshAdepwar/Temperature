

import React, { useState } from "react";
import "./temp.css";

const Temp = () => {
  const [temperature, setTemperature] = useState(10);

  const handleIncrease = () => {
    if (temperature < 100) setTemperature(temperature + 1);
  };

  const handleDecrease = () => {
    if (temperature > -50) setTemperature(temperature - 1);
  };

  let bgColor = "green";
  if (temperature < 0) bgColor = "iceblue";
  else if (temperature > 15) bgColor = "red";

  return (
    <div className="app-container">
      <div className={`temperature-display ${bgColor}`}>
        <div className="temperature-circle">{temperature}°C</div>
        <div className="buttons">
          <button className="btn" onClick={handleDecrease}>
            -
          </button>
          <button className="btn" onClick={handleIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Temp;
