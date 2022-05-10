/* Содержимое элементов  */

// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var div = document.querySelector('#playground')
/* Добавляем к простому выводу в консоль свойство (.innerHTML). Данное
свойство выведет в консоле в строковом формате содержимое указанного тега */
console.log(div.innerHTML)


/* Динамически заменим полученное содержимое (div) на другой код  */
div.innerHTML = '<h2 style="color: red;">From javascript</h2>'
/* Изначальный код тега <div id="playground"> на html странице сменится
на (From javascript) */
console.log(div.innerHTML)


var h1 = document.querySelector('h1')
console.log(h1) // <h1>Что такое DOM</h1>

console.log(h1.textContent) // Что такое DOM

/* Данное свойство (.textContent) изменит содержимое внутри (h1) */
h1.textContent = 'Changed from JS'
console.log(h1.textContent) // Changed from JS


/* Получаем значение (value) из указанного тега (input) */
var input = document.querySelector('input')
console.log(input.value) // i am input

