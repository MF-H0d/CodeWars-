// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// =======================Solution=====================

function minMax(arr){
    let min = Math.min.apply(null, arr)
    let max = Math.max.apply(null, arr)
    return [min, max]
  }

//   ========or=========

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)] //...rest parameter--allows function to accept indefinite number of arguments as an array 
  }

  console.log(minMax([1,2,3,4,5]))
