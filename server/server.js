require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log("listening on %d", port);
});
