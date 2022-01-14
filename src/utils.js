console.log('Utils.js is running')

//const square = (x) => x * x;
//const add = (a,b) => a + b; 

//not an object definition 
//export {square, add }; 
//exports - default export - named exports 

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;

export {isAdult, canDrink}