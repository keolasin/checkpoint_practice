/*
Using the shoppingCart variable below, use a for() loop to iterate over the array and console.log() the shopping cart item's name.
*/
var shoppingCart = [
  {
    id: 0,
    name: 'Mens Shirt',
    price: 20,
    size: 'Large'
  },
  {
    id: 1,
    name: 'kids shirt',
    price: 15,
    size: 'small'
  }
]
// write code below
/* We know the length of the array should be equal to 2, as the array contains two items. But, we want to start looping through starting an index of 0 (the first element in the array), so setting up the for loop, we should initialize it with i = 0 and use a condition where it will stop as long as i is less than 2, so we use <, instead of <=
*/
for (let i = 0; i < shoppingCart.length; i++){

  // We know we want the first element, so we start at index zero and access that unnamed object - we then want the value assigned to the name property of that object, so we call the name property which will return the value stored there.
  console.log(shoppingCart[i].name);
}
