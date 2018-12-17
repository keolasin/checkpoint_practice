const factorial = function(x){
  if (x === 0) return 1;
  if (x === 1) return 1;
  console.log(x);
  return x*factorial(x-1);
}

factorial(4); // should be 24
