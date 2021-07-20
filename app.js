let name = "Kyran";
//states constant
const STATES = 50;
// sum 5 and 4
let sum = 5 + 4;      
// check if name starts with L, respond based on result

if (charCodeAt(0) > 76) {
    alert("Back of the line!");
} else {
    alert("Next!");
}

// Hello World function
function sayHello() {
    alert("Hello World!");
}
// call function
sayHello();                
// checkAge function
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
// make friends and run through the function
let charles = {
    name: "Charles",
    age: 21
};
let abby = {
    name: "Abby",
    age: 27
};
let james = {
    name: "James",
    age: 18
};
let john = {
    name: "John",
    age: 17
};
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);
//vegetable array
let veggies = ["spinach", "corn", "peppers"];
// loop through veggies
for (let i=0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
// array of 5 friends
let friends = [
    {
        name: "Chandler",
        age: 20
    },
    {
        name: "Dj",
        age: 22
    },
    {
        name: "Brad",
        age: 23
    },
    {
        name: "Forrest",
        age: 22
    },
    {
        name: "Jackson",
        age: 24
    }
];
// run friends through loop
for (let i=0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
// getLength function
function getLength(string) {
    return string.length;
}
// call function
let length = getLength("Hello World");
// check odd/even on length
if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

const { convertJsToTs, convertJsToTsSync } = require( 'js-to-ts-converter');
