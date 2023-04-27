"use strict"

let textarea = document.createElement('textarea');
textarea.className = "textarea";
document.body.append(textarea);

let list = document.createElement('ul');
list.className = "list";

let arrItem = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#8260;', 'Del',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39;', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⏶', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '⏴', '⏷', '⏵', 'Ctrl']
for (let i = 0; i < arrItem.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = arrItem[i];
    listItem.className = "list-item";
    if ((i >= 0 && i < 13) || (i >= 15 && i < 28) || (i >= 30 && i < 41) || (i >= 43 && i < 53) || i === 58) {
        if ((i >= 0 && i <= 11) || (i >= 25 && i <= 27) || i === 39 || i === 40 || (i >= 50 && i <= 52)) {
            listItem.classList.add('symbol');
        }
        if (arrItem[i] == ' ') {
            listItem.classList.add('space')
        }
        else { listItem.classList.add('letter'); }
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
