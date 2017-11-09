const inputElement = document.querySelector('.phone');
const linkElement = document.querySelector('.link');

function linkUpdate() {
  if (inputElement.value.length === '+7 (___) ___-__-__'.length) {
    linkElement.href = `tel:${inputElement.value}`;
    linkElement.textContent = `Позвонить на ${inputElement.value}`;
  }
}

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) {
    elem.setSelectionRange(pos, pos);
  } else if (elem.createTextRange) {
    let range = elem.createTextRange();

    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function mask(event) {
  let matrix = '+7 (___) ___-__-__';
  let i = 0;
  const  def = matrix.replace(/\D/g, '');
  let val = this.value.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || '_';
  });

  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));

  ((i < matrix.length) && (matrix !== this.defaultValue)) ? i++ : i = matrix.indexOf('_');
  if (val.length > 11) {
    setCursorPosition('+7 (___) ___-__-__'.length, this);
  } else {
    setCursorPosition(i, this);
  }
  linkUpdate();
}

inputElement.addEventListener('input', mask, false);
inputElement.addEventListener('focus', mask, false);
inputElement.addEventListener('blur', mask, false);
