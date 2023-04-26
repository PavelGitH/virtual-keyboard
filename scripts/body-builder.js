const keyboard = [];

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
}

indexBuild();