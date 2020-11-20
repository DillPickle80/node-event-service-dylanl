// // var http = require("http");
// var http = require("express");
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello Dylan! :)\n");
//   })
//   .listen(8081);

// console.log("Server running at http://127.0.0.1:8081/");

const events = [
  { title: "Remise officielle TP2", date: "2020-11-16" },
  { title: "Remise réelle TP2", date: "2020-11-20" },
  { title: "Examen théorique", date: "2020-11-20" },
  { title: "Pratique", date: "2020-11-23" },
];

function getEvents() {
  console.log(events);
  return events;
}
getEvents();
