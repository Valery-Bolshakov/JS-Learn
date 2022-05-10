/* Объект события */

/* получаем доступ к тегу div. В ноде divs вроде как будет храниться
массив с полной информацией, взятой из тега div */
var divs = document.querySelectorAll('div')

for (var i = 0; i < divs.length; i++) {
    /* что бы прекратить выполнения действия после первого события
    обращаемся к Интерфейс Event и его методам.
    Event - представляет собой любое событие, которое происходит в DOM
    stopPropagation() - Прекращает дальнейшую передачу текущего события. */
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        /* посмотрим id события которое отработает */
        console.log(this.getAttribute('id'))
  })
}

/* Получаем доступ к тегу <a> */
var link = document.querySelector('a')

/* обращаемся к ноду link и навешиваем событие по клику, после
которого отработает какая то функция handleLinkClick. Функцию
передаем без скобок (), что бы не вызвать её выполнение раньше 
события click */
link.addEventListener('click', handleLinkClick)

/* Передаем в функцию интерфейс event и воспользуемся его методом
preventDefault() для остановки выполнения события по умолчанию */
function handleLinkClick(event) {
    event.preventDefault() // теперь ссылка не отработает

    var div = divs[0]


    /* Дальнейшее условие скроет или отобразит блок div при клике
    на ссылку. */
    /* тернарное выражение:
    если "div.style.display" = true (где true or false это результат выполнения
    условия (div.style.display === 'none')) - тогда в (style.display) записываем
    ('flex'), иначе - записываем ('none')  */
    div.style.display = (div.style.display === 'none') ? 'flex' : 'none'
}






