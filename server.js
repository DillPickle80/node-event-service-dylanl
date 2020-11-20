var eventServices = require("./eventServices");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World From Dylan! Go to /events to get the events!");
});

app.get("/events", (req, res) => {
  res.send(eventServices.events);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
