const makeCoffee = (ingredients) => {


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Coffee is ready`)
      resolve('Mocha')
    }, 1000)

  })



}



makeCoffee().then((type) => {
  console.log(`${type} is ready`)
})