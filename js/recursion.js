
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

console.log(collectOddValues2([1,2,3,4,5,6,7,8,9,10]))