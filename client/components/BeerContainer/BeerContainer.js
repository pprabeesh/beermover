import React from "react";
import "./BeerContainer.css";

const BeerContainer = props => {
  const { container, currentTemps } = props;
  const containerData = currentTemps.find(
    currentTemp => currentTemp.id === container.name
  );

  let notify = false;
  let temperature = "";
  if (containerData) {
    temperature = containerData.temperature;
    notify = temperature > container.maxTemp || temperature < container.minTemp;
  }
  return (
    <div className={` item ${notify ? "notify" : ""}`}>
      <div className="data"> {container.name}</div>
      <div className="data">
        {temperature || temperature === 0 ? `${temperature}°C` : ""}
      </div>
    </div>
  );
};

export default BeerContainer;
