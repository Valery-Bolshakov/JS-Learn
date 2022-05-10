/* Взаимодействие с пользователем */

/* получаем доступ до кнопки с id=alert и навешиваем событие по клику с
отработкой функции */
document.querySelector('#alert').addEventListener('click', function() {
    // console.log('qwe');
    /* отработка функции вызовет всплывающее окно метода alert() */
    alert('Вы успешно кликнули по кнопке!')
})



document.querySelector('#confirm').addEventListener('click', function() {
    /* отработка функции вызовет всплывающее окно метода confirm() с вариантами действий*/
    var decision = confirm('Вы уверены в том, что хотите нажать на кнопку?')
    /* При нажатии "Да/нет" возвращается "true/false". С этим можно что то делать: */
    console.log(decision) // true/false

    /* Если в окне confirm нажать ОК то отработает следующее условие */
    if (decision) {
        alert('Вы успешно кликнули по кнопке!')
    }
})



document.querySelector('#prompt').addEventListener('click', function() {
    /* функция вызовет встпывающее окно метода promt() с инпутом.
    информацию из инпута можно сохранить в переменную и работать с ней.
    Вторым параметром можно вводить значение по умолчанию */
    var age = prompt('Введите свой возраст', 18)
  
    if (age >= 18) {
      alert('Вы можете пройти')
    } else {
      alert('Вы еще слишком молоды')
    }
})
  
/* Объект console имеет следующие методы */
console.log('Console.log - для вывода чего угодно')
console.info('Console.info - для вывода обычной информации')
console.warn('Console.warn - для вывода предупреждений')
console.error('Console.error - для вывода ошибок')

/* Ошибки так же можно выводить с помощью конструкции: */
/* throw new Error(['Error']) - единственный минус что этот метод действительно
выкидывает ошибку и останавливает выполнение кода */





  
  
  