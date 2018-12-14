// Selecting the ul element using its ID, #list
var theUList = document.getElementById('list');
// console.log(theList);

// Selecting the list items in the theUList
let listItem = theUList.querySelector('li');

const logToConsole = () => {
  console.log(listItem.innertext);
}



listItem.onclick = logToConsole

function namedFxn(){

}

function newOne(callbackFxn){
  callbackFxn();
}

newOne(namedFxn);
