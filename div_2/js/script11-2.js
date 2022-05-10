var carName = 'Ford'
var carYear = 2015  // год изготовления машины
var personYear = 1990 // год рождения человека

/* Напишем функцию для вычисления возраста, с входящим числовым параметром */
function calcAge(year) {
  var currentYear = 2022  // задаем текущий год
  var result = currentYear - year  // вычисляем разницу чисел
  return result  // возвращаем результат (число)
}

/* Пишем функцию для сравнения возраста обьекта с заданными числом 
параметр age - вид передаваемого обьекта, параметр age - это число сравнения возраста*/
function checkAge(year, name, age) {
    /* Сравниваем число полученное в ходе отрабатывания функции calcAge() с другим числом */
  if (calcAge(year) < age) {
    console.log('Возраст ' + name + ' меньше ' + age + ' лет')
  } else {
    console.log('Возраст ' + name + ' больше ' + age + ' лет')
  }
}

/* Результат выполнения функции (checkAge) с входным параметром (carYear) */
console.log('carYear = ' + carYear + ' =>')
checkAge(carYear, 'car', 7)

/* Результат выполнения функции (checkAge) с входным параметром (personYear) */
console.log('personYear = ' + personYear + ' =>')
checkAge(personYear, 'piple', 15)