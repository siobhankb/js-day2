// JavaScript Functions

// Regularly Named Function
// function <funcName>(){ code to execute when called }

// function addNums() {
//   let num1 = 10;
//   let num2 = 20;
//   return num1 + num2;
// }

// //execute --> <funcitonName> ()
// console.log(addNums())

// // Regularly Named Function with Parameters
// // function <funcName>(parameters){ code to execute when called }
// function addNums2(num1, num2){
//     return num1 + num2
// }
// //execute --> <funcitonName> (passed parameters)
// console.log(addNums2);
// console.log(addNums2(15, 30));
// // vvv will return 'NaN' ie 'not a number'
// // console.log(addNums2());
// //

// Function variable declaration
// var(let, const) nameOfFunc = function(){ code to execute when called }
var addSomeNums = function(){
    let num1 = 100;
    let num2 = 200;
    return num1 + num2
}

console.log(addSomeNums);
console.log(addSomeNums())


let addMoreNums = function(num1, num2){
    return num1 + num2
}

console.log(addMoreNums);
console.log(addMoreNums(10, 20))


const anotherFunc = function someCoolNameFun(a, b) {
    return a-b
}

console.log(anotherFunc);
console.log(anotherFunc(20,50))