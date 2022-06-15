// // JavaScript Objects and Prototypes

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

// // //////////////////////////
// // Function Instantiation //
// // // ///////////////////////

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

// //////////////////////////////////////////////
// Function Instantiation with Shared Methods //
// //////////////////////////////////////////////

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

// ^^^ just copied :/ ^^^//













// //started paying attention at 4:00pm :/




















// console.log("==========================");
// // Object.create

// let parent = {
//   firstName: "Margaret",
//   heritage: "Irish",
//   age: 55,
// };

// let child = Object.create(parent);
// // let child = {}
// child.firsName = "Seamus";
// child.lastName = "O'Riley";
// child.age = 25;

// console.log(child);
// console.log(child.firsName);
// console.log(child.lastName);
// console.log(child.heritage);

// let parentObj = {
//     name: 'Hubert',
//     getInfo: function(){console.log(`Hello ${this.name}`)}
// }

// let childObj = Object.create(parentObj);

// childObj.name = 'William'
// console.log(childObj)
// childObj.getInfo()




// did this up there ^^^

const animalMethods = {
  eat: function (amount) {
    this.energy += amount;
    console.log(`${this.name} is eating`);
  },
  sleep: function (amount) {
    this.energy += amount;
    console.log(`${this.name} is sleeping`);
  },
  play: function (amount) {
    this.energy -= amount;
    console.log(`${this.name} is playing`);
  },
};


// vvv this function makes instance of Animal objec that runs animalMethods
function Animal(name, energy) {
    let animal = Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;

    return animal
}


let buddy = Animal('Buddy', 10)
buddy.eat(10)
buddy.play(15)
buddy.sleep(25)
console.log(buddy)

let leo = Animal('Leo', 10)
leo.eat(20)
leo.play(15)
leo.sleep(10)
console.log(leo)

console.log(leo.eat === buddy.eat)

// instead of making a methods function and then running it in another function:
// create a PROTOTYPE

