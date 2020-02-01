const express = require("express");
var cors = require("cors");
const socketIo = require("socket.io");
const getTempAndEmit = require("./getTemp");

const app = express();
const port = 8080;
let interval;

// app.use(express.static("dist"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const server = app.listen(port, () => {
  console.log("listening on %d", port);
});

const io = socketIo.listen(server);

io.on("connection", socket => {
  console.log("new client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getTempAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});
