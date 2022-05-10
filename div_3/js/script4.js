/* Атрибуты */

/* получаем доступ к элементам тега <a>: */
var a = document.querySelector('a')
console.log(a) // <a href="https://google.com/" target="_blank" title="Click me!">Google</a>

/* Задаем новую переменную (oldHref) и используя метод getAttribute('href')
положим в переменную содержимое данного атрибута (ссылку https://google.com/) */
var oldHref = a.getAttribute('href')
console.log(oldHref) // https://google.com/

console.log(a.getAttribute('title')) // Click me!

/* Можно ИЗМЕНИТЬ содержимое атрибутов html файла методами JS:

Обращаемся к методу setAttribute('', '') первым параметром указываем атрибут,
содержимое которого хотим изменить, а вторым - на какое значение изменить */
a.setAttribute('href', 'https://ya.ru')

/* таким же способом меняем значения атрибута title */
a.setAttribute('title', 'Go to yandex')

/* Свойством textContent меняем текстовое содержимое тега <a> */
a.textContent = 'Yandex'

// console.log(a.attributes) // можно получить обьект со всем содержимым
