const isMarked = number => {
  // is this number marked? 
} 

// A number is marked if it is a multiple of currentPrimeNum

const isPrime = number => {
  if(number < 2) return false
  if(number === 2) return true
    
  for(let denom = 2; denom < number - 1; denom++) {
    if(!isMarked(denom, currPrime)) {
      if(number % denom === 0)
        return false;
  }
  
  return true;
}

const nthPrime = n => {
  counter = 0;
  let num = 1;
  
  while(counter < n) {
    num++;
    if(isPrime(num)) {
      counter++;
    }
  }
  return num;
}

let output = nthPrime(10001);
console.log(output);


Unmarked = prime. 

