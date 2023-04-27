const keyboardButtonsEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'
];

function initKeyboard() {
  let out = '';
  for (let i = 0; i < keyboardButtonsEn.length; i += 1) {
    out += `<div class="key">${keyboardButtonsEn[i]}</div>`;
  }
  document.querySelector('.keyboard').innerHTML = out;
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

  const description = document.createElement('p');
  main.append(description);
  description.classList.add('description');
  description.innerText = 'The keyboard was created in the Windows operating system.';

  const language = document.createElement('p');
  main.append(language);
  language.classList.add('language');
  language.innerText = 'To switch the language, the combination is: shift + alt.';

  initKeyboard();
}

indexBuild();
