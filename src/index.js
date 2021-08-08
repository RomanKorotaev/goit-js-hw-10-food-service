import './sass/main.scss';

import product_itemTpl from './templates/product-item.hbs';
import products from './menu.json';

console.log('product_itemTpl = ', product_itemTpl(products[0]));

const productsMenuRef = document.querySelector('ul.js-menu');
const cardsMarkup = createProductsMenu(products);

productsMenuRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createProductsMenu(products) {
  return products.map(product => product_itemTpl(product)).join('');
 }


/*
function createProductsMenu(products) {
  const markup = products.map(({image, name, price, description, ingredients }) => {
    return `
    <li class="menu__item">
    <article class="card">
        <img src="{{image}}"
            alt="{{name}}" class="card__image" />
        <div class="card__content">
            <h2 class="card__name">{{name}}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                {{price}} кредитов
            </p>

            <p class="card__descr">
                {{description}}
            </p>

            <ul class="tag-list">
                <li class="tag-list__item">{{ingredients}}</li>
                <li class="tag-list__item">{{ingredients}}</li>
                <li class="tag-list__item">{{ingredients}}</li>
                <li class="tag-list__item">{{ingredients}}</li>
                <li class="tag-list__item">{{ingredients}}</li>
                <li class="tag-list__item">{{ingredients}}</li>
                <li class="tag-list__item">{{ingredients}}</li>
            </ul>
        </div>

        <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
        </button>
    </article>
</li>
  `;
    
  });
  return markup.join('');
 }


 */