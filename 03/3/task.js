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
    let counter = 0;

    promises.forEach((item, ind) => {
      item.then(result => {
        arrayOfResults[ind] = result;
        counter++;
        if (counter === promises.length) {
          resolve(arrayOfResults);
        }
      }, reject(new Error()));
    });
  });
}

module.exports = promiseAll;
