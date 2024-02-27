import express from "express";
import cors from "cors";
import fs from "fs";

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/user", (request, response) => {
  const user = JSON.parse(fs.readFileSync("database.json"));
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

app.delete("/user/:id", (request, response) => {
  const { id } = request.params;

  try {
    const previousUser = fs.readFileSync("database.json");
    user = JSON.parse(previousUser);

    user = user.filter((el) => el.id !== id);

    fs.writeFile("database.json", JSON.stringify(user));

    response.json(user);
  } catch (error) {
    console.log("Error:", error);
  }
});

app.put("/user/:index", (request, response) => {
  const indexToEdit = request.params.index;
  const newData = request.body; // Assuming the request body contains the new data

  // Check if the index is valid
  if (indexToEdit < 0 || indexToEdit >= users.length) {
    return response.status(400).json({ error: "Invalid index" });
  }

  // Update the user at the specified index with the new data
  users[indexToEdit] = newData;

  // Respond with the updated data
  response.json(users);
});

app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});
