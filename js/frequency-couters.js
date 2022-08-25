//FREQUENCY COUTNERS

//Write a function called same, which accepts two arrays. 
//The function should return true if every value in the array has 
//it's corresponding value squared in the second array. 
//The frequency of values must be the same.


//Solution #1 - O(N^2)
function same(arr1, arre){
  if(arr1.length !== arre.length){
    return false;
  }

    for(let i = 0 ; i <arr1.length ; i++){
      let correctIndex = arr2.indexOf(arr1[i]**2)
      if(correctIndex === -1){
        return false;
      }         
      arr2.splice(correctIndex,1)
    }
  return true                                                         
}     

// same([1,2,3], [4,9,1])


//Solution #2 - O<(N)

function same1(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}


//Given two strings, write a function to determine if the second string 
//is an anagram of the first. An anagram is a word, phrase, or name formed 
//by rearranging the letters of another, such as cinema, formed from iceman.
function validAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false
  }
  let lookup = {}
  for(let i =0; i<str1.length; i++){
    let letter = str1[i];
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
  }

  for(let i = 0; i<str2.length; i++){
    let letter = str2[i]
    if(!lookup[letter]){
      return false;
    }else {
      lookup[letter] -= 1;
    }
  }
  return true
}

// console.log(validAnagram('anagram', 'nagaram'))




//Write a function called sumZero which accepts a sorted array of integers. 
//The function should find the first pair where the sum is 0. 
//Return an array that includes both values that 
//sum to zero or undefined if a pair does not exist

//Solution #1 O(N^2)

function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}


//Solution #2 O(N) => Multiple pointers

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
} 



//CountUnique Values

//Implement a function called countUniqueValues, 
//which accepts a sorted array, and counts the unique values in the array. 
//There can be negative numbers in the array, 
//but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr){
  var i = 0;
  for(var j = 0; j<arr.length ; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
  }
  return i+1
}

countUniqueValues([1,2,3,4,4,4,5,6,6,7])


//Sliding Window
//Write a function called maxSubarraySum which accepts an 
//array of integers and a number called n. 
//The function should calculate the maximum sum 
//of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i =0 ; i<num ; i++){
    maxSum +=arr[i]
  }
  tempSum = maxSum;
  for(let i = num ; i < arr.length; i++){
    tempSum = tempSum = arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}