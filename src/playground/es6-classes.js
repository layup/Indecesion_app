console.log("running classes test")

class Person {
    constructor(name = "Anonyomous", age = 0){
        this.name = name 
        this.age = age
    }
    getGreeting(){
        //return 'hello my name is ' + this.name + "!"
        return `Hi. I am ${this.name}!`
    }
    getDescription(){
        return `Hello ${this.name} ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription(); 
        
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

const newStudent = new Student("Simon Huculiak", 24, "Computer Science")
console.log(newStudent.getDescription())

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name,age); 
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greetting = super.getGreeting()

        if(this.homeLocation){
            greetting += `I'm visiting from ${this.homeLocation}`
        }

        return greetting
    }
}

const newTraveler = new Traveler(undefined,undefined, 'nowhere')
console.log(newTraveler.getGreeting())