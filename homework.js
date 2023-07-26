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
console.log(Timmy)
Timmy.buyHamster(hamster2)

console.log(Timmy)
Timmy.getAge(5)
Timmy.eat(5)
Timmy.exercise(5)
Timmy.getAge(9)
console.log(Timmy)

let hamster3 = new Hamster ("Timmy", "Gus",)
Timmy.buyHamster(hamster3);
Timmy.ageUp(15)
Timmy.eat(2)
Timmy.exercise(2)
console.log(Timmy)

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;

    }

}

class Chef extends Dinner {
    constructor(appetizer, burger, premium){
        super(appetizer)
        this.burger = burger;
        this.premium = premium;
    }
    
    chefMenu (appetizer, burger, premium){
        return `Dinner tonight ${appetizer}, ${burger} and ${premium}`
    }

    Dinner1 (){
        console.log(`sweet poatoes and fried chicken`)
    }
    Dinner2 (){
        console.log("Onion rings and bobolo")
    }

    Dinner3 (){
        console.log("yam and stew")
    }
}
