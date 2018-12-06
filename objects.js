class Clothes {
  constructor(name, size, price){
    this.name = name;
    this.size = size;
    this.price = price;
  }
}

let shirt = new Clothes('V-neck', 'Medium', 20);

console.log("The clothing item is: " shirt.name +", it's size is: " +Clothes.size + " and the price is: " + shirt.price + ".");
