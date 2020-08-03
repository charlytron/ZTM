/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 147 
Advanced Arrays
***********************************************************/



const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

// Map, Filter, Reduce:  these three are the most
// important methods that we use in day-to-day Javascript

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// Filter:
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);
//  [10, 16]

//reduce:
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
})

console.log('reduce', reduceArray);