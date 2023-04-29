const keyboardButtonsEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardButtonsEngShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '< ', '>', '?', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardButtonsRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const keyboardButtonsRusShift = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
const text = [];
let lang = [];

if (localStorage.language === 'rus') {
  lang = keyboardButtonsRus;
} else {
  lang = keyboardButtonsEng;
  localStorage.setItem('language', 'eng');
}

function toggleCaps() {
  const letters = document.querySelectorAll('.key-simple');
  const capsLock = document.querySelector('.caps');
  if (capsLock.classList.contains('caps-on')) {
    letters.forEach((element) => {
      // the letter variable is introduced to work around the eslint bug;
      const letter = element;
      letter.innerText = letter.innerText.toUpperCase();
    });
  } else {
    letters.forEach((element) => {
      // the letter variable is introduced to work around the eslint bug;
      const letter = element;
      letter.innerText = letter.innerText.toLowerCase();
    });
  }
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
        button.innerText = 'Space';
        break;
      case 'Tab':
        button.classList.add('tab');
        button.innerHTML = 'Tab';
        break;
      case 'Win':
        button.classList.add('win');
        button.innerHTML = 'Win';
        break;
      case '↑':
        button.classList.add('up');
        button.innerHTML = '↑';
        break;
      case '←':
        button.classList.add('left');
        button.innerHTML = '←';
        break;
      case '→':
        button.classList.add('right');
        button.innerHTML = '→';
        break;
      case '↓':
        button.classList.add('down');
        button.innerHTML = '↓';
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
  languages.innerText = 'To switch the language, the combination is: CtrlLeft + AltLeft.';
}

function render() {
  localStorage.text = text.join('');
  document.querySelector('textarea').innerHTML = localStorage.text;
}

function mouseInput() {
  const capsLock = document.querySelector('.caps');
  const button = document.querySelectorAll('.key');
  document.addEventListener('mousedown', (event) => {
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
    if (event.target.classList.contains('up')) {
      text.push('↑');
    }
    if (event.target.classList.contains('right')) {
      text.push('→');
    }
    if (event.target.classList.contains('left')) {
      text.push('←');
    }
    if (event.target.classList.contains('down')) {
      text.push('↓');
    }
    if (event.target.classList.contains('shift')) {
      if (localStorage.language === 'eng') {
        if (capsLock.classList.contains('caps-on')) {
          lang = keyboardButtonsEngShift;
          for (let i = 0; i < button.length; i += 1) {
            button[i].innerHTML = lang[i];
          }
          capsLock.classList.remove('caps-on');
          toggleCaps();
        } else {
          lang = keyboardButtonsEngShift;
          for (let i = 0; i < button.length; i += 1) {
            button[i].innerHTML = lang[i];
          }
          capsLock.classList.add('caps-on');
          toggleCaps();
        }
      }
    }
    if (localStorage.language === 'rus') {
      if (capsLock.classList.contains('caps-on')) {
        lang = keyboardButtonsRusShift;
        for (let i = 0; i < button.length; i += 1) {
          button[i].innerHTML = lang[i];
        }
        capsLock.classList.remove('caps-on');
        toggleCaps();
      } else {
        lang = keyboardButtonsRusShift;
        for (let i = 0; i < button.length; i += 1) {
          button[i].innerHTML = lang[i];
        }
        capsLock.classList.add('caps-on');
        toggleCaps();
      }
    }
    render();
  });
  document.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('shift')) {
      if (localStorage.language === 'eng') {
        if (capsLock.classList.contains('caps-on')) {
          lang = keyboardButtonsEng;
          for (let i = 0; i < button.length; i += 1) {
            button[i].innerHTML = lang[i];
          }
          capsLock.classList.remove('caps-on');
          toggleCaps();
        } else {
          lang = keyboardButtonsEng;
          for (let i = 0; i < button.length; i += 1) {
            button[i].innerHTML = lang[i];
          }
          capsLock.classList.add('caps-on');
          toggleCaps();
        }
      }
      if (localStorage.language === 'rus') {
        if (capsLock.classList.contains('caps-on')) {
          lang = keyboardButtonsRus;
          for (let i = 0; i < button.length; i += 1) {
            button[i].innerHTML = lang[i];
          }
          capsLock.classList.remove('caps-on');
          toggleCaps();
        } else {
          lang = keyboardButtonsRus;
          for (let i = 0; i < button.length; i += 1) {
            button[i].innerHTML = lang[i];
          }
          capsLock.classList.add('caps-on');
          toggleCaps();
        }
      }
    }
  });
}

function capsLockToggle() {
  const capsLock = document.querySelector('.caps');
  capsLock.addEventListener('click', () => {
    capsLock.classList.toggle('caps-on');
    toggleCaps();
  });
}

function keyboardInput() {
  const capsLock = document.querySelector('.caps');
  const button = document.querySelectorAll('.key');
  const buttons = document.querySelectorAll('.key');

  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    buttons.forEach((element) => {
      if (element.innerHTML === event.key) {
        element.classList.add('key_press');
      }
      if (element.innerHTML === 'Ctrl' && event.key === 'Control') {
        element.classList.add('key_press');
      }
      if (element.innerHTML === '↑' && event.key === 'ArrowUp') {
        element.classList.add('key_press');
      }
      if (element.innerHTML === '→' && event.key === 'ArrowRight') {
        element.classList.add('key_press');
      }
      if (element.innerHTML === '←' && event.key === 'ArrowLeft') {
        element.classList.add('key_press');
      }
      if (element.innerHTML === '↓' && event.key === 'ArrowDown') {
        element.classList.add('key_press');
      }
      if (element.innerHTML === 'Space' && event.key === ' ') {
        element.classList.add('key_press');
      }
    });
    switch (event.key) {
      case ' ':
        text.push(' ');
        break;
      case 'Enter':
        text.push('\n');
        break;
      case 'Backspace':
        text.splice(text.length - 1, 1);
        render();
        break;
      case 'Shift':
        if (localStorage.language === 'eng') {
          if (capsLock.classList.contains('caps-on')) {
            lang = keyboardButtonsEngShift;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.remove('caps-on');
            toggleCaps();
          } else {
            lang = keyboardButtonsEngShift;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.add('caps-on');
            toggleCaps();
          }
        }
        if (localStorage.language === 'rus') {
          if (capsLock.classList.contains('caps-on')) {
            lang = keyboardButtonsRusShift;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.remove('caps-on');
            toggleCaps();
          } else {
            lang = keyboardButtonsRusShift;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.add('caps-on');
            toggleCaps();
          }
        }
        render();
        break;
      case 'Alt':
        break;
      case 'Meta':
        break;
      case 'Control':
        break;
      case 'ArrowUp':
        text.push('↑');
        render();
        break;
      case 'ArrowRight':
        text.push('→');
        render();
        break;
      case 'ArrowLeft':
        text.push('←');
        render();
        break;
      case 'ArrowDown':
        text.push('↓');
        render();
        break;
      case 'Tab':
        text.push('    ');
        render();
        break;
      case 'CapsLock':
        if (event.getModifierState('CapsLock')) {
          capsLock.classList.add('caps-on');
          toggleCaps();
          break;
        } else {
          capsLock.classList.remove('caps-on');
          toggleCaps();
          break;
        }
      default:
        text.push(event.key);
        render();
        break;
    }
  });

  window.addEventListener('keyup', (event) => {
    buttons.forEach((element) => {
      if (element.innerHTML === event.key) {
        element.classList.remove('key_press');
      }
      if (element.innerHTML === 'Ctrl' && event.key === 'Control') {
        element.classList.remove('key_press');
      }
      if (element.innerHTML === '↑' && event.key === 'ArrowUp') {
        element.classList.remove('key_press');
      }
      if (element.innerHTML === '→' && event.key === 'ArrowRight') {
        element.classList.remove('key_press');
      }
      if (element.innerHTML === '←' && event.key === 'ArrowLeft') {
        element.classList.remove('key_press');
      }
      if (element.innerHTML === '↓' && event.key === 'ArrowDown') {
        element.classList.remove('key_press');
      }
      if (element.innerHTML === 'Space' && event.key === ' ') {
        element.classList.remove('key_press');
      }
    });
    switch (event.key) {
      case 'Shift':
        if (localStorage.language === 'eng') {
          if (capsLock.classList.contains('caps-on')) {
            lang = keyboardButtonsEng;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.remove('caps-on');
            toggleCaps();
          } else {
            lang = keyboardButtonsEng;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.add('caps-on');
            toggleCaps();
          }
        }
        if (localStorage.language === 'rus') {
          if (capsLock.classList.contains('caps-on')) {
            lang = keyboardButtonsRus;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.remove('caps-on');
            toggleCaps();
          } else {
            lang = keyboardButtonsRus;
            for (let i = 0; i < button.length; i += 1) {
              button[i].innerHTML = lang[i];
            }
            capsLock.classList.add('caps-on');
            toggleCaps();
          }
        }
        break;
      default:
        buttons.forEach((element) => {
          element.classList.remove('key_press');
        });
        break;
    }
  });
}

function changeLanguage(func, ...codes) {
  const press = new Set();
  document.addEventListener('keydown', (event) => {
    press.add(event.code);
    for (let i = 0; i < codes.length; i += 1) {
      if (!press.has(codes[i])) {
        return;
      }
    }
    press.clear();
    func();
  });
  document.addEventListener('keyup', (event) => {
    press.delete(event.code);
  });
}

changeLanguage(
  () => {
    const capsLock = document.querySelector('.caps');
    const button = document.querySelectorAll('.key');
    if (localStorage.language === 'rus') {
      localStorage.language = 'eng';
      if (capsLock.classList.contains('caps-on')) {
        lang = keyboardButtonsEng;
        for (let i = 0; i < button.length; i += 1) {
          button[i].innerHTML = lang[i];
        }
        capsLock.classList.add('caps-on');
        toggleCaps();
      } else {
        lang = keyboardButtonsEng;
        for (let i = 0; i < button.length; i += 1) {
          button[i].innerHTML = lang[i];
        }
        capsLock.classList.remove('caps-on');
        toggleCaps();
      }
    } else {
      localStorage.language = 'rus';
      if (capsLock.classList.contains('caps-on')) {
        lang = keyboardButtonsRus;
        for (let i = 0; i < button.length; i += 1) {
          button[i].innerHTML = lang[i];
        }
        capsLock.classList.add('caps-on');
        toggleCaps();
      } else {
        lang = keyboardButtonsRus;
        for (let i = 0; i < button.length; i += 1) {
          button[i].innerHTML = lang[i];
        }
        capsLock.classList.remove('caps-on');
        toggleCaps();
      }
    }
  },
  'ControlLeft',
  'AltLeft',
);
indexBuild();
mouseInput();
capsLockToggle();
keyboardInput();
