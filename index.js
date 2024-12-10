function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(10, 4)); // Output: 6

function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(7)); // Output: true


function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([3, 5, 1, 8])); // Output: 1


function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]


function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortArrayDescending([3, 1, 4, 1, 5, 9])); // Output: [9, 5, 4, 3, 1, 1]


function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); // Output: hello


function findAverage(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024)); // Output: true
