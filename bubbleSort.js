// creating arrays to practice bubble sort, one with a known answer, another with random values to practice with
let numbersToSort = [85, 31, 11, 54, 4, 62, 30, 78, 47, 86];
let randomNumbers = [];

for (let i = 0; i < 10; i++){
  randomNumbers[i] = (Math.floor(Math.random()*100));
}

const bubbleSort = (inputArray) => {
  do {
    swap = false;
    for (let i = 0; i < inputArray.length; i++){
      let first = inputArray[i];
      let second = inputArray[i+1];
      if (first > second){
        inputArray[i] = second;
        inputArray[i+1] = first;
        swap = true;
      }
    }
  } while (swap);
}
console.log("Our unsorted array is: " +numbersToSort.join(', ')+".");
bubbleSort(numbersToSort);
console.log(numbersToSort);
console.log("Expected is: 4, 11, 30, 31, 47, 54, 62, 78, 85, 86");

console.log("Our unsorted random array is : "+randomNumbers.join(', ')+".");
bubbleSort(randomNumbers);
console.log(randomNumbers);
