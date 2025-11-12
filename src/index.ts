// // let x = 1;
// // console.log(x);

// // let x: number | string = 1;

// // console.log(x);

// // x = 'sejal';
// // console.log(x);

// // function greet(firstName: String) {
// //     console.log("Hello " + firstName);
// // }

// // greet("Sejal");

// // function sum(a: number, b: number): void {
// //     let num: number = a+b;
// //     console.log(num);
// // }

// // let ans = sum(3, 5);
// // console.log(ans);

// // function isLegal(age: number) {
// //     if(age > 18) return true;
// //     else return false;
// // }

// // console.log(isLegal(12));

// // function after1sec(fn: () => void){
// //     setTimeout(fn, 1000);
// // }

// // after1sec(function(){
// //     console.log("Hi there");
// // })

// function websocketHandler(anotherFn: (a: string) => void) {
//   setTimeout(anotherFn, 1000);
// }

// function greet(name: string) {
//     console.log("Hello " + name);
// }


// function newFun() {
//   console.log("Hello the new");
//   return 1;
// }

// websocketHandler(greet);





let greet = () => {
  console.log("hi there");
}

greet();