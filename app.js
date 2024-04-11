// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;

        //info() 
        //soundOff()
    }   
    addHobby(newHobby) {
        this.hobbies.push(newHobby);
    };

    removeHobby(remHob) {
        let index = this.hobbies.findIndex((element) => {
            return (element == remHob);
        });
        this.hobbies.splice(index, 1);
    }

    greeting() {
        console.log("Hello, fellow person.");
    };

           
}

let somePerson = new Person("Clark kent", 0, "Metropolis", ["running", "reading"]);
somePerson.addHobby("journaling");
somePerson.removeHobby("reading");
somePerson.addHobby("reading");
console.log(somePerson);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting() {
        console.log(`Hello fellow person. I am a ${this.occupation}`);
    }
}

let coder = new Coder("Bruce Wayne", 55, "Wayne Manor", ["sulking", "stalking", "fighting"]);
console.log(coder);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a,b) {
        this.result = a / b;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
}
let calc = new Calculator();
calc.add(5, 3);
calc.display();
calc.subtract(5, 3);
calc.display();
calc.multiply(5, 3);
calc.display();
calc.divide(9, 3);
calc.display();
