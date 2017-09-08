"use strict"

// function soundMaker(sound, times) {

//   function makeSound() {
//     console.log(`${sound}`)
//   }

//   for(let i = 0; i < times; i++) {
//     makeSound()
//   }

// }
// soundMaker("Woof", 5)





// function summation(arr) {
//   let sum = 1

//   function summer() { //closure
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]
//     }
//   }

//   summer()


//   return sum;
// }

// console.log(summation([1, 2, 3, 4]))

setTimeout(function() {
  console.log('It has been 5 seconds')
}, 5000)