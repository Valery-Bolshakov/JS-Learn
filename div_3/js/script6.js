/* Добавление событий */

/* создаваемые обьекты типа button называется (Узлы или Node) */
/* создаем переменную button и получаем в нее доступ к тегу <button> */
var button = document.querySelector('button')

/* аналогично для h1 */
var h1 = document.querySelector('h1')
/* аналогично для input */
var input = document.querySelector('input')

/* Пишем функцию которая отработает после события срабатывания (click) */
function buttonHandler() {
    console.log('clicked!')
  /* имея доступ к h1 - посредством свойства (textContent) меняем содержимое
  тега h1 на то что приходит из значения (value) тега input после (click) */
    h1.textContent = input.value
}

/* background-color => backgroundColor - многословные CSS стили в JS  надо 
писать в одно слово */

/* Событие (mouseenter) - срабатывает при наведение на элемент курсора */
/* Для тега h1 вызываем метод addEventListener() и навешиваем событие
(mouseenter), после которого будет выполнена функция function() */
h1.addEventListener('mouseenter', function() {
    this.style.color = 'red' // меняем цвет элемента
    this.style.backgroundColor = 'green'
})

/* Событие (mouseleave) - срабатывает при убирании курсора с данного элемент */
h1.addEventListener('mouseleave', function() {
    this.style.color = 'black' // меняем цвет элемента
    this.style.backgroundColor = 'transparent'
})


/* задаем метод addEventListener() первым параметром указываем событие (click)
для срабатывания, вторым параметром передаем функцию, которая будет выполнена
после отрабатывания события срабатывания (buttonHandler)
Важно: функцию buttonHandler пишем без "()" что бы не вызвать её */
button.addEventListener('click', buttonHandler)