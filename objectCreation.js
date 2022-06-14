// JavaScript Objects - {property: value, etc.}

let person = {
    name: 'Tim',
    age: 22,
    favColor: 'blue'
}

// dot notation
console.log(person.name);
// bracket notation
console.log(person['name'])


let person2 = {
    name: 'Samantha',
    age: 23,
    languages: ['JavaScript', 'Python'],
    teams: {
        mlb: 'Nationals',
        nfl: 'Commanders'
    }
}


let person3 = {
    name: "Albert",
    printName: function(){console.log(`Hello my name is ${this.name}`)}
}


console.log(person3)
console.log(person3.printName)

person3.printName()

console.log('======================')


// JavaScript Objects and Prototypes

// let animal = {}
// animal.name = 'Buddy'
// animal.energy = 10

// animal.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating`)
// }
// animal.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping`)
// }
// animal.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing`)
// }


// animal.eat(10)
// animal.play(15)
// animal.sleep(25)
// console.log(animal)


////////////////////////////
// Function Instantiation //
////////////////////////////


// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
    
//     animal.eat = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating`)
//     }
//     animal.sleep = function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping`)
//     }
//     animal.play = function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing`)
//     }
//     return animal
// }


// let buddy = Animal('Buddy', 10)
// buddy.eat(10)
// buddy.play(15)
// buddy.sleep(25)
// console.log(buddy)

// let leo = Animal('Leo', 10)
// leo.eat(20)
// leo.play(15)
// leo.sleep(10)
// console.log(leo)


// console.log(leo.eat === buddy.eat)


////////////////////////////////////////////////
// Function Instantiation with Shared Methods //
////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing`)
//     }
// }


// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
    
//     animal.eat = animalMethods.eat
//     animal.sleep = animalMethods.sleep
//     animal.play = animalMethods.play
//     return animal
// }


// let buddy = Animal('Buddy', 10)
// buddy.eat(10)
// buddy.play(15)
// buddy.sleep(25)
// console.log(buddy)

// let leo = Animal('Leo', 10)
// leo.eat(20)
// leo.play(15)
// leo.sleep(10)
// console.log(leo)


// console.log(leo.eat === buddy.eat)

// console.log('==========================')
// // Object.create

// let parent = {
//     firstName: 'Margaret',
//     heritage: 'Irish',
//     age: 55
// }


// let child = Object.create(parent)
// // let child = {}
// child.firsName = 'Seamus'
// child.age = 25

// console.log(child);
// console.log(child.heritage);


// let parentObj = {
//     name: 'Hubert',
//     getInfo: function(){console.log(`Hello ${this.name}`)}
// }

// let childObj = Object.create(parentObj);

// childObj.name = 'Bill'
// console.log(childObj)
// childObj.getInfo()

// //////////////////////////////////////////////////////////////////
// // Function Instantiation with Shared Methods and Object.create //
// //////////////////////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating`)
//     },
//     sleep: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is sleeping`)
//     },
//     play: function(amount){
//         this.energy -= amount;
//         console.log(`${this.name} is playing`)
//     }
// }


// function Animal(name, energy){
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy

//     return animal
// }


// let buddy = Animal('Buddy', 10)
// buddy.eat(10)
// buddy.play(15)
// buddy.sleep(25)
// console.log(buddy)

// let leo = Animal('Leo', 10)
// leo.eat(20)
// leo.play(15)
// leo.sleep(10)
// console.log(leo)


// console.log(leo.eat === buddy.eat)

//////////////////////////////
// Prototypal Instantiation //
//////////////////////////////


// function Animal(name, energy){
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy
    
//     return animal
// }

// Animal.prototype.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing`)
// }

// let buddy = Animal('Buddy', 10)
// buddy.eat(10)
// buddy.play(15)
// buddy.sleep(25)
// console.log(buddy)

// let leo = Animal('Leo', 10)
// leo.eat(20)
// leo.play(15)
// leo.sleep(10)
// console.log(leo)


// console.log(Animal.prototype)

///////////////////////////////////
// Pseudoclassical Instantiation //
///////////////////////////////////

// Using the new keyword //

// function Animal(name, energy){
//     // let newObj = Object.create(Animal.prototype)
//     this.name = name
//     this.energy = energy
    
//     // return newObj
// }

// Animal.prototype.eat = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is eating`)
// }

// Animal.prototype.sleep = function(amount){
//     this.energy += amount;
//     console.log(`${this.name} is sleeping`)
// }

// Animal.prototype.play = function(amount){
//     this.energy -= amount;
//     console.log(`${this.name} is playing`)
// }

// let buddy = new Animal('Buddy', 10)
// buddy.eat(10)
// buddy.play(15)
// buddy.sleep(25)
// console.log(buddy)

// let leo = new Animal('Leo', 10)
// leo.eat(20)
// leo.play(15)
// leo.sleep(10)
// console.log(leo)

////////////////////////
// EcmaScript6 - 2015 //
////////////////////////


class Animal{
    constructor(name, energy){
        this.name = name
        this.energy = energy
    }
    eat(amount){
        this.energy += amount;
        console.log(`${this.name} is eating`)
    }
    sleep(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping`)
    }
    play(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing`)
    }
}


let buddy = new Animal('Buddy', 10)
buddy.eat(10)
buddy.play(15)
buddy.sleep(25)
console.log(buddy)

let leo = new Animal('Leo', 10)
leo.eat(20)
leo.play(15)
leo.sleep(10)
console.log(leo)

// Create new array

let myCoolArray = [2, 4, 6, 8, 10];

let myNewCoolArray = new Array();
console.log(myNewCoolArray)

