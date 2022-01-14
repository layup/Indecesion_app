console.log("playground")


const square = function(x){
    return x * x; 
};

//are all anonymous by default 
//const squareArrow = (x) => {
//    return x * x 
//};

//implicity return 
const squareArrow = (x) => x * x; 
console.log(squareArrow(10))

const fullName = "Tommy Lay"
const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName(fullName))


//Part 2 
//arrow functions not allowed in arrow functions and this not longer bound 
const add = (a,b) => {
    //console.log(arguments)
    return a + b
}
console.log(add(55,1, 1001))

const user = {
    name:"Cole",
    cities:["Peachland", "West Kelowna", "Vancouver"], 
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
}

console.log(user.printPlacesLived());

//challenge area 

const multiplier = {
    numbers:[1,2,3,4,5], 
    multiplyBy: 10,
    multipy(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multipy())