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

let arrItem = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', 'Del',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39;', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⏶', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '⏴', '⏷', '⏵', 'Ctrl']
for (let i = 0; i < arrItem.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = arrItem[i];
    listItem.className = "list-item";
    if ((i >= 0 && i < 13) || (i >= 15 && i < 28) || (i >= 30 && i < 41) || (i >= 43 && i < 53) || i === 58) {
        listItem.classList.add('symbol');
        // if ((i >= 0 && i <= 11) || (i >= 25 && i <= 27) || i === 39 || i === 40 || (i >= 50 && i <= 52)) {
        // }
        if (arrItem[i] == ' ') {
            listItem.classList.add('space')
        }
        // else { listItem.classList.add('letter'); }
    }
    else {
        listItem.classList.add('func');

        if (arrItem[i] == 'Shift') {
            listItem.classList.add('shift')

        }
        if (arrItem[i] == 'Enter') {
            listItem.classList.add('enter')

        }
        if (arrItem[i] == 'Backspace') {
            listItem.classList.add('backspace')

        }
        if (arrItem[i] == 'Caps Lock') {
            listItem.classList.add('caps')

        }
    }
    list.appendChild(listItem);
}


document.body.append(list);

const symbols = document.querySelectorAll('.symbol');
const listItems = document.querySelectorAll('.list-item');

window.addEventListener("keydown", (e) => {
    listItems.forEach((el, i) => {
        if ((e.key == el.textContent || e.key == el.textContent.toUpperCase()) && el.textContent !== 'Alt' && el.textContent !== 'Shift')
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
            el.classList.add('active')
        }
        if (e.code == 'ShiftRight' && i === 54) {
            el.classList.add('active')
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
    listItems.forEach((el, i) => {
        if (e.key == el.textContent || e.key == el.textContent.toUpperCase()) { el.classList.remove('active') }
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
        // if (e.code == 'CapsLock' && el.textContent == 'Caps Lock') {
        //     el.classList.remove('active')
        // }
    })
})

symbols.forEach(el => {
    el.addEventListener("click", (e) => {
        textarea.value += el.textContent
    })
})
