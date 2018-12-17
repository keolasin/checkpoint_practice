// ES5 (prototype)

// setting up new object constructor
function Product (name, type, size){
  this.name = name;
  this.type = type;
  this.size = size || 'one size fits all';
}

// getters for name, type, size
Product.prototype.getName = function getName(){
  return this.name;
}

Product.prototype.getType = function getType(){
  return this.type;
}

Product.prototype.getSize = function getSize(){
  return this.size || 'one-size fits all';
}

Product.prototype.tellInfo = function tellInfo(){
  return "The " +this.name.toLowerCase() +" is a " +this.type + " item and is a size "+this.size +".";
}

// setting up new object constructor to extend Product
function Outerwear (name, type, size, warmthRating){
  Product.call(this, name, type || 'outerwear', size);
  this.warmthRating = warmthRating;
}

// inheriting from Product
Outerwear.prototype = Object.create(Product.prototype);
Outerwear.prototype.constructor = Outerwear;
Outerwear.parent = Product.prototype;

// getter for outerwear subclass
Outerwear.prototype.getWarmthRating = function getWarmthRating(){
  return "This " +this.name.toLowerCase() +" is " +this.warmthRating+".";
}

/* using classes
class Product {
  constructor(name, type, size){
    this.name = name;
    this.type = type;
    this.size = size || 'one size fits all';
  }
  //getters
  getName () {
    return this.name;
  }
  getType () {
    return this.type;
  }
  getSize () {
    return this.size;
  }

  tellInfo(){
    return "The " +this.name.toLowerCase() +" is a " +this.type.toLowerCase() + " item and is a size "+this.size.toLowerCase() +".";
  }
}

class Outerwear extends Product {
  constructor(name, type, size, warmthRating){
    super(name, type || 'outerwear', size);
    this.warmthRating = warmthRating;
  }

  getWarmthRating () {
    return "This " +this.getName().toLowerCase() +" is " +this.warmthRating+".";
  }
}

*/

// testing
let shirt = new Outerwear('Shirt','top', 'medium', 'cool');
console.log( shirt.tellInfo());
console.log( shirt.getWarmthRating());

let jacket = new Outerwear('Jacket', undefined, 'large', 'super warm');
console.log( jacket.tellInfo());
console.log( jacket.getWarmthRating());

let scarf = new Outerwear('Scarf', undefined, undefined,'cozy warm');
console.log( scarf.tellInfo());
console.log( scarf.getWarmthRating());
