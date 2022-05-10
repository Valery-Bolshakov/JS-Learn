/* Числа и операции с числами */

console.log(42)
console.log(-42)
console.log(1.5)

console.log(-8 / 3) // -2.6666
/* число в шестнадцатиричной системе исчисления */
console.log(0xAB)  // 171

/* чиста в степени */
console.log(2e3) // 2 * 10 * 10 * 10 = 2000

/* специальные значения - число NaN */
console.log(NaN) // not a number (но явдяется типом данных Число)
console.log(typeof NaN) // number

console.log(123 / 0)  // Infinity

var fortyTwo = 42
var delta = 8 / 3

/* Методы работы с числами: 
.toString() - приводим число в строковое значение*/
console.log(fortyTwo.toString())  // '42'
/* toFixed() - метод избавления от лишних знаков после запятой (изменяет число в строку) */
console.log(delta.toFixed(1))  // '2.7' строка

/* Переводы строк в числа: */
/* Для сохранения числового типа данных добавляем '+' */
console.log(+delta.toFixed(1) + 5)  // 7.7 число
/* parseFloat - переводим строку в число */
console.log(parseFloat(delta.toFixed(2))) // 2.67
/* parseInt - приводит строку в число и избавляется от знаков после ',' */
console.log(parseInt(delta.toFixed(2))) // 2


console.log(isNaN(NaN)) // true
console.log(isNaN(45))  // false

/* isFinite - проверяет является ли результат конечным числом */
console.log(isFinite(1 / 0)) // false 
console.log(isFinite(9999999999)) // true