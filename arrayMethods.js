// Array Methods

// Create an array with which to work

let names = ['Jim', 'Alice', 'Bella', 'Michael', 'Catherine', 'Jack']

// Basic Looping
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log('===========')

// For ... of
for (let n of names){
    console.log(n)
}


// Array.prototype.forEach()

console.log('===========')
// Create a callback function
function callBack(elem, idx, arr){
    console.log(elem, idx, arr)
}


names.forEach(callBack)


// As an arrow function
names.forEach((e) => console.log(e.toUpperCase()))



// Array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase()
    }else{
        return element.toLowerCase()
    }
}


let newNames = names.map(mapCallBack);

console.log(newNames);


// As Arrow Function
let newerNames = names.map((e, i) => i%2 === 0 ? e.toUpperCase() : e.toLowerCase());
console.log(newerNames);



// Array.prototype.filter()
let cities = ['Chicago', 'Chattanooga', 'Charlotte', 'Boston', 'Baton Rouge']

function cCity(cityName){
    return cityName[0].toUpperCase() === 'C'
}


let cNameCities = cities.filter(cCity);

console.log(cNameCities)

// As arrow function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);


// Array.prototype.concat()
let arrA = [1, 2, 3]
let arrB = [4, 5, 6]
let arrC = arrA.concat(arrB)

console.log(arrA)
console.log(arrB)
console.log(arrC)


// Array.prototype.includes()

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(colors.includes('purple'))
console.log(colors.includes('green'))


// Array.isArray
// typeof Array === 'object'

let testArr = [1, 2, 3]
let notArr = {a:1, b:2}
console.log(Array.isArray(notArr))


// Array.prototype.join()
let myArrName = ['B', 'r', 'i', 'a', 'n']

console.log(myArrName.join(''))


// Array.prototype.pop()

console.log(colors);

let lastColor = colors.pop();

console.log(colors);
console.log(lastColor);



// Array.prototype.push()

console.log(colors.push(lastColor))
console.log(colors)



// Array.prototype.sort()
let myNumArr = [1, 20, 100, 99, 7]

myNumArr.sort((a, b) => {
    console.log(`a:${a}, b:${b}`)
    return a-b
})

console.log(myNumArr);


