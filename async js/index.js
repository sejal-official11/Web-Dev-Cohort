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


function promisified(resolve) {
    let c = 0;
    for(let i = 0; i < 1000000000; i++){
        c++;
    }
    resolve();

}
const p = new Promise(promisified);

function callback(){
    console.log("Callback called");
}

p.then(callback);
