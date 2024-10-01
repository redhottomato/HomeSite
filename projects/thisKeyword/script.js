'use strict';

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }; 

// calcAge(1991);


// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }; 

// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge(1991);

// const matilda = {
//     year: 2017, 
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     },

//     greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(jessica.lastName, marriedJessica.lastName);


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';
console.log(jessica2.lastName, jessicaCopy.lastName);
