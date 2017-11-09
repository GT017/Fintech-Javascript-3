/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function throttle(time, callback) {
  let state = false;

  return (...args) => {
    if (state) {
      return;
    }
    callback.apply(this, args);
    state = true;
    setTimeout(function() {
      state = false;
    }, time);
  };
}

module.exports = { throttle };
