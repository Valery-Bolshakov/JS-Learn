var num1 = 12
var num2 = 8

// Операции с числами
console.log('num1 + num2:', num1 + num2)  // 20
console.log('num1 - num2:', num1 - num2)  // 4
console.log('num1 * num2:', num1 * num2)  // 96
console.log('num1 / num2:', num1 / num2)  // 1.5

var str1 = 'Hello'
var str2 = 'World'
// Сложение строк (конкатенация)
console.log('str1 + " " + str2:', str1 + ' ' + str2)  // Hello World

console.log('1 + "2":', 1 + '2')  // 12 складывает как строки а не как числа

// Сложение строки и числа:
console.log('str1 + num1:', str1 + num1)  // Hello12 складывает как строки

console.log('Boolean + string:', true + str2)  // trueWorld складывает как строки

console.log('True + 1:', true + 1)  // 2 складывает как числа (true = 1)
console.log('False + 1:', false + 1)  // 1 складывает как числа (false = 0)