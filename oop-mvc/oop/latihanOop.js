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
        this.boards = this.boards.filter(board => board.id !== id)

        console.log(`id ${id} has been deleted.`)

    }
    updateTodo(id, task){
        this.boards = this.boards.map(board => {
            if(board.id === id){
                board.task = task
            }
            return board
        })
        console.log(`id ${id} has been updated.`)
    }
    changeStatus(id){
        this.boards = this.boards.map(board => {
            if(board.id === id){
                this.status = !this.status
            }
            return board
        })

    }
}

const taskboard = new TaskBoard()
taskboard.addTodo("Explore OOP",true)
taskboard.addTodo("Explore MVC", false)
taskboard.addTodo("Kerjain tugas", false)
taskboard.deleteTodo(2)
taskboard.updateTodo(1, "Belajar JS")
taskboard.changeStatus(3)
taskboard.showTodos()