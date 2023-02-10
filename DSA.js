let arr = [10, 2, 1, 5];

function getAllSubarray(arr) {
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      subArray.push(arr.slice(i, j + 1))
    }
  }console.log(subArray);
  return subArray;
}

let allSubArray = getAllSubarray(arr);

let min = arr.length;
let maxLength = 0;

for (let i = 0; i < allSubArray.length; i++) {
  let patch = checker(allSubArray[i]);

  if (patch && allSubArray[i].length > maxLength) {
    maxLength = allSubArray[i].length;

maxLength = allSubArray[i].length;
    console.log(allSubArray[i])
  }
  if (min > arr.length - maxLength) {
    min = arr.length - maxLength
  }
}


console.log(min)

function checker(arr) {
  let power = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1] && power == 0) {
      return false
    }
    if (arr[i] < arr[i - 1] && power === 1) {
      arr[i] = arr[i - 1] + 1;
      power--
    }
  }
  return true
}