/*
    &&  | true  | false
  true  | true  | false
  false | false | false

    ||  | true  | false
  true  | true  | true
  false | true  | false

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  ! (нет) - инвертирует true или false
*/

var carName = 'Ford'  // название машины
var carYear = 2008  // год выпуска машины
var currentYear = 2018  // текущий год
var carAge = currentYear - carYear  // возраст машины

// Как формируются условия  в JS
// если в.м. меньше 5 лет ...
// если в.м. больше или равно 5 лет и меньше или равно 10 лет ...
// иначе другое сообщение

// Выводим результат условия в консоль:
if (carAge < 5) {
  console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
  console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
  console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}

/*
Что выводят различные типы данных в условиях:

4           - true
str         - true
0           - false
null        - false
undefined   - false
''          - false
NaN         - false
 */

var str = 'Hello'

if (0) {
  console.log('Значение true')
} else {
  console.log('Значение false')
}