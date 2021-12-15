// OOP : Object Oriented Programming

let vehicle = {
    // attributes atau keys
    name: "Civic 2022",
    type: "sedan",
    cc: 1500,
    engine: false,
    tags: ["lcgc", "affordable",],
    // method
    startEngine: function(){
        console.log("Start Engine!")
        this.engine = true;
    },
    stopEngine: function(){
        console.log("Stop Engine!")
        this.engne = false;
    },
    identifySelf: function(){
        console.log(`${this.name}, type: ${this.type}, cc : ${this.cc}`)
    },
    showTags: function(){
        console.log("Vehicle tags: ")
        this.tags.forEach((tag, index) => {
            console.log(`${index+1}. ${tag}`)
        })
    }
}
// vehicle.startEngine();
// console.log(vehicle)
// vehicle.stopEngine();  
// vehicle.identifySelf();
// vehicle.showTags();

class Vehicle {
    constructor(name, type, cc){
        this.name = name;
        this.type = type;
        this.cc = cc
    }
}
// vehicle merupakan instansi/ instance of dari class Vehicle
let civic = new Vehicle("Civic 2022", "sedan",1500);
let colt = new Vehicle("Colt pickup", "pickup", 2500);
let tiguan = new Vehicle("Tiguan VW", "SUV", 5000)
console.log(civic);
console.log(colt);
console.log(tiguan);