const keyboardButtonsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardButtonsRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const text = [];
let lang = [];

if (localStorage.language === 'rus') {
  lang = keyboardButtonsRus;
} else {
  lang = keyboardButtonsEng;
  localStorage.setItem('language', 'eng');
}

function initKeyboard() {
  const fragment = document.createDocumentFragment();

  lang.forEach((elem) => {
    const button = document.createElement('div');
    button.classList.add('key');

    switch (elem) {
      case 'Alt':
        button.classList.add('alt');
        button.innerHTML = 'Alt';
        break;
      case 'Backspace':
        button.classList.add('backspace');
        button.innerHTML = 'Backspace';
        break;
      case 'CapsLock':
        button.classList.add('caps');
        button.innerHTML = 'CapsLock';
        break;
      case 'Ctrl':
        button.classList.add('ctrl');
        button.innerHTML = 'Ctrl';
        break;
      case 'Enter':
        button.classList.add('enter');
        button.innerHTML = 'Enter';
        break;
      case 'Shift':
        button.classList.add('shift');
        button.innerHTML = 'Shift';
        break;
      case 'Space':
        button.classList.add('space');
        button.innerText = ' ';
        break;
      case 'Tab':
        button.classList.add('tab');
        button.innerHTML = 'Tab';
        break;

      default:
        button.innerText = elem;
        button.classList.add('key-simple');
        break;
    }

    fragment.append(button);
  });

  return fragment;
}

function indexBuild() {
  const body = document.querySelector('body');

  const main = document.createElement('main');
  body.append(main);

  const h1 = document.createElement('h1');
  main.append(h1);
  h1.classList.add('title');
  h1.innerText = 'RSS Virtual Keyboard';

  const textArea = document.createElement('textarea');
  main.append(textArea);
  textArea.classList.add('text_area');
  textArea.setAttribute('id', 'textArea');

  const keyboard = document.createElement('div');
  main.append(keyboard);
  keyboard.classList.add('keyboard');
  keyboard.setAttribute('id', 'keyboard');
  keyboard.append(initKeyboard());

  const description = document.createElement('p');
  main.append(description);
  description.classList.add('description');
  description.innerText = 'The keyboard was created in the Windows operating system.';

  const languages = document.createElement('p');
  main.append(languages);
  languages.classList.add('languages');
  languages.innerText = 'To switch the language, the combination is: shift + alt.';
}

function mouseInput() {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('key-simple')) {
      text.push(event.target.innerText);
    }
    if (event.target.classList.contains('space')) {
      text.push(' ');
    }
    if (event.target.classList.contains('enter')) {
      text.push('\n');
      document.querySelector('textarea').innerHTML = ('br');
    }
    if (event.target.classList.contains('tab')) {
      text.push('    ');
    }
    if (event.target.classList.contains('backspace')) {
      text.splice(text.length - 1, 1);
    }
    localStorage.text = text.join('');
    document.querySelector('textarea').innerHTML = localStorage.text;
  });
}

indexBuild();
mouseInput();
