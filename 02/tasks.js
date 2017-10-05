/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    (function(i) {
      setTimeout(() => {
        logger(i);
      }, 100);
    })(i);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, args) {

}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {

  if(x === undefined) {
    return 0;
  }

  let result = x;

  return function func(y) {
    if(y === undefined) {
      return result;
    }
    result += y;
    return func;
  }
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  if(first.split('').sort().join('') === second.split('').sort().join('')) {
    return true;
  }
  return false;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  var answer = [];

  answer.push(arr[0]);
  for(let i = 1; i < arr.length; i++){
    if(answer.indexOf(arr[i]) === -1){
      answer.push(arr[i]);
    }
  }
  return  answer.sort();
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {

    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }

  var answer = [];

  first.sort(compareNumeric);
  second.sort(compareNumeric);

  while(first.length !== 0 && second.length !==0) {
    if (first[0] > second[0]) {
      second.shift();
    } else if (first[0] < second[0]) {
      first.shift();
    } else {
      answer.push(first[0]);
      first.shift();
      second.shift();
    }
  }
  return answer.sort(compareNumeric);
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if(left.length !== right.length) {
    return false;
  }

  let flag = 0;

   for(let i = 0; i < left.length; i++) {
    if(left[i] !== right[i]){
      flag++;
    }
  }

  if(flag <= 1) {
    return true;
  }

  return false;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};