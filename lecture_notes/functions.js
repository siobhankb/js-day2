// JavaScript Functions

// Regularly Named Function
// function <funcName>(){ code to execute when called }

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2
}


// Execute a function: <funcName>()
console.log(addNums);
console.log(addNums());


// Regularly Named Function with Parameters
function addNums2(num1, num2){
    return num1 + num2
}

console.log(addNums2);
console.log(addNums2(5, 55));


// Take last night's exercise 1 and put it in a function
function firstNonConsecutive(arr){
    // loop through the array with its index
    for (let i = 0; i < arr.length-1; i++){
        // look at each number and compare it to the number to its right
        let number = arr[i]
        let numberToRight = arr[i+1]
        // if the number to its right is not one greater, than that number is non consecutive
        if (number + 1 !== numberToRight){
            return i + 1
        }
    }
    return -1
}


console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7])) // 4
console.log(firstNonConsecutive([12, 13, 15, 16, 17])) // 2
console.log(firstNonConsecutive([101, 102, 103, 104])) // -1



// default parameters
function addNums3(num1, num2=100){
    return num1 + num2
}

console.log(addNums3(10));
console.log(addNums3(10, 15));



// Function variable declaration
// var(let, const) nameOfFunc = function(){ code to execute when called }
var addSomeNums = function(){
    console.log('This is a variable named function')
}


console.log(addSomeNums);
addSomeNums()


var addMoreNums = function(num1, num2){
    return num1 + num2
}


console.log(addMoreNums);
console.log(addMoreNums(14,18))


// Arrow Functions
// variableName = () => {}
var multiplyNums = function(num1, num2){
    return num1 * num2
}


console.log(multiplyNums(4,8))

// If body of code is one line and a return, you can remove {} and return statement
var abc = (num1, num2) => num1 * num2

console.log(abc(3,9))


// If only one parameter, parens around not necessary
var addToTen = num => num ? num + 10 : 0

console.log(addToTen(5));

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
  
console.log(materials.map(function(material){ return material.length}));
console.log(materials.map(material => material.length));


// Arrow function for exercise 2 of last night's homework

let newArr = [10, 12, -9, 3, -1, 0, 15];

// Set a variable of total to begin with a value of zero
let total = 0;
// Loop through each number in our array
for (let num of newArr){
    // Check if the number is positive (aka > 0)
    if (num > 0){
        // Add number to our total variable
        total += num
    }
}
// At the end of the list, log out the total
console.log(total);



var sumOfPositives = arrOfNums => {
    let total = 0;
    for (let num of arrOfNums){
        if (num > 0){
            total += num
        }
    }
    return total
}


console.log(sumOfPositives(newArr));


// Write a function to find the max number in an array
// 0 < length of the array < 100
// Ex 1: [3, 7, 2, 8, 10, 4, 11] Output: 11
// Ex 2: [33, 88, 55, 22, 11, 44] Output: 88
// Ex 3: [10] Output: 10

function maxNum(arr){
    let currentMax = arr[0]
    for (let num of arr){
        if (num > currentMax){
            currentMax = num
        }
    }
    return currentMax
}

console.log('=======')
console.log(maxNum([3, 7, 2, 8, 10, 4, 11]))
console.log(maxNum([33, 88, 55, 22, 11, 44]))
console.log(maxNum([10]))

