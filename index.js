"use strict"

let title = document.createElement('header');
title.className = "header";
title.innerText = 'Virtual keyboard';
document.body.appendChild(title);

let textarea = document.createElement('textarea');
textarea.className = "textarea";
textarea.placeholder = "Клавиатура создана в опеpационной системе Windows. Для переключения языка нажмите Alt + Shift"
document.body.append(textarea);

let list = document.createElement('ul');
list.className = "list";

let listItemEn = [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'Backspace',
    'Tab', ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['&#92;', '|'], 'Del',
    'Caps Lock', ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ['&#39;', '"'], 'Enter',
    'Shift', ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], '⏶', 'Shift',
    'Ctrl', 'Win', 'Alt', [' '], 'Alt', '⏴', '⏷', '⏵', 'Ctrl'];

// let listItemEnUp = {
//     0: '~', 1: '!', 2: '@', 3: '#', 4: '$', 5: '%', 6: '^', 7: '&', 8: '*', 9: '(', 10: ')', 11: '_', 12: '+',
//     23: '{', 24: '}', 25: '|', 35: ':', 36: '""', 44: '<', 45: '>', 46: '?'
// }


function createKeyboard(arr) {
    arr.forEach(el => {
        let listItem = document.createElement('li');
        listItem.className = "list-item";
        if (Array.isArray(el)) {
            listItem.classList.add('symbol');
            if (el.length === 1) {
                listItem.classList.add('space')
            }
            el.forEach((item, index) => {
                let listItemSpan = document.createElement('span');
                listItemSpan.innerHTML = item;
                listItemSpan.className = "span";
                if (index === 1)
                    listItemSpan.classList.add('off');
                if (index === 0)
                    listItemSpan.classList.add('on')
                listItem.appendChild(listItemSpan);
            });

        }
        else {
            listItem.innerHTML = el;
            listItem.classList.add('func');
            if (el == 'Shift') {
                listItem.classList.add('shift')

            }
            if (el == 'Enter') {
                listItem.classList.add('enter')

            }
            if (el == 'Backspace') {
                listItem.classList.add('backspace')

            }
            if (el == 'Caps Lock') {
                listItem.classList.add('caps')

            }
        }
        list.appendChild(listItem);
    })

    // for (let i = 0; i < arr.length; i++) {
    //     let listItem = document.createElement('li');
    //     listItem.innerHTML = arr[i];
    //     listItem.className = "list-item";
    //     if ((i >= 0 && i < 13) || (i >= 15 && i < 28) || (i >= 30 && i < 41) || (i >= 43 && i < 53) || i === 58) {
    //         listItem.classList.add('symbol');
    //         if (arr[i] == ' ') {
    //             listItem.classList.add('space')
    //         }
    //     }
    //     else {
    //         listItem.classList.add('func');

    //         if (arr[i] == 'Shift') {
    //             listItem.classList.add('shift')

    //         }
    //         if (arr[i] == 'Enter') {
    //             listItem.classList.add('enter')

    //         }
    //         if (arr[i] == 'Backspace') {
    //             listItem.classList.add('backspace')

    //         }
    //         if (arr[i] == 'Caps Lock') {
    //             listItem.classList.add('caps')

    //         }
    //     }
    //     list.appendChild(listItem);
    // }

    return document.body.append(list);
}

createKeyboard(listItemEn)

const symbols = document.querySelectorAll('.symbol');
const listItems = document.querySelectorAll('.list-item');
const symbolsSpan = document.querySelectorAll('.span');
const symbolSpanOn = document.querySelectorAll('.on')

window.addEventListener("keydown", (e) => {
    symbolSpanOn.forEach(item => {
        if (e.key == item.textContent || e.key == item.textContent.toLocaleUpperCase()) {
            item.parentElement.classList.add('active')
        }
    })
    listItems.forEach((el, i) => {
        if ((e.key == el.textContent) && el.textContent !== 'Alt' && el.textContent !== 'Shift')
            el.classList.add('active');
        if (e.code == 'ControlLeft' && el.textContent == 'Ctrl' && i === 55) {
            el.classList.add('active')
        }
        if (e.code == 'ControlRight' && el.textContent == 'Ctrl' && i === 63) {
            el.classList.add('active')
        }
        if (e.key == 'Meta' && el.textContent == 'Win') {
            el.classList.add('active')
        }
        if (e.code == 'Delete' && el.textContent == 'Del') {
            el.classList.add('active')
        }
        if (e.code == 'Backslash' && el.textContent == '&#92;') {
            el.classList.add('active')
        }
        if (e.code == 'ArrowUp' && i === 53) {
            el.classList.add('active')
        }
        if (e.code == 'ArrowLeft' && i === 60) {
            el.classList.add('active')
        }
        if (e.code == 'ArrowDown' && i === 61) {
            el.classList.add('active')
        }
        if (e.code == 'ArrowRight' && i === 62) {
            el.classList.add('active')
        }
        if (e.code == 'CapsLock' && el.textContent == 'Caps Lock') {
            el.classList.toggle('active')
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
            el.classList.add('active')
        }
        if (e.code == 'AltRight' && i === 59) {
            el.classList.add('active')
        }
    })
});

window.addEventListener("keyup", (e) => {
    symbolSpanOn.forEach(item => {
        if (e.key == item.textContent || e.key == item.textContent.toLocaleUpperCase()) {
            item.parentElement.classList.remove('active')
        }
    })
    listItems.forEach((el, i) => {
        if (e.key == el.textContent) {
            el.classList.remove('active')
        }
        if (e.key == 'Control' && el.textContent == 'Ctrl') {
            el.classList.remove('active')
        }
        if (e.key == 'Meta' && el.textContent == 'Win') {
            el.classList.remove('active')
        }
        if (e.code == 'Delete' && el.textContent == 'Del') {
            el.classList.remove('active')
        }
        if (e.code == 'Backslash' && el.textContent == '&#92;') {
            el.classList.remove('active')
        }
        if (e.code == 'ArrowUp' && i === 53) {
            el.classList.remove('active')
        }
        if (e.code == 'ArrowLeft' && i === 60) {
            el.classList.remove('active')
        }
        if (e.code == 'ArrowDown' && i === 61) {
            el.classList.remove('active')
        }
        if (e.code == 'ArrowRight' && i === 62) {
            el.classList.remove('active')
        }
        if (e.code == 'ShiftLeft' && i === 42) {
            shiftToDo();
        }
        if (e.code == 'ShiftRight' && i === 54) {
            shiftToDo();
        }

    })
})

symbols.forEach(el => {
    el.addEventListener('click', (e) => {
        for (let child of el.children) {
            if (child.classList.contains('on'))
                textarea.value += child.textContent
        }
    })
})

const shift = document.querySelectorAll('.shift')

function shiftToDo() {
    symbolsSpan.forEach(el => {
        if (el.classList.contains('on') && el.textContent !== ' ') {
            el.classList.remove('on');
            el.classList.add('off')
        }
        else if (el.classList.contains('off')) {
            el.classList.remove('off');
            el.classList.add('on')
        }

    })
}

shift.forEach(el => {
    el.addEventListener('mousedown', shiftToDo)
})
shift.forEach(el => {
    el.addEventListener('mouseup', shiftToDo)
})


