// var, let, const

// Declare => membuat sebuah variable
// Initialisation => memasukkan value ke dalam variable
// Reassign  => assign ulang atau memasukkan nilai lain ke dalam variable yg sudah memiliki nilai

// ES5
// console.log(angka);
// var angka = 10;
// Hoisting : pengangkatan awal

// ES6
// console.log(angka)
// let angka = 10;

// let pi = 3.14; //declare
// pi = 10; //reassign

// const pi = 3.14;
// console.log(pi)

// =================================================================

// template literal

// var kata1 = "saya";
// var kata2 = "sudah";
// var kata3 = "makan";

// ES6
// console.log(`${kata1} ${kata2} ${kata3}.`)

// ================================================================

// arrow function

// ES5
// Declaration
// function hello(){
//     console.log("Met pagi.")
// }
// hello()

// Expression
// let hello = function(){
//     console.log("Met pagi.")
// }
// hello()

// ES6
// Arrow
// const hello = () => {
//     console.log("Met pagi.")
// }
// hello()

// const checkGanjilGenap = function(num){
//     if(num %2 === 0){
//         return "Genap"
//     } else {
//         return "Ganjil"
//     }
// }

// const checkGanjilGenap = num => num % 2 === 0 ? "Genap" : "Ganjil";

// console.log(checkGanjilGenap(5))

//======================================================================

// destructuring array and object

let items = ["Samsung A59", "laptop", 500000];

// ES5
// let name = items[0];
// let type = items[1];
// let price = items[2];

//ES6
let [name, type, price] = items
console.log(name, type, price);


// high order function