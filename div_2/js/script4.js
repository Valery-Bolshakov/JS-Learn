var result = 12 - 6 / 3
var result2 = (3 + 4) * 2

var isGreater = 20 - 6 * 3 >= 4
var isGreater2 = 20 - 6 * 3 >= 1
/*             3    13  14  11    - коэффициенты приоритетов операций. Выполнение
происходит он наивысшего коэффициента к наименьшему 14->13->11->3 */

console.log('12 - 6 / 3 =', result)  // 10
console.log('(3 + 4) * 2 =', result2)  // 14
console.log('20 - 6 * 3 >= 4:', isGreater)  // 2 >= 4 false
console.log('20 - 6 * 3 >= 1:', isGreater2)  // 2 >= 1 true