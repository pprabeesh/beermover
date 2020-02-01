import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./Dashboard.css";
import { CONTAINERS } from "../../constants";
import BeerContainer from "../BeerContainer/BeerContainer";

const socket = socketIOClient("http://localhost:8080");

const Dashboard = () => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    socket.on("FromAPI", data => {
      setTemp([...data]);
    });
  }, []);

  return (
    <div className="container">
      {CONTAINERS.map(container => (
        <BeerContainer container={container} currentTemps={temp} />
      ))}
    </div>
  );
};

export default Dashboard;
