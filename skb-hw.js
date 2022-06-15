/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    (°F − 32) × 5/9 = °C


    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
var toCelsius = (Fahrenheit) => {
  return (Fahrenheit - 32) * (5 / 9);
};

// let cTemp = toCelsius(32)
// console.log(cTemp)

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/
// const animalMethods = {
//     eat: function(amount){
//         this.energy += amount;
//         console.log(`${this.name} is eating`)
//     },
const userMethods = {
  changePassword: function (oldPassword, newPassword) {
    if (this.password == oldPassword) {
      this.password == newPassword;
      console.log(`${this.username}'s password changed to ${newPassword}`);
    }
  },
};

function User(username, password) {
  let user = {};
  user.username = username;
  user.password = password;
  user.changePassword = userMethods.changePassword;
  return user;
}

let mememe = User("allaboutme", "memyselfi");
console.log(`mememe is ${mememe.username}`);
console.log(`mememe old password is ${mememe.password}`);
console.log(`=====================================`);

mememe.changePassword("memyselfi", "centeroftheuniverse");
console.log(`mememe's new password is ${mememe.password}`);

console.log(`=====================================`);

//WHY WON'T IT CHANGE AGAIN?
mememe.changePassword("centeroftheuniverse", "xxx");
console.log(`mememe's new password is ${mememe.password}`);

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

// let max = (a, b) => a > b ? a:null;
// let giggle = max(16, 19)
// console.log(giggle)

const arr1 = [-10, -3, 4, -2, 8, 9, -3];
console.log(arr1);
const squaresOfNegatives = function (arr) {
  let squaredArr = [];
  let squareNegatives = arr1.map((num) => (num < 0 ? sqaredArr.push(num) : 0));
  console.log(squaredArr);
  return sqaredArr;
};
console.log(squareNegatives);
