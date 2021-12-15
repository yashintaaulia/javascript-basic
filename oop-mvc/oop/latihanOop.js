/**
 * TODO APPS
 *
 * Buatlah sebuah aplikasi todo apps dengan menggunakan konsep OOP.
 *
 * TASK 1
 * Buat class Todo dengan attributes berikut:
 * - id
 * -`task
 * - status
 *
 * TASK 2
 * Buat class TaskBoard dengan attributes:
 * - boards
 * + merupakan array yang berisi Todo list
 *
 * Buat method seperti berikut:
 * - showTodos()
 * + menampilkan list Todos seperti berikut:
 * Todo list:
 * 1. [X] Belajar OOP
 * 2. [ ] Kerjain tugas
 *
 * - addTodo(task)
 * + untuk menambahkan task ke dalam todo list
 *
 * - deleteTodo(id)
 * + menghapus task dari id
 *
 * - updateTodo(id, task)
 * - untuk edit task berdasarkan dari id nya
 *
 * - changeStatus(id)
 * + mengubah status dari true menjadi false, dan sebaliknya
 */

// JAWABAN
// let todos = {
//     id: 1,
//     task: ["Belajar OOP", "Kerjain tugas",],
//     status: false,

//     showTodos: function(){
//         console.log("To Do List: ")
//         this.task.forEach((task) => {
//             console.log()
//         });
//     },
//     addTodo: function(){
//         console.log("Add To Do")
//         this.status = true;
//     },
//     deleteTodo: function(){
//         console.log("Delete To Do")
//         this.status = true;
//     },
//     updateTodo: function(){
//         console.log("Update To Do")
//         this.status = true;
//     },
//     changeStatus: function(){
//         console.log("Change")
//     }
// }

class Todo {
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status;
    }
}

class TaskBoard {
    constructor(boards) {
        this.boards = boards || [];
    }
    showTodos(){
        console.log(`Todo list: `)
        this.boards.forEach(board => {
            let {id, task, status} = board
            // !status artinya status === false
            if(!status){
                console.log(`${id}. [ ] ${task}.`)
            }else {
                console.log(`${id}. [x] ${task}.`)
            }
        })

    }
    addTodo(task) {
        let id;
        if(this.boards.length === 0) {
            id = 1;
        } else {
            id = this.boards[this.boards.length-1].id +1;
        }

        this.boards.push(new Todo(id, task, false))
        console.log(`Task '${task}' created.`)
    }
    deleteTodo(id){

    }
    updateTodo(id, task){

    }
    changeStatus(id){

    }
}

const taskboard = new TaskBoard()
taskboard.addTodo("Explore OOP")
taskboard.addTodo("Explore MVC")
taskboard.showTodos()