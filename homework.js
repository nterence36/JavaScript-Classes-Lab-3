// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
    constructor(owner, name, price){
        this.owner = " ";
        this.name = name;
        this.price = 15;
    }
    
    wheelRun(){
        console.log("squeak squeak");
    }

    eatFood(){
        console.log("nibble nibble");
    }

    getPrice(){
        return this.price;
    }
}
const hamster1 = new Hamster("I own", "Nick")
hamster1.wheelRun()
hamster1.eatFood()
console.log(hamster1.getPrice())
const hamster2 = new Hamster("Jocky", "Man")

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getNmae(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    eat(){
        this.weight++;
        this.mood++;
    }

    exercise(){
        return this.weight--
    }

    ageUp(){
        
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10;
        this.bankAccount -= hamsters.getPrice();
        
    }

}

let Timmy = new Person("Tboy", 5);
