/* Массивы: 

Объявляем пустой массив:*/
var arr = []

/* Массив принимает любые типы данных: */
var anyArr = [123, 'String', {f:2}]
console.log(anyArr) // [123, 'String', {f:2}]

var cars = ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(cars) // [0: "Audi" 1: "Mazda" 2: "Kia" 3: "BMW"]
console.log(cars[2]) // 'Kia'

/* Методы работы с массивами */
/* Длина массива */
console.log(cars.length) // 4

// .push -  добавит элемент в конец массива
cars.push('Audi')
console.log(cars) // ['Ford', 'Mazda', 'Kia', 'BMW', 'Audi']

// удаляет последний элемент из массива и возвращает этот элемент
var audi = cars.pop()
console.log(cars) // ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(audi) // 'Audi'

// удаляет первый элемент из массива и возвращает этот элемент
var ford = cars.shift()
console.log(cars) // ['Mazda', 'Kia', 'BMW']
console.log(ford) // 'Ford'

// добавляет элемент в начало 
cars.unshift(audi)
console.log(cars) // ['Audi', 'Mazda', 'Kia', 'BMW']

// возвращает индекс указанного элемента (регистр важен)
var index = cars.indexOf('Kia') // 2
var kia = cars[index]

console.log(kia)