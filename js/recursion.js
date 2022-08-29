
//simple recursive function
function countDown(num){
  if(num <=0 ){
    console.log('all done')
    return
  }
  console.log(num);
  num--;
  countDown(num)
}


//Implement factorial 
function factorial (num){
  if(num === 1) {
    return 1
  }
  return num * factorial(num-1)
}

// console.log(factorial(3))

//using helper function
function collectOddValues(arr){
  let result = [];

  function helper(helperInput){
    if(helperInput.length === 0){
      return
    }
    if(helperInput[0] % 2 !==0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))

//implement collect odd values with pure recursion
function collectOddValues2(arr){
  let newArr = [];
  if(arr.length === 0 ){
    return newArr
  }

  if(arr[0] % 2 !== 0 ){
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues2(arr.slice(1)))
  return newArr
}

// console.log(collectOddValues2([1,2,3,4,5,6,7,8,9,10]))


//power
function power(base, exp){
  if(exp === 0 ){
    return 1
  }
  return base * power(base, exp-1)
}

// console.log(power(2,3))



//factorial
function factorial(num){
  if(num <= 1){
    return 1
  }
  return num * factorial(num-1)
}
// console.log(factorial(3))


//productOfArray 
function productOfArray(arr){
  if(arr.length === 0) {
    return 1;
}
return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1,2,3,4]))


//recursiveRange
function recursiveRange(num){
  if(num === 0){
    return 0
  }
  return num + recursiveRange(num-1)
}
// console.log(recursiveRange(6))


//fib
//Write a recursive function called fib which accepts a number 
//and returns the nth number in the Fibonacci sequence. 
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
//which starts with 1 and 1, and where every number thereafter is 
//equal to the sum of the previous two numbers.

function fib(n){
  if(n<=2) return 1;
  return fib(n-1) + fib(n-2)
}

console.log(fib(10))