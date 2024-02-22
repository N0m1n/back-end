import express from "express";

// const { log } = require("console");
// const http = require("http");

// http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-type", "text/html");
//   response.end("<h1>Hello World </h1>");
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

const port = 8000;
const app = express();

const arr = [
  {
    name: "davaa",
    age: "20",
    lastName: "Garig",
    id: 1,
  },
];

// app.get("/", (request, response) => {
//   response.send("Hello server dr huselt irlee");
// });

// app.get("/api", (request, response) => {
//   response.json({ name: "Nomin" });
// });

app.get("/", (request, response) => {
  response.json(arr);
  response.statusCode = 200;
});

app.post("/", (request, response) => {
  arr.push({ name: "Mygmar", ge: "20", lastName: "Garig", id: 2 });
  response.send(arr);
});

app.delete("/", (request, response) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == 1) {
      arr.splice(i, 1);
      break;
    }
  }
  response.send(arr);
});

// app.post(port, () => {
//   console.log(`ene port dr aslaa http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`ene port dr aslaa http://localhost:${port}`);
});
