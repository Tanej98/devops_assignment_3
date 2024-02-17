// import express framework
const express = require("express");

// initialize a express application
let app = express();

// define a basic route
app.get("/", function (req, res) {
  res.send("Hello from nodejs application from pod " + process.env.MY_POD_NAME);
});

// start the server at port 3000
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
