// Object

// var student = {
//     name: "Yashinta",
//     gpa: 5.1,
//     isGraduated: true,
//     "able to code" : "yes",
//     skills : [
//         "js","c"
//     ],
//     profile: {
//         city: "London"
//     }
// }
// console.log(student.name);
// console.log(student["able to code"])

// for(var key in student) {
//     console.log(key)
// }

// Array of Object

// var carts = [
//     {
//         id: 1,
//         name: "RAM Corsair 16gb",
//         type: "hardware",
//         price: 1250000,
//         brand: "Corsair"
//     },
//     {
//         id: 2,
//         name: "Keyboard RGB",
//         type: "hardware",
//         price: 150000,
//         brand: "Logitech"
//     },
//     {
//         id: 3,
//         name: "Samsung A50",
//         type: "hardware",
//         price: 5750000,
//         brand: "Samsung"
//     }

// console.log(carts)

/**
 * STUDY CASE 1
 *
 * But sebuah function untuk mengubah object di atas
 * Menjadi tampilan list yang mudah di baca oleh user
 *
 * Carts:
 * 1. RAM Corsair 16gb, Rp 12500000
 * 2. Keyboard RGB, Rp 150000
 * 3. Samsung A50, Rp 5750000
 */

// function getCarts(carts) {
//     console.log("Carts : ");
//     for (var i = 0; i < carts.length; i++) {
//         console.log(carts[i].id + ". " + carts[i].name + ", Rp. " + carts[i].price);
//     }
// }
// getCarts(carts)

/**
 * STUDY CASE 2
 *
 * Hitung jumlah huruf vokal dalam sebuah string
 * Contoh:
 * var str = "saya makan sayur asem lagi"
 *
 * Result:
 * {
 *  a: 7,
 *  i: 1,
 *  u: 1,
 *  e: 1,
 *  o: 0
 * }
 */

// function countVocal(str) {
//     var count = {
//         a: 0,
//         i: 0,
//         u: 0,
//         e: 0,
//         o: 0
//     }
//     for (var i = 0; i <str.length; i++){
//         if (str[i] === "a"){
//             count.a++;
//         } else if (str[i] === "i"){
//             count.i++;
//         } else if (str[i] === "u"){
//             count.u++;
//         } else if (str[i] === "e"){
//             count.e++;
//         } else if (str[i] === "o"){
//             count.o++;
//         }
//     }
//     return count
// }
// console.log(countVocal("saya makan sayur asem lagi"))

/**
 * STUDY CASE 3
 *
 * Dalam sebuah kelas, akan dipilih seorang ketua kelas dari beberapa suara
 *
 * Hitung jumlah vote dalam kelas tersebut jika hanya ada 3 nama
 *
 * Contoh:
 * var votes = ["Vincent", "Ncent", "Stella", "vinCEnt", "nCEnt", "SteLLa","Vincent"]
 *
 * Result:
 * {
 *      vincent: 3,
 *      ncent: 2,
 *      stella: 2
 * }
 */

// function countVote(votes){
//     var countFlag = {
//         vincent: 0,
//         ncent: 0,
//         stella: 0
//     }
//     for (var i = 0; i < votes.length; i++){
//         if(votes[i].toLowerCase() === "vincent") {
//             countFlag.vincent += 1;
//         } else if(votes[i].toLowerCase() === "ncent") {
//             countFlag.ncent += 1;
//         } else if(votes[i].toLowerCase() === "stella") {
//             countFlag.stella += 1;
//         }
//     }
//     return countFlag
// }
// // var votes = ["Vincent", "Ncent", "Stella", "vinCEnt", "nCEnt", "SteLLa","Vincent"]
// // console.log(countVote(votes))

// // jika lebih dari 3 nama atau tidak tahu berapa jumlah suara

// function countPeopleVote(arr){
//     var result = {};

//     for (var i =0; i<arr.length;i++) {
//         if (result[arr[i]] === undefined ) {
//             result[arr[i]] = 1;
//         }else {
//             result[arr[i]] += 1;
//         }
//     }
//     return result;
// }

// Study Case
// console.log(countPeopleVote(["james","jim","jake","james","john","john","james","jane"]))

/**
 * STUDY CASE 4
 *
 * Dalam sebuah kelas terdapat banyak suara untuk memilih siapa yang menjadi sekretaris
 * Tentukan nama dari pemenang dengan cara memilih dari yang paling banyak suaranya
 *
 * Buatlah 2 function dengan ketentuan berikut:
 * - countPeopleVote(arr)
 * + paramter berupa array berisi suara vote
 * + result yang dihasilkan berupa object
 *
 * - voteWinner(arr)
 * + parameter berupa array
 * + hasil result berupa string nama pemenang
 */
// function countPeopleVote(arr) {
//   var result = {};

//   for (var i = 0; i < arr.length; i++) {
//     if (result[arr[i]] === undefined) {
//       result[arr[i]] = 1;
//     } else {
//       result[arr[i]] += 1;
//     }
//   }
//   return result;
// }
// console.log(countPeopleVote(["james","jim","jake","james","john","john","james","jane"]))

// function voteWinner(arr) {
//   var objVotes = countPeopleVote(arr);
//   var currentScore = 0;
//   var winner;

//   if (arr.length !== 0) {
//     for (var key in objVotes) {
//       if (objVotes[key] > currentScore) {
//         currentScore = objVotes[key];
//         winner = key;
//       }
//     }
//     return winner;
//   } else {
//     return "Tidak ada suara."
//   }
// }
// console.log(
//   voteWinner(["james", "jim", "jake", "james", "john", "john", "james", "jane"])
// );
// console.log(voteWinner([]));

/**
 * STUDY CASE 5
 * 
 * Buatlah sebuah apps untuk to do list
 *
 * 1. Buat function -> viewTodos()
 * 
 * Result:
 * 1. [ ] Belajar object
 * 2. [X] Belajar function
 * 
 * 2. Buat function -> addTodo()
 * ex: addTodo("Task Name",1) -> 1 : done, 0 : in progress
 * 
 * 3. Buat function -> deleteTodo()
 * 
 * ex: deleteTodo(3) -> 3 adalah id task
 */