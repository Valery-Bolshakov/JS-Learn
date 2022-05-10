/* В JS есть различные способы создания функций */


/* Стандартный способ: задаем функцию, название функции и вызываем её */

sayHelloTo('Name')

function sayHelloTo(name) {
  console.log('Привет, ' + name + 
  '. Стандартную функцию можно вызывать и ДО и ПОСЛЕ её написания')
}

sayHelloTo('Name')


/* Другой способ: объявляем переменную и присваиваем ей функцию */
var sayHello = function (name) {
  console.log('Привет, ' + name + 
  '. Присваивая функцию к переменной - её можно вызывать только ПОСЛЕ(ниже) её написания')
}
/* В это случае результат выполнения функции будет помещён в переменную (sayHello)
И следовательно сама переменная темерь будет являться функцией, которую можно вызвать: */
sayHello('Nicname')