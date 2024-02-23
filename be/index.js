import express from "express";
import cors from "cors";
import fs from "fs";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

// const user = [{ name: "Nasaa", age: 23 }];

app.get("/user", (request, response) => {
  response.json(user);
});

// app.post("/user", (request, response) => {
//   user.push(request.body);
//   console.log(user);
//   response.send(user);
// });

// app.delete("/user", (request, response) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name == "nomin") {
//       user.splice(i, 1);
//       break;
//     }
//   }
//   response.send(user);
// });

app.post("/user", (request, response) => {
  const addUser = request.body;
  const user = JSON.parse(fs.readFileSync("database.json"));

  user.push(addUser);

  fs.writeFile("database.json", JSON.stringify(user), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });

  response.send(user);
});

app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});
