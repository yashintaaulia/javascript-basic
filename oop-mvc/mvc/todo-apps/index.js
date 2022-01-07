// process.argv
// modul dari node js untuk mengambil input dari terminal

// file system
// modul dari node js untuk manipulasi atau mengakses file dari sistem kita

const command = process.argv[2];
const params = process.argv.slice(3)

switch (command){
    case 'show':
        console.log("Show")
        break;
    case 'add':
        console.log("Add")
        break;
    case 'delete':
        console.log("Delete")
        break;
    case "update":
        console.log("Update")
        break;
    case "changeStatus":
        console.log("ChangeStatus")
        break;
    default:
        console.log("Tolong masukkan command yang tepat.")
}

// const input = process.argv[2];
// const inputTambahan = process.argv.slice(3)
// jila tidak ada ./ dalam require, artinya mengimport langsung dari node.js
// const Todo = require('./todo')

// console.log(input);
// console.log(inputTambahan);
// console.log(Todo)
