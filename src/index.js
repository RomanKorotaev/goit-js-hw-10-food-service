//-------------- Импортируем сюда данные из других файлов
import './sass/main.scss';
import product_itemTpl from './templates/product-item.hbs';
import products from './menu.json';


//console.log('product_itemTpl = ', product_itemTpl(products[0]));

const productsMenuRef = document.querySelector('ul.js-menu');
const cardsMarkup = createProductsMenu(products);

productsMenuRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createProductsMenu(products) {
 // return products.map(product => product_itemTpl(product)).join('');
  // или более краткая запись
 return products.map(product_itemTpl).join('');
 }

 const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


localStorage.setItem('LIGHT', 'light-theme');
localStorage.setItem('DARK',  'dark-theme');


const themeOfProductsMenuRef = document.querySelector('body');

const checkboxRef = document.querySelector('#theme-switch-toggle');

//console.log ('checkboxRef ', checkboxRef.getAttribute('checked'))


if (checkboxRef.getAttribute('checked')!==null) {
    console.log('It`s checked');
}








/*
themeOfProductsMenuRef.addEventListener('scrpll', changeTheme);

function changeTheme (event) {
    event.preventDefault();
    themeOfProductsMenuRef.classList.add('dark-theme');
};

*/




