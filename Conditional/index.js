// var angka = "sepuluh";
// if (angka === "sepuluh") {
//     console.log("angka sepuluh");
// } else {
//     console.log("angka selain seuluh");
// }

// var beverages = "tea";
// var nama = "Yashinta";
// var result = nama + ", kamu pilih ";

// switch (beverages) {
//     case "coffee":
//         result = result + beverages;
//         break;
//     case "tea":
//         result = result + beverages;
//         break;
// }
// // console.log(result);

// var angka = 5;

// if(angka % 2 === 0) {
//     console.log(angka + " adalah Genap")
// }else{
// //     console.log(angka + " adalah Ganjil")
// // }

// var berat = 75;

// if(berat > 100){
//     console.log("obesitas")
// }else if(berat <= 100 && berat > 80){
//     console.log("gemuk")
// }else if(berat <= 80 && berat > 65){
//     console.log("ideal")
// }else if(berat <= 65 && berat > 50){
//     console.log("kurus")
// }else if(berat <= 50 && berat >= 0){
//     console.log("sangat kurus")
// }else{
//     console.log("Masukkan berat yang benar. Trims")
// }

// var book = "yyy";
// var total = 100;
// var name = "Yashinta"
// var totalBayar;

// switch (book.toLowerCase()){
//     case "coding":
//         if (total >= 50000) {
//             totalBayar = total - (total * 0.1)
//         } else {
//             totalBayar = total - (total * 0.05)
//         }
//         console.log(name + ", membayar Rp. " + totalBayar);
//         break;
//     case "cooking":
//         if (total >= 50000) {
//             totalBayar = total - (total * 0.05)
//         }else {
//             totalBayar = total - (total * 0.025)
//         }
//         console.log(name + ", membayar Rp. " + totalBayar);
//         break;
// //     default:
// //         console.log("Masukkan buku yang benar, trims")
// // }

// var level = 7;
// var access = "public"

// switch (access.toLowerCase()) {
//     case "":
//         console.log("Input Access")
//         break;
//     case "publik":
//         if (level < 5) {
//             console.log("Public di bawah 5")
//         } else if (level > 5) {
//             console.log("Public di atas 5")
//         } else if (level == 5) {
//             console.log("Public five")
//         }
//         break;
//     case "private":
//         if (level <5) {
//             console.log("Private di bawah 5")
//         } else if (level > 5) {
//             console.log("Private di atas 5")
//         } else if (level == 5) {
//             console.log("Private five")
//         }
//         break;
//     case "protected":
//         if (level <5) {
//             console.log("Protected di bawah 5")
//         } else if (level > 5) {
//             console.log("Protected di atas 5")
//         } else if (level == 5) {
//             console.log("Protected five")
//         }
//         break;
//     default:
//         console.log("Access is not defined")
// // }
// for (var i = 1; i < 11; i++) {
//     if(i % 2 === 0) {
//         console.log(i + " adalah Genap")
//     } else {
//         console.log(i + " adalah Ganjil")
//     }
// }
// var str = "sayur bayam";
// for (var i = 0 ; i < str.length; i++) {
//     console.log(str[i].toUpperCase())
// }
// var n = 5;
// var temp = '';

// for(var i =1; i <=n; i++){
//     temp = temp + i;
// }
// console.log(temp);

// var n = 5;

// if (n % 2 === 1) {
//     var temp = '';

//     for (var i = 0; i < n; i++){
//         if (i % 2 === 0) {
//             temp += "#"
//     } else {
//             temp += "@"
//         }
//     }
//     console.log(temp);
// } else {
//     console.log("Angka harus ganjil")
// }

// var kata = "xaxbaxcz"
// var flagX = 0;

// for (var i = 0; i < kata.length; i++) {
//     if (kata[i] === 'x'){
//         flagX++;
//     }
// }
// console.log("Jumlah 'x' = " + flagX + ".")

// var flag = false;
// var str = "abcdexfgh"

// for (var i = 0; i <str.length; i++){
//     if (Str[i] === 'x'){
//         flag = true;
//     }
// }
// if (flag === true){
//     console.log("Huruf x ditemukan")
// }else{
//     console.log("Huruf x tidak ditemukan")
// }

/**
 * STUDY CASE 7
 * 
 * cek apakah jumlah 'x' dan 'o' sama banyaknya
 * 
 * contoh:
 * var XO = "xoxoxxooxo"
 * Result:
 * Jumlah 'x' dan 'o' sama.
 * 
 * var XO = "xxo"
 * Result:
 * Jumlah 'x' = 2.
 * Jumlah 'o' = 1.
 */

// var XO = "xoxoxooxo"
// var countX = 0;
// var countO = 0;

// for (var i = 0; i < XO.length; i++){
//     if (XO[i] === 'x') {
//         countX++
//     }else if (XO[i] === 'o') {
//         countO++
//     }
// }   
// if (countX === countO) {
//     console.log("Jumlah 'x' dan 'o' sama.")
// }else{
//     console.log("Jumlah 'x' = " + countX + ".")
//     console.log("Jumlah 'o' = " + countO + ".")
// }
/**
 * STUDY CASE 8
 * 
 * buat kotak persegi
 * contoh:
 * n = 5;
 * result:
 * #####
 * #####
 * #####
 * #####
 * #####
 */

// var n = 5;
// var m = 3;
// var temp = ''

// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < m; j++) {
//         temp += '#'
//     }
//     console.log(temp);
//     temp = '';
// }

/**
 * STUDY CASE 9
 * 
 * buat kotak sperti berikut
 * contoh:
 * n = 5
 * 
 * Result:
 * #####
 * @@@@@
 * #####
 * @@@@@
 * #####
 */
// var n = 5;
// var temp = ""

// for (var i = 0; i < n; i++){
//     if (i % 2 === 0) {
//         for (var j = 0; j < n; j++){
//             temp += "#"
//         }
//     }else {
//         for (var j = 0; j < n; j++){
//             temp += "@"
//         }
//     }
// console.log(temp);
// temp = ""
// }

/**
 * STUDY CASE 10
 * 
 * BUAT SEGITIGA BERIKUT:
 * 
 * contoh:
 * n = 5
 * 
 * Result:
 * #
 * ##
 * ###
 * ####
 * #####
 */

// var n = 5;
// var temp = ''

// for (var i = 0; i < n; i++){
//     for(var j = 0; j <= i; j++){
//         temp += j+1
//     }
//     console.log(temp)
//     temp = ""
// }

// ARRAY

// var numbers = [100, 50, 75];

// console.log(numbers);

/**
 * STUDY CASE (ARRAY)
 * 
 * Buatlah nilai rata-rata dari sebuah array
 * 
 * contoh:
 * var data = [1.5, 0.75, 2.25, 1.75, 1]
 * Result:
 * Mean : 1.45
 */

// var data = [1.5, 0.75, 2.25, 1.75, 1]
// var total = 0;

// for (var i = 0; i < data.length; i++){
//     total += data[i]
// }
// var mean = total / data.length
// console.log("Mean : ", + mean)

/**
 * STUDY CASE 2
 * 
 * kelompokkan sebuah angka yang lebih dari 1
 * contoh:
 * var data [1.5, 0.75, 2.25, 1.75, 1]
 * result:
 * [1.5,2.25, 1.75]
 */

// var data = [1.5, 0.75, 2.25, 1.75, 1]
// var arrResult = [];

// for (var i = 0; i < data.length; i++){
//     if(data[i] > 1) {
//         arrResult.push(data[i])
//     }
// }
// console.log(arrResult)

/**
 * STUDY CASE 3
 * 
 * pecah kalimat menjadi beberapa kata
 * 
 * contoh:
 * 
 * var pantun = "makan nasi bayarnya pake paku"
 * 
 * result:
 * ["makan","nasi","bayarnya","pake","paku"]
 * 
 */

// var pantun = "makan nasi bayarnya pake paku";
// var temp = "";
// var arrResult = [];

// for (var i = 0; i < pantun.length; i++) {
//     if (pantun[i] !== ' ') {
//         temp += pantun[i];
//     } else {
//         arrResult.push(temp);
//         temp = ""
//     }
//     if (i === pantun.length - 1) {
//         arrResult.push(temp);
//         temp = ""
//     }
// }
// console.log(arrResult)

/**
 * STUDY CASE 
 * Cari pasangan terbesar dari string berikut:
 * contoh:
 * var input = "5279312"
 * ["52","27","79","93","31","12"]
 * 
 * Result:
 * 93
 */

// var input = "5279312";
// var temp = "";
// var arrResult = [];

// for (var i = 0; i < input.length -1 ; i++){
//     temp = input[i] + input[i+1];
//     arrResult.push(Number(temp));
//     temp = ''
// }
// // console.log(arrResult)

// var currentScore = arrResult[0]

// for (var i = 0; i < arrResult.length; i++){
//     if (currentScore < arrResult[i]) {
//         currentScore = arrResult[i]
//     }
// }
// console.log(currentScore)

