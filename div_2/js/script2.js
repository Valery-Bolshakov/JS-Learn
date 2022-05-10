/* 
  Number - числа
  String - строки
  Boolean - true or false
  Object - объекты (самый основной тип данных)
  Null - null
  Undefined - undefined
*/

var num = 42  // числовой тип данных
var string = 'Message'  // строковый тип данных
var isTrue = false  // Boolean
var obj = {a: 1}  // объектный тип данных
var nothing = null  //  тип данных null (что то определено но ничего не значит)
var undef = undefined  //  тип данных undefined

/* выводим переменную в консоль:
Оператор typeof выводит тип переменной
первый вариант написания оператора */
console.log(typeof obj)  // object - предпочтительный вариант написания

// второй вариант написания оператора
console.log(typeof(num))  // number