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

// function logName() {
//     console.log("Hello");
// }

// setTimeout(logName, 3000);

// function callback(){
//     console.log("Done");
// }

// let p = setTimeoutPromisified(3000).then(callback); // return object of promise class
// console.log(p);

// function setTimeoutPromisified(){
//     let d = new Promise((res, resp) => (console.log("Hi")));
//     return d;
// }

// promisified version of settimeout

// function setTimeoutPromisified(ms) {
//   let p = new Promise((resolve) => setTimeout(resolve, ms));
//   return p;
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// function random(){

// }
// function callback() {
//     console.log("Hello");
// }

// let p = new Promise(random);
// console.log(p);
// p.then(callback);

class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolve();
    });
  }
  then(callback) {
    this.resolve = callback;
  }
}

function readFile(resolve) {
  
  setTimeout(() => {
    console.log("callback setTimeout called");
  }, 3000);
}
function setTimeoutPromisified() {
  return new Promise2(readFile);
}


let p = setTimeoutPromisified();

function callback(){
    console.log("callback has been called");
}

p.then(callback);

console.log(p);