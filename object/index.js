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

var carts = [
    {
        id: 1,
        name: "RAM Corsair 16gb",
        type: "hardware",
        price: 1250000,
        brand: "Corsair"
    },
    {
        id: 2,
        name: "Keyboard RGB",
        type: "hardware",
        price: 150000,
        brand: "Logitech"
    },
    {
        id: 3,
        name: "Samsung A50",
        type: "hardware",
        price: 5750000,
        brand: "Samsung"
    }
]
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

function getCarts(carts) {
    console.log("Carts : ");
    for (var i = 0; i < carts.length; i++) {
        console.log(carts[i].id + ". " + carts[i].name + ", Rp. " + carts[i].price);
    }
}
getCarts(carts)