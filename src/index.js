//-------------- Импортируем сюда данные из других файлов
import './sass/main.scss';
import product_itemTpl from './templates/product-item.hbs';
import menu from './menu.json';


const refs = {
  productsMenuRef: document.querySelector('ul.js-menu'),
  bodyRef: document.querySelector('body'),
  switchRef: document.querySelector('#theme-switch-toggle'),
};


const cardsMarkup = createProductsMenu(menu);
refs.productsMenuRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createProductsMenu(menu) {
  // return menu.map(product => product_itemTpl(product)).join('');
  // или более краткая запись
 return menu.map(product_itemTpl).join('');
 }

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchRef.addEventListener('change', changeTheme);

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.bodyRef.classList.add(Theme.DARK);
    refs.switchRef.checked = true;
    
} else {
  refs. bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function changeTheme() {
  if (refs. bodyRef.classList.contains(Theme.DARK)) {
    refs. bodyRef.classList.remove(Theme.DARK);
    refs. bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs. bodyRef.classList.remove(Theme.LIGHT);
    refs. bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}


