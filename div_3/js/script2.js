/* Методы получения доступа к элементам DOM  */

/* Более новые методы работы с DOM деревом: */

/* Метод querySelector('#id') -  аналог метода getElementById('')
по id получает Один элемент из дерева (id - уникален) */
var div = document.querySelector('#playground')
console.log(div)

/* Метод querySelectorAll('.class') - аналог getElementsByClassName('')
Получает Все элементы данного класса */
var p1 = document.querySelectorAll('.text')
console.log(p1)

/* получили информацию из первого найденного указанного тега */
var h1 = document.querySelector('h1')
console.log(h1) // <h1>Что такое DOM</h1>

/* получили информацию из первого найденного указанного тега */
var h2 = document.querySelector('p')
console.log(h2) // <p>Document Object Model</p>

/* получить информацию от одного из тегов внутри основного тега: */
var ul = document.querySelector('div#playground > ul')
/* логика - метод находит div с заданным #id и в нем ищет первый указанный тег (ul) */
console.log(ul);

/* если хотим забраться глубже в теги то пути можно указывать далее: */
var ul2 = document.querySelector('div#playground > div > ul')
/* логика - метод находит (div) с заданным (#id) и в нем ищет первый указанный тег (> div),
заходит в него и там ищет следующий указанный тег (> ul) */
console.log(ul2);




/* Устаревшие методы (пользоваться можно, но есть более новые и удобные): */

/* Получение доступа к элементам дерева по id (документа html):
Метод getElementById('') в качестве параметра принимает строковое значение 'id'
тега которое хотим получить. Метод возвращает указанный html тег и его содержимое
(id="playground") */
/* var div = document.getElementById('playground')
console.log(div) */

/* Получение доступа к элементам дерева по class (документа html):
Метод getElementsByClassName('') в качестве параметра принимает строковое значение 
'class' тега которое хотим получить. Метод возвращает все указанные html теги
данного класса и его содержимое (class="text")*/
/* var p = document.getElementsByClassName('text')
console.log(p) */

/* Метод getElementsByTagName('') в качестве параметра принимает строковое название
тега которое хотим получить. Метод возвращает указанный html тег и его содержимое
('h1') */
/* var h = document.getElementsByTagName('h1')
console.log(h) */






