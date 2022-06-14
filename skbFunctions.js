// // JavaScript Functions

// // Regularly Named Function
// // function <funcName>(){ code to execute when called }

// // function addNums() {
// //   let num1 = 10;
// //   let num2 = 20;
// //   return num1 + num2;
// // }

// // //execute --> <funcitonName> ()
// // console.log(addNums())

// // // Regularly Named Function with Parameters
// // // function <funcName>(parameters){ code to execute when called }
// // function addNums2(num1, num2){
// //     return num1 + num2
// // }
// // //execute --> <funcitonName> (passed parameters)
// // console.log(addNums2);
// // console.log(addNums2(15, 30));
// // // vvv will return 'NaN' ie 'not a number'
// // // console.log(addNums2());
// // //

// // Function variable declaration
// // var(let, const) nameOfFunc = function(){ code to execute when called }
// var addSomeNums = function(){
//     let num1 = 100;
//     let num2 = 200;
//     return num1 + num2
// }

// console.log(addSomeNums);
// console.log(addSomeNums())


// let addMoreNums = function(num1, num2){
//     return num1 + num2
// }

// console.log(addMoreNums);
// console.log(addMoreNums(10, 20))


// const anotherFunc = function someCoolNameFun(a, b) {
//     return a-b
// }

// console.log(anotherFunc);
// console.log(anotherFunc(20, 50))

// console.clear;

// //arrow functions
// // 'this' is like 'self'
// let newArr = [10, 12, -9, 3, -1, 0, 15];
// // Set a variable of total to begin with a value of zero
// let total = 0;
// // Loop through each number in our array
// for (let num of newArr){
//     // Check if the number is positive (aka > 0)
//     if (num > 0){
//         // Add number to our total variable
//         total += num
//     }
// }
// // At the end of the list, log out the total
// console.log(total);


// var sumOfPositives = arrOfNums => {
//     let total = 0;
//     for (let num of arrOfNums){
//       if (num > 0) {
//         total += num;
//       }
//     }
//     return total
// }


// Write a function to find the max number in an array
// 0 < length of the array < 100
// Ex 1: [3, 7, 2, 8, 10, 4, 11] Output: 11
// Ex 2: [33, 88, 55, 22, 11, 44] Output: 88
// Ex 3: [10] Output: 10

var maxOfArr = function (arr) {
    let maxNum = 0;
    for (let n of arr) {
        if (n > maxNum) {
            maxNum = n
        }
    }
    return maxNum
}

let ex1 = [3, 7, 2, 8, 10, 4, 11];
console.log(maxOfArr(ex1));