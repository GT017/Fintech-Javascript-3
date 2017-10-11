/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const arrayOfResults = [];

    promises.forEach((item, ind) => {
      item.then(result => {
        arrayOfResults[ind] = result;
        if (arrayOfResults.length === promises.length) {
          resolve(arrayOfResults);
        }
      }, error => reject(error));
    });
  });
}

module.exports = promiseAll;
