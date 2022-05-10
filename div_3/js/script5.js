/* Классы  */

// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://ya.ru')
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'


/* Методом querySelector('') получаем данные по указанным #id */
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

/* посредством свойства classList и метода add добавляем еще один класс ('red') в 
<div id="box1" class="box"></div> */
box1.classList.add('red') // => (class="box red")

/* Методом contains('blue') можно проверять содержится ли указанный
класс в данном теге. возвращает true or false */
var hasClass = box2.classList.contains('blue')
console.log(hasClass) // false

/* Методом remove('blue') можно удалить указанный класс из параметров тега
Напишем условие - Если hasClass true - то удалим параметр класса,
- Иначе - добавим его */
if (hasClass) {
  box2.classList.remove('blue')
} else {
  box2.classList.add('blue')
}