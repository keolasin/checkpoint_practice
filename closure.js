function familyNames (lastName){
  function firstNames (firstName){
    return console.log("Welcome to the family " +firstName +" " +lastName +"!");
  }
  return firstNames;
}

// my family
var myFam = familyNames('Reyes');
myFam(); // firstName will be undefined, last name = Reyes
myFam('Matthew'); // passing new first name to the firstNames fxn, should be first name of Matthew, last name of Reyes
myFam('Jimothy');
myFam('Burger');

// new family
var someOtherFam = familyNames('West');
someOtherFam(); // firstName will be undefined, last name = West
someOtherFam('North'); // passing new first name to firstNames fxn
