// Pilar Utama OOP

// 1. Inheritance
// 2. Polymorphism
// 3. Encapsulation
// 4. Abstraction

//===============================================

// 1. Inheritance

// Parent class

class Vehicle {
    constructor(name, type, cc){
        this.name = name;
        this.type = type;
        this.cc = cc;
    }
}

// Child class

class Sedan extends Vehicle {
    constructor(name, type, cc, nitro){
        super(name, type, cc);
        this.nitro = nitro;
    }
}

class Pickup extends Vehicle {
    constructor(name, type, cc, box){
        super(name, type, cc);
        this.box = box;
    }
}

class SUV extends Vehicle {
    constructor(name, type, cc, wheel){
        super(name, type, cc);
        this.wheel = wheel;
    }
}

const civic = new Sedan("Civic 2021","sedan",1500,true);
const colt = new Pickup("Colt Pickup","pickup", 2500,1);
const tiguan = new SUV("Tiguan","suv",5000,"4wd");

// console.log(civic)
// console.log(colt)
// console.log(tiguan)

// FACTORY CLASS
// hanya fokus ke dalam method

class Showroom {
    constructor(rooms){
        this.rooms = rooms;
    }
    showVehicles(){
        console.log("Showroom vehicles :")
        this.rooms.forEach((room,i) => {
            // Destructuring object
            let {name, type, cc} = room;
            console.log(`${i+1}. ${name}, type: ${type}, cc: ${cc}`)
        })
    }
    // addVehicle(vehicle){
    //     this.rooms.push(vehicle)
    // }
    addVehicle(name, type, cc){
        switch (type){
            case 'sedan':
                this.rooms.push(new Sedan(name, type, cc, true))
                break;
            case 'pickup':
                this.rooms.push(new Pickup(name, type, cc, 1))
                break;
            case 'suv':
                this.rooms.push(new SUV(name, type, cc, "4wd"))
                break;
        }
    }

    deleteVehicle(vehicle){
        this.rooms = this.rooms.filter(room => room.name !== vehicle)
    }
}

const showroom = new Showroom([]);
showroom.addVehicle("Suzuki Karimun","sedan",1500,false)
showroom.showVehicles()
// showroom.addVehicle(civic);
// showroom.addVehicle(colt);
// showroom.addVehicle(tiguan);
// showroom.deleteVehicle("Colt Pickup")
// showroom.showVehicles()