const title = document.createElement('header');
title.className = 'header';
title.innerText = 'Virtual keyboard';
document.body.appendChild(title);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.placeholder = 'Клавиатура создана в опеpационной системе Windows. Для переключения языка нажмите левый Alt + Ctrl';
document.body.append(textarea);

const listItemEn = [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'Backspace',
  'Tab', ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['&#92;', '|'], 'Del',
  'Caps Lock', ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ['&#39;', '"'], 'Enter',
  'Shift', ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], '⏶', 'Shift',
  'Ctrl', 'Win', 'Alt', [' '], 'Alt', '⏴', '⏷', '⏵', 'Ctrl'];

const listItemRu = [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'Backspace',
  'Tab', ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['&#92;', '/'], 'Del',
  'Caps Lock', ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], 'Enter',
  'Shift', ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ','], '⏶', 'Shift',
  'Ctrl', 'Win', 'Alt', [' '], 'Alt', '⏴', '⏷', '⏵', 'Ctrl'];

let isEn = localStorage.getItem('isEn') ? (localStorage.getItem('isEn') == 'true') : true;

function createKeyboard(arr) {
  const list = document.createElement('ul');
  list.className = 'list';
  arr.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    if (Array.isArray(el)) {
      listItem.classList.add('symbol');
      if (el.length === 1) {
        listItem.classList.add('space');
      }
      el.forEach((item, index) => {
        const listItemSpan = document.createElement('span');
        listItemSpan.innerHTML = item;
        listItemSpan.className = 'span';
        if (index === 1) { listItemSpan.classList.add('off'); }
        if (index === 0) { listItemSpan.classList.add('on'); }
        listItem.appendChild(listItemSpan);
      });
    } else {
      listItem.innerHTML = el;
      listItem.classList.add('func');
      if (el == 'Shift') {
        listItem.classList.add('shift');
      }
      if (el == 'Enter') {
        listItem.classList.add('enter');
      }
      if (el == 'Backspace') {
        listItem.classList.add('backspace');
      }
      if (el == 'Caps Lock') {
        listItem.classList.add('caps');
      }
      if (el == 'Tab') {
        listItem.classList.add('tab');
      }
      if (el == 'Del') {
        listItem.classList.add('del');
      }
      if (el == '⏴') {
        listItem.classList.add('arrow-left');
      }
      if (el == '⏷') {
        listItem.classList.add('arrow-down');
      }
      if (el == '⏵') {
        listItem.classList.add('arrow-right');
      }
      if (el == '⏶') {
        listItem.classList.add('arrow-up');
      }
    }
    list.appendChild(listItem);
  });
  document.body.append(list);
}
createKeyboard(listItemEn);
createKeyboard(listItemRu);

const lists = document.querySelectorAll('.list');
let listItems;

function whichLanguge() {
  if (isEn === true) {
    lists.forEach((el, i) => {
      if (i === 1) {
        el.classList.remove('ul-on');
        el.classList.add('off');
      } else {
        el.classList.remove('off');
        el.classList.add('ul-on');
      }
    });
  }
  if (isEn === false) {
    lists.forEach((el, i) => {
      if (i === 0) {
        el.classList.remove('ul-on');
        el.classList.add('off');
      } else {
        el.classList.remove('off');
        el.classList.add('ul-on');
      }
    });
  }
  listItems = document.querySelectorAll('.ul-on > li');
}

whichLanguge();

const symbols = document.querySelectorAll('.symbol');
const symbolsSpan = document.querySelectorAll('.span');
const symbolSpanOn = document.querySelectorAll('li > .on');

window.addEventListener('keydown', (e) => {
  textarea.focus();
  // textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  symbolSpanOn.forEach((item) => {
    if (e.key == item.textContent || e.key == item.textContent.toLocaleUpperCase()) {
      item.parentElement.classList.add('active');
    }
  });
  listItems.forEach((el, i) => {
    if ((e.key == el.textContent) && el.textContent !== 'Alt' && el.textContent !== 'Shift' && el.textContent !== 'Tab') { el.classList.add('active'); }
    if (e.code == 'ControlLeft' && el.textContent == 'Ctrl' && i === 55) {
      el.classList.add('active');
    }
    if (e.code == 'ControlRight' && el.textContent == 'Ctrl' && i === 63) {
      el.classList.add('active');
    }
    if (e.key == 'Meta' && el.textContent == 'Win') {
      el.classList.add('active');
    }
    if (e.code == 'Delete' && el.textContent == 'Del') {
      el.classList.add('active');
    }
    if (e.code == 'Backslash' && el.textContent == '&#92;') {
      el.classList.add('active');
    }
    if (e.code == 'ArrowUp' && i === 53) {
      el.classList.add('active');
    }
    if (e.code == 'ArrowLeft' && i === 60) {
      el.classList.add('active');
    }
    if (e.code == 'ArrowDown' && i === 61) {
      el.classList.add('active');
    }
    if (e.code == 'ArrowRight' && i === 62) {
      el.classList.add('active');
    }
    if (e.code == 'CapsLock' && el.textContent == 'Caps Lock') {
      capsToDo();
    }
    if (e.code == 'ShiftLeft' && i === 42) {
      el.classList.add('active');
      shiftToDo();
    }
    if (e.code == 'ShiftRight' && i === 54) {
      el.classList.add('active');
      shiftToDo();
    }
    if (e.code == 'AltLeft' && i === 57) {
      e.preventDefault();
      el.classList.add('active');
    }
    if (e.code == 'AltRight' && i === 59) {
      e.preventDefault();
      el.classList.add('active');
    }
    if (e.code == 'Tab' && el.textContent == 'Tab') {
      e.preventDefault();
      el.classList.add('active');
      tabToDo();
    }
  });
});

window.addEventListener('keyup', (e) => {
  symbolSpanOn.forEach((item) => {
    if (e.key == item.textContent || e.key == item.textContent.toLocaleUpperCase()) {
      item.parentElement.classList.remove('active');
    }
  });
  listItems.forEach((el, i) => {
    if (e.key == el.textContent) {
      el.classList.remove('active');
    }
    if (e.key == 'Control' && el.textContent == 'Ctrl') {
      el.classList.remove('active');
    }
    if (e.key == 'Meta' && el.textContent == 'Win') {
      el.classList.remove('active');
    }
    if (e.code == 'Delete' && el.textContent == 'Del') {
      el.classList.remove('active');
    }
    if (e.code == 'Backslash' && el.textContent == '&#92;') {
      el.classList.remove('active');
    }
    if (e.code == 'ArrowUp' && i === 53) {
      el.classList.remove('active');
    }
    if (e.code == 'ArrowLeft' && i === 60) {
      el.classList.remove('active');
    }
    if (e.code == 'ArrowDown' && i === 61) {
      el.classList.remove('active');
    }
    if (e.code == 'ArrowRight' && i === 62) {
      el.classList.remove('active');
    }
    if (e.code == 'ShiftLeft' && i === 42) {
      shiftToDo();
    }
    if (e.code == 'ShiftRight' && i === 54) {
      shiftToDo();
    }
  });
});

symbols.forEach((el) => {
  el.addEventListener('click', (e) => {
    textarea.focus();
    for (const child of el.children) {
      if (child.classList.contains('on')) { textarea.value += child.textContent; }
    }
  });
});

const shift = document.querySelectorAll('.shift');

function shiftToDo() {
  symbolsSpan.forEach((el) => {
    if (el.classList.contains('on') && el.textContent !== ' ') {
      el.classList.remove('on');
      el.classList.add('off');
    } else if (el.classList.contains('off')) {
      el.classList.remove('off');
      el.classList.add('on');
    }
  });
}

shift.forEach((el) => {
  el.addEventListener('mousedown', shiftToDo);
});
shift.forEach((el) => {
  el.addEventListener('mouseup', shiftToDo);
});

const caps = document.querySelectorAll('.caps');

function capsToDo() {
  caps.forEach((el) => {
    el.classList.toggle('active');

    const regexp = /[a-zа-яё]/i;
    symbolSpanOn.forEach((item) => {
      if (regexp.test(item.textContent)) {
        if (el.classList.contains('active')) { item.textContent = item.textContent.toLocaleUpperCase(); } else item.textContent = item.textContent.toLocaleLowerCase();
      }
    });
  });
}

caps.forEach((el) => {
  el.addEventListener('click', capsToDo);
});

const keyMap = {};

document.addEventListener('keydown', (e1) => {
  keyMap[e1.code] = true;
  if (keyMap.ControlLeft && keyMap.AltLeft) {
    isEn = !isEn;
    localStorage.setItem('isEn', isEn);
    whichLanguge();
  }
});

document.addEventListener('keyup', (e) => {
  delete keyMap[e.code];
});

const tab = document.querySelector('.tab');

const tabToDo = () => {
  textarea.focus();
  textarea.value += '   ';
};

tab.addEventListener('click', tabToDo);

const del = document.querySelector('.del');
const backspace = document.querySelector('.backspace');

const backspaceToDo = () => {
  textarea.focus();
  const start = textarea.selectionStart - 1;
  textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionStart);
  textarea.setSelectionRange(start, start);
};

const deleteToDo = () => {
  textarea.focus();
  const start = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionStart + 1);
  textarea.setSelectionRange(start, start);
};

backspace.addEventListener('click', backspaceToDo);
del.addEventListener('click', deleteToDo);

const enter = document.querySelector('.enter');

const enterToDo = () => {
  textarea.focus();
  textarea.value += '\n';
};

enter.addEventListener('click', enterToDo);

const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const arrowLeftToDo = () => {
  textarea.focus();
  const start = textarea.selectionStart - 1;
  textarea.setSelectionRange(start, start);
};

arrowLeft.addEventListener('click', arrowLeftToDo);

const arrowRightToDo = () => {
  textarea.focus();
  const start = textarea.selectionStart + 1;
  textarea.setSelectionRange(start, start);
};

arrowRight.addEventListener('click', arrowRightToDo);

const arrowDownToDo = () => {
  textarea.focus();
  const start = textarea.selectionStart;
  if (textarea.value.includes('\n') && textarea.value.indexOf('\n', start) >= start) {
    textarea.setSelectionRange(textarea.value.indexOf('\n', start) + 1, textarea.value.indexOf('\n', start) + 1);
  } else textarea.setSelectionRange(textarea.value.length, textarea.value.length);
};

arrowDown.addEventListener('click', arrowDownToDo);

const arrowUpToDo = () => {
  textarea.focus();
  const start = textarea.selectionStart;
  console.log('\\n ', textarea.value.lastIndexOf('\n', start - 1));
  console.log('start ', start);
  if (textarea.value.includes('\n') && (textarea.value.lastIndexOf('\n', start - 1) < start && textarea.value.lastIndexOf('\n', start - 1) != -1)) {
    const counter = textarea.value.slice(0, start).split('\n').reverse();
    textarea.setSelectionRange(start - counter[0].length - counter[1].length - 1, start - counter[0].length - counter[1].length - 1);
  } else textarea.setSelectionRange(0, 0);
};

arrowUp.addEventListener('click', arrowUpToDo);
