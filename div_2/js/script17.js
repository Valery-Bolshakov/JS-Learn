
/* Циклы: */

var numbers = [1, 2, 3, '4', 5, 6, 7, 8]

console.log(numbers)

/* for (Начальноу условие; Условие выхода из цикла; Операция после прохода цикла) */
for (var i = 0; i < numbers.length; i++) {
    /* цикл будет выводить только чётные элементы */
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i])
  }
}

console.log(numbers)

// Вывод чётных чисел, другой вариант цикла
/* for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue // пропускаем текущий элемент и начинаем новый цикл
  }
  console.log(numbers[i])
} */

// Вывод Нечётных чисел
/* for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue
  }
  console.log(numbers[i])
} */

// оператор break
/* for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    break // прекращает работу цикла нахер
  }
  console.log(numbers[i])
}
console.log('--------------') */


numbers.push('String') // Добавим строку в массив

for (var i = 0; i < numbers.length; i++) {
    // проверяем тип данных каждого элемента и останавливаем цикл когда
    // условие совпадет
  if (typeof numbers[i] === 'string') {
    break
  }
  console.log(numbers[i])
}

console.log(numbers)

for (var i = 0; i < numbers.length; i++) {
    // проверяем тип данных каждого элемента и пропускаем операции со строками
  if (typeof numbers[i] === 'string') {
    continue
  }
  console.log(numbers[i])
}
