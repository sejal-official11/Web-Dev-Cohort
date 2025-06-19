// import chalk from "chalk";

// function product() {
//       return 15*10;
// }

// const ans = product();

// console.log(ans);

// const path = require("path");

// console.log(path.join(__dirname , "index.js"));

// const fs = require("fs");

// function main(fileName){
//     fs.readFile(fileName, "utf-8", function(err, data){
//         let total = 0;
//         for(let i = 0; i < data.length; i++){
//             if(data[i] == " "){
//                 total++;
//             }
//         }
//         console.log(total);

//     })
// }

// main("sejal.txt");

//Count number of words in a file

// function main(fileName){
//     fs.readFile("sejal.txt", "utf-8", function(err, data){
//         let count = 0;
//         for(let i = 0; i < data.length; i++){
//             if(data[i] === " "){
//                 count++;
//             }
//         }
//         console.log(count+1);
//     })

// }

// main("Users/HP/OneDrive/Desktop/Web-Dev-Cohort/Backend/NodeJS/sejal.txt");

// main(process.argv[8]);

// const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-type": "text/html"});
//     res.end("Hello World");

// }).listen(8080);

// const { Command } = require("commander");
// const program = new Command();

// program
  // .name("count_Gaps")
//   .description("CLI to find spaces between in a file")
//   .version("1.0.0");

// program
//   .command("count")
//   .description("Split a file and display the number of strings/words in a file")
//   .argument("<file>", "file to split")
//   .action((file) => {
//     fs.readFile(file, "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const arrayLen = data.split("").length;
//         console.log(`This file has ${arrayLen} only`);
//       }
//     });
//   });

// program.parse();


// const str = "Hi! can we create a database today?"

// const text = str.split(2);
// console.log(text);

// let text = "How are you doing today?";
// const myArray = text.split(3);
// console.log(myArray);
// let word = myArray[1];
// console.log(word);











