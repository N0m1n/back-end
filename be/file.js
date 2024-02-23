import fs from "fs";
import { log } from "util";

// folder uusgej bgaa

// fs.mkdir("test", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successful");
//   }
// });

// text file uusgeh
// fs.writeFileSync("text.txt", "pinecone");

// fs.writeFile("writefile.txt", " writefile", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successful");
//   }
// });

// data unshih
// const data = fs.readFileSync("text.txt");
// console.log(data.toString());

// fs.readFile("text.txt", (err, data) => console.log(data.toString()));

const data = { age: 18, name: "Bill" };
fs.writeFileSync("db.json", JSON.stringify(data));

const stringify = JSON.stringify(data);
const parse = JSON.parse(data);
console.log(stringify, "===", parse);
