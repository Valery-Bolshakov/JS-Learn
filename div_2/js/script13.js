var str1 = 'Hello, world'
console.log(str1)

var str2 = "Hello world 2"
console.log(str2)

var personName = 'Name'
var message = 'Человека зовут "' + personName + '"'
console.log(message)

/* Экранирование символов в строке: */
var message2 = 'Человека зовут \'' + personName + '\''
console.log(message2)


/* Функции работы со строками: */
var newMessage = 'Hello World!'

/* .length - длина строки */
console.log(newMessage.length)  // 11

/* .toUpperCase() - Метод для перевода строки в Верхний регистр */
console.log(newMessage.toUpperCase())  // HELO WORLD!

/* .toLowerCase() - Метод для перевода строки в Нижний регистр */
console.log(newMessage.toLowerCase())  // helo world!

/* .charAt() - Метод для получения символа строки заданной позиции */
console.log(newMessage.charAt(7))  // W

/* .indexOf() - Метод возвращает позицию элемента с которого нашлось совпадение
    если совпадение НЕ найдено - возвращает "-1" */
console.log(newMessage.indexOf('orl'))  // 7

/* .substring() - Метод  возвращает срез строки (начало среза, конец среза(можно не указывать))*/
console.log(newMessage.substring(1, 4))  // ell
console.log(newMessage.substring(3, 8))  // lo Wo
console.log(newMessage.substring(6))  // World!
console.log(newMessage.substring(6).toUpperCase())  // WORLD!





