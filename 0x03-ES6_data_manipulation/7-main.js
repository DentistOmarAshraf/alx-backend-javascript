import hasValueFromArray from './7-has_array_values';

console.log(hasValueFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValueFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValueFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
