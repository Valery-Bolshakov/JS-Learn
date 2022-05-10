/* Делегирование событий  */

/* получаем все данные из тегов <p> посредством метода querySelectorAll('p') */
var p = document.querySelectorAll('p')

/* создаем функцию которая по событию клик на какой нибудь <p> html документа
навешает на него заданный стиль с цветом */
/* for (var i = 0; i < p.length; i++) {
    // обращаемся к массиву 'p' по ключу 'i' и навешиваем события на всех,
    // но отработают они после клика
    p[i].addEventListener('click', function(event) {
        event.target.style.color = 'green'
    })
} */

/* 
    НО есть проблема - скрипт выше отрабатывает сразу на все теги <p>
    И если их будет много - то приложение будет работать медленно.
    Необходимо изменить приложение так что бы оно отрабатывало только 
    на том теге <p> по которому совершили клик 
*/


/* 
    Конструкция делегирования событий
    (document.getElementById('wrapper')) - как обычно вернет Нод, на который можно
    навешивать какие нибудь события
    Навешиваем на пришедший Нод событие с кликом (addEventListener('click'.....)
*/
document.getElementById('wrapper').addEventListener('click', function(event) {
    console.log(event.target) // посмотреть на какой див кликнули

    // получаем название тега и переводим его в нижний регистр:
    var tagName = event.target.tagName.toLowerCase()
  
    // Добавляем условие что бы событие срабатывало тольго для тегов <p>
    if (tagName === 'p') {
      event.target.style.color = 'blue'
    }
  
    // Добавляем условие - если у тега имеется (contains) параметр 'color' то
    // меняем его цвет на красный
    if (event.target.classList.contains('color')) {
      event.target.style.color = 'red'
    }
  })