var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}
// add code below
/*
Using the Clothes class we previously created, create a Shirt class that extends the Clothes class. Don't forget the super().
*/
class Shirt extends Clothes {
  constructor(type){
    super('Shirt','Medium','$10');
    this.type = type;
    }
}

// creating new Shirt, will have properties from super and a 'type' property
var myShirt = new Shirt('Workout'); // value of 'Workout' for 'type' property

// checking properties of myShirt
console.log("I bought a new " +myShirt.type.toLowerCase() + " " +myShirt.name.toLowerCase() +" today, for only "+myShirt.price+"!")
