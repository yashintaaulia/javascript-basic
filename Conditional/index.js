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

var n = 5;

if (n % 2 === 1) {
    var temp = '';

    for (var i = 0; i < n; i++){
        if (i % 2 === 0) {
            temp += "#"
    } else {
            temp += "@"
        }
    }
    console.log(temp);
} else {
    console.log("Angka harus ganjil")
}