/*
Create a variable called grade and set it to the grade you plan to receive on this assignment. Then write an if statement that will check whether the grade is equal to an A, B, C, D, or F and inform the user if they passed or failed using console.log().
*/
var grade = 'A';
if (grade == 'A'){
  console.log("You've passed exceptionally!");
} else if (grade == 'B'){
  console.log("You've done really well and passed!");
} else if (grade == 'C'){
  console.log("You've passed!");
} else if (grade == 'D'){
  console.log("This isn't very good, but you've barely passed.");
} else if (grade == 'F' || grade == 'E'){
  console.log("You've failed :(");
} else {
  console.log("I'm not sure what that is, but you didn't pass...");
};
