const fs = require("fs");

// const user = {
//   name: "Sejal",
//   age: 24
// };

// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     return area;
//   }
//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }

//   destroy() {

//   }
// }

// const rect = new Rectangle(11, 4, "red");
// const area = rect.area();
// console.log(area);
// rect.paint();

// const date = new Date();
// console.log(date.getMonth());

// const map = new Map();
// map.set('name', "Alice");
// map.set('age', 24);
// console.log(map.get('name'));

// var str = "Sejal";

// console.log(str.toLocaleLowerCase());

// const today = new Date();
// console.log(today.getFullYear());
// console.log(today.getSeconds());

// function doAsyncOp(resolve) {
//   setTimeout(resolve, 3000);
//   console.log("setTimeout called");
// }

// function setTimeoutPromisified() {
//   return new Promise(doAsyncOp);
// }

// let p = setTimeoutPromisified();
// function callback() {
//   console.log("3 seconds have passed, callback called");
// }

// p.then(callback);

// function promisified(resolve) {
//     let c = 0;
//     for(let i = 0; i < 1000000000; i++){
//         c++;
//     }
//     resolve();

// }
// const p = new Promise(promisified);

// function callback(){
//     console.log("Callback called");
// }

// p.then(callback);

// function setTimeoutPromisified() {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, 1000);
//   });
// }

// function callback() {
//   console.log("Hi");
//   setTimeout(callback1,3000);
// }

// function callback1() {
//   console.log("Hello");
//   setTimeout(callback2,5000);
// }

// function callback2() {
//   console.log("Hello there");
// }

// setTimeoutPromisified(1000).then(callback)

// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("Hello");
//     setTimeout(function () {
//       console.log("Hello There");
//     });
//   }, 3000);
// }, 1000);

// function setTimeoutPromisified(duration){
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   })
// }

// async function solve(){
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("hi there");
// }

//   solve();

function readFileAsync() {
  return new Promise(function (resolve) {
    fs.readFile("dsksdkj.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("File has been read");
  })
  .catch(function (e) {
    console.log(e);
  });
