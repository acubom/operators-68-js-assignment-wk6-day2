//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let fav_foods = (person) => {
    for (let i = 0; i < Object.keys(person).length; i++) {
        console.log(Object.keys(person)[i])
    };

    for (let i = 0; i < Object.values(person).length; i++) {
        if(Array.isArray(Object.values(person)[i])){
            console.log(Object.values(person)[i])
        }
    }
}

fav_foods(person3)

// List all values from person2 that are Arrays




//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    older = () => {
        return this.age += 1
    }
    printInfo = () => {
        return `My name is ${this.name} and I am ${this.age}yrs old.`
    } 
}

let christian = new Person('Christian', 44)
let landin = new Person('Landin', 8)

console.log(christian.printInfo())
console.log(landin.printInfo())

console.log(landin.older())
console.log(landin.older())
console.log(landin.older())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const biggieSmalls = (string) => {
    return new Promise((resolve, reject) => {
        if(string.length > 10) {
            resolve(true)
        }else{
            reject(false)
        }
    })
}

biggieSmalls('notorious')
.then((result) => {
    console.log('Biggie')
})
.catch((error) => {
    console.log('Small')
})


// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/javascript

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript

// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/solutions/javascript