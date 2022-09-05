
//BUBBLE SORT 
function bubbleSort(arr){
  let noSwaping;
  for(let i = arr.length  ; i>0 ; i--){
    noSwaping = true
    for(let j = 0 ; j< i -1 ; j++){
      if(arr[j]> arr[j+1]){
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1] = temp
        noSwaping = false;
      }
    }
    if(noSwaping) break;
  }
  return arr
}
// console.log(bubbleSort([8,1,2,3,4,5,6,7]))
//[8, 29, 37, 45]




//SELECTION SORT
function selectionSort(arr){

  for(let i = 0 ; i<arr.length ; i++){
    let minimum = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]< arr[minimum]){
        minimum = j;
      }
    }
    if(i !== minimum){
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp
    }
  }
  return arr;
}

console.log(selectionSort([0,2,34,22,10,19,17]))