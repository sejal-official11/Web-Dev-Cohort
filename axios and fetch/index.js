import axios from "./node_modules/axios";
// import { default as axios } from './node_modules/axios';

// import express from 'express';

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello");
// })

// app.listen(3000);

// import axios from 'axios';

//  function main() {
//     fetch('https://dummyjson.com/todos', {
// method: "POST"})
//     .then(async response => {
//         const json = await response.json();
//         console.log(json.todos.length);
//     })
// }
 
// async function main() {
//    const response = await fetch('https://dummyjson.com/todos')
//    const json = await response.json();
//    console.log(json.todos.length);
// }

function main() {
  const response = axios.get("https://dummyjson.com/todos");
  console.log(response.data.todos.length);
}

main();
