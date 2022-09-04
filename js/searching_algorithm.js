

//Linear search
function linearSearch(arr, n){
  for(let i =0 ; i<arr.length; i++){
      if(arr[i] === n){
          return i;
      }
    }
    return -1
  }

// console.log(linearSearch([10,15,20,25,30], 30))


//Binary Search

// Write a function called binarySearch which accepts a sorted array 
//and a value and returns the index at which the value exists. 
//Otherwise, return -1.
function binarySearch(arr, num){
  let start = 0;
  let end = arr.length-1;
  let middle = Math.floor((start + end)/ 2)

  while(arr[middle] !== num && start <= end){
    if(num < arr[middle]) end = middle -1
    else start = middle +1 
    middle = Math.floor((start + end)/2)
  }
  return arr[middle] === num ?  middle :  -1
}

// console.log(binarySearch([1,2,3,4,6,7,8,10,15,20,30,40], 15))


//String Search

function naiveSearch(long, pattern){
  let counter= 0;
  for(let i = 0; i<long.length ; i++){
    for(let j = 0; j<pattern.length ; j++){
      if(pattern[j]!== long[i+j]) break;
      if(j === pattern.length -1) counter++
    }
  }
  return counter;
}

console.log(naiveSearch('lorie loled', 'lo'))
