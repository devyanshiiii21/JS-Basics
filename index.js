console.log('Hello world');

// Variables
 let name1 = "Devv";
 console.log(name1);

// Constants
const a = 10; // Cannot be reassigned or modified once assigned to it, good for values that don't change throughout
// a = 15
console.log(a); //Throws error at a=15

// Objects
let person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 20
};

// Dot Notation
person.firstName = 'Pony'

// Bracket Notation
person['lastName'] = "Park"

console.log(person)


// Arrays
let colors = ['red','green','blue'];
colors[3] = 'purple';
console.log(colors)

// Functions
function sqaure(num){
    return num*num;
}

console.log(sqaure(4));