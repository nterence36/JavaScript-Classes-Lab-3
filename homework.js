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