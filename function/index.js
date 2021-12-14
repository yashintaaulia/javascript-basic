// Function

// function checkGanjilGenap(angka) {
//     if (angka % 2 === 0) {
//         console.log("Genap")
//     } else {
//         console.log("Ganjil")
//     }
// }
// // Invoke function
// checkGanjilGenap(5)
// checkGanjilGenap(7)
// checkGanjilGenap(10)
// checkGanjilGenap(12)
// checkGanjilGenap(17)

// var input = "14296873920";

// function numberToArray(input) {
//     var tempNum = '';
//     var result = []
//     for (var i = 0; i < input.length - 1; i++) {
//         tempNum = input[i] + input[i+1]
//         result.push(Number(tempNum));
//         tempNum = ''
//     }
//     return result
// }
// function findMaxScore(input) {
//     var result = numberToArray(input)

//     var currentScore = result[0]
//     for (var i = 0; i < result.length; i++) {
//         if (currentScore < result[i]) {
//             currentScore = result[i]
//         }
//     }
//     console.log(currentScore)
// }
// findMaxScore(input)

/**
 * STUDY CASE
 * 
 * buatlah sebuah calculator yang memiliki sebuah function
 * - jumlah(a,b)    => menjumlahkan 2 angka
 * - kurang(a,b)    => mengurangkan 2 angka
 * - kali(a,b)      => mengalikan 2 angka
 * - bagi(a,b)      => membagikan 2 angka
 * 
 * - calculator(a,opr,b)   => sebagai fungsi utama atau main function
 * - dimana mengandung ke 4 function di atas
 * 
 * contoh:
 * calculator(5,'+',3) // 8
 * calculator(5,'-',3) // 2
 * calculator(5,'x',3) // 15
 * calculator(5,'/',3) // 1.66
 * 
 * calculator(5,'#',3) // Masukkan operator yang benar, trims
 */


function jumlah(a,b){
    return a + b;
}
function kurang(a,b){
    return a - b;
}
function kali(a,b){
    return a * b;
}
function bagi(a,b){
    return a / b;
}

function calculator(a,opr,b) {
    switch (opr) {
        case '+':
            var penjumlahan = jumlah(a,b)
            console.log(penjumlahan)
            break;
        case '-':
            var pengurangan = kurang(a,b)
            console.log(pengurangan)
            break;
        case '*':
            var perkalian = kali(a,b)
            console.log(perkalian)
            break;
        case '/':
            var pembagian = bagi(a,b)
            console.log(pembagian)
        default:
            console.log("Masukkan operator yang benar")
    }
}
calculator (5,'+',3)