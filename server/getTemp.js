const axios = require("axios");

const CONTAINERS = require("./constants");

const getTempAndEmit = async socket => {
  try {
    const reqs = [];
    CONTAINERS.map((container, index) => {
      reqs[
        index
      ] = `https://temperature-sensor-service.herokuapp.com/sensor/${container.name}`;
    });
    const responses = await axios.all(reqs.map(req => axios.get(req)));
    const res = responses.map(response => response.data);

    socket.emit("FromAPI", res);
  } catch (error) {
    console.error(`Error: ${error.code}`, error);
  }
};

module.exports = getTempAndEmit;
