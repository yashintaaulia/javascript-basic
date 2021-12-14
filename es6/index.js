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

// let items = ["Samsung A59", "laptop", 500000];

// ES5
// let name = items[0];
// let type = items[1];
// let price = items[2];

//ES6
// let [name, type, price] = items
// console.log(name, type, price);

//Destructuring object
// const student = {
//     name: "James",
//     gpa: 3.21,
//     status: true
// }
// let {name, gpa, status} = student
// console.log(name, gpa, status)

//=====================================================================

// high order function
// .forEach, .map, .filter

//forEach
// const numbers = [3,2,5,7,10];
//ES5
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

//ES6
// numbers.forEach(number => {
//     console.log(number)
// })

//Map
//[9,4,25,49,100]

//ES5
// let squareNumbers = [];
// for (let i=0; i< numbers.length; i++){
//     squareNumbers.push(numbers[i] ** 2);
// }
// console.log(squareNumbers)
// ** artinya pangkat/power

//ES6
// let squareNumbers = numbers.map(number => number ** 2)

// console.log(squareNumbers)

// Filter
// Filter yg lebih dari sama dengan 5

//ES5
// let filterNumbers =[];
// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] >= 5){
//         filterNumbers.push(numbers[i])
//     }
// }
// console.log(filterNumbers)

//ES6
// let filterNumbers = numbers.filter(number => number >= 5)

// console.log(filterNumbers)