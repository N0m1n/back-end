import express from "express";
import cors from "cors";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

const user = [{ name: "Nasaa", age: 23 }];

app.get("/user", (request, response) => {
  response.json(user);
});

app.post("/user", (request, response) => {
  user.push(request.body);
  console.log(user);

  response.send(user);
});

app.delete("/user", (request, response) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == "nomin") {
      user.splice(i, 1);
      break;
    }
  }
  response.send(user);
});

app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});
