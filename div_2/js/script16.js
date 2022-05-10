/* Объекты:

объекты задаются с помощью {} скобочек */
var anyObject = {}
console.log(anyObject) // {}

/* Создаем и заполняем объект person:
заполняем элементами по правилу - "ключ: значение"
или заполняем методами, которые выполняют какой то код */
var person = {
    name: 'Name1',
    year: 1990,
    family: ['Name2', 'Name3'],
    car: {
      year: 2010,
      model: 'Ford'
    },
    /* Элемент - Метод: */
    calcAge: function() {
        /* создаем и добавляем элемент 'age' который равен '2022 - person.year' */
        this.age = 2022 - this.year // = person.year
      console.log('Возраст ' + this.age)

      /* var age = 2022 - this.year
      console.log('Возраст ' + age) */
    }
  }
  
  /* Варианты обращений к элементам объекта: */
  console.log(person) // Выводит всё содержимое объекта
  console.log(person.name) // 'Name1' - Выводит значение по ключу "name" (Первый вариант запроса)
  console.log(person['year']) // 1990 - Выводит значение по ключу "year" (Второй вариант запроса)

  var field = 'car'
  console.log(person[field].year) // Запрос person->car->year - получим значение '2010' по ключу 'year'
  
  /* Замена элемента объекта */
  person.year = 1993 // меняем 'year: 1990' на 'year: 1993'
  
  console.log(person) // {name: 'Name1', year: 1993, family: Array(2), car: {…}, calculateAge: ƒ}
  
  /* Обращаемся к элементу который является методом и он вернёт результат
  выполенния метода */
  person.calcAge() // Возраст 29
  
  console.log(person) // 'Name1', year: 1993, family: Array(2), car: {…}, calcAge: ƒ, …} age: 29
  