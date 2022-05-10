var carName = 'Ford'
var carYear = 2015  // год изготовления машины
var personYear = 1990 // год рождения человека

/* Напишем функцию для вычисления возраста, с входящим числовым параметром */
function calcAge(year) {
  var currentYear = 2022  // задаем текущий год
  var result = currentYear - year  // вычисляем разницу чисел
  return result  // возвращаем результат (число)
}

/* Пишем функцию для сравнения возраста обьекта с заданными числом */
function checkAge(year) {
    /* Сравниваем число полученное в ходе отрабатывания функции calcAge() с другим числом */
  if (calcAge(year) < 10) {
    console.log('Возраст объекта меньше 10 лет')
  } else {
    console.log('Возраст объекта больше 10 лет')
  }
}

/* Результат выполнения функции (checkAge) с входным параметром (carYear) */
console.log('carYear = ' + carYear + ' =>')
checkAge(carYear)

/* Результат выполнения функции (checkAge) с входным параметром (personYear) */
console.log('personYear = ' + personYear + ' =>')
checkAge(personYear)