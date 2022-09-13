//MERGE SORT

//Merge arrays
function merge(arr1, arr2){
  let results = [];
  let i=0;
  let j=0;
  while(i<arr1.length && j<arr2.length){
    if(arr2[j]> arr1[i]){
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while(i<arr1.length){
    results.push(arr1[i])
    i++
  }

  while(j<arr2.length){
    results.push(arr2[j])
    j++
  }

  return results;
}

// console.log(merge([1,10,50], [2,14,99,100]))



//MERGE SORT

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(mergeSort([10,24,76,73, 72, 1,9]));




//QUICK SORT

function pivot(arr, start=0, end=arr.length-1){
  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j]= temp;
  }
 let pivot = arr[start];
 let swapIdx = start;
 for(let i =start+1; i<arr.length; i++){
  if(pivot > arr[i]){
    swapIdx++
    swap(arr, swapIdx, i)
  }
 }
 swap(arr, start, swapIdx)
 return swapIdx
}

// pivot([4,8,2,1,5,7,6,3])


//QUICK SORT 

function quickSort(arr, left=0, right=arr.length-1){
  if(left<right){
    let pivotIndex = pivot(arr, left, right)
    //left side
    quickSort(arr, left,pivotIndex-1)
    //rightSide 
    quickSort(arr, pivotIndex+1, right )
  }
return arr

  
}

console.log(quickSort([4,8,2,1,5,7,6,3]))