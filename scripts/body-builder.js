const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119,
  101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46, 0, 97, 115, 100, 102, 103,
  104, 106, 107, 108, 59, 39, 13, 16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38,
  16, 17, 1000, 18, 32, 18, 37, 40, 39, 17];

function initKeyboard() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    out += '<div class="key">' + String.fromCharCode(keyboard[i]) + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = out;
}

function indexBuild() {
  let body = document.querySelector('body');

  let main = document.createElement('main');
  body.append(main);

  let h1 = document.createElement('h1');
  main.append(h1);
  h1.classList.add('title');
  h1.innerText = `RSS Virtual Keyboard`;

  let textArea = document.createElement('textarea');
  main.append(textArea);
  textArea.classList.add('text_area');
  textArea.setAttribute('id', 'textArea');

  let keyboard = document.createElement('div');
  main.append(keyboard);
  keyboard.classList.add('keyboard');

  let description = document.createElement('p');
  main.append(description);
  description.classList.add('description');
  description.innerText = `The keyboard was created in the Windows operating system.`;

  let language = document.createElement('p');
  main.append(language);
  language.classList.add('language');
  language.innerText = `To switch the language, the combination is: shift + alt.`;

  initKeyboard();
}

indexBuild();
