let arr = [1, 2];
console.log(arr.concat([3, 4])); // [ 1, 2, 3, 4 ]
console.log(arr.concat(1, 4)); // [ 1, 2, 1, 4 ]
console.log(arr.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]