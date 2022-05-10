/*

  && (и) - true если все значения true
  При сопоставлении двух значений смотрим на их пересечение в таблице - это
  и будет результатом операции:

    &&  | true  | false
  true  | true  | false
  false | false | false


  || (или) - true если хоть одно значение true
  При сопоставлении двух значений смотрим на их пересечение в таблице - это
  и будет результатом операции:

    ||  | true  | false
  true  | true  | true
  false | true  | false

  
  ! (нет) - инвертирует true или false (меняет значение на противоположное)
*/

console.log('true && true =', true && true)  // true
console.log('true && false =', true && false)  // false

console.log('true || false =', true || false)  // true
console.log('false || false =', false || false)  // false

console.log('!false =', !false)  // true
console.log('!!!true =', !!!true) // !!!true => !!false => !true => false

console.log('(false && true) || (true || false) || !true =', (false && true) || (true || false) || !true) 
//                false      ||      true       || false => true