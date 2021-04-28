import cardMenu from '../templates/foodcard.hbs';
import menuArray from './menu.json';

const cardsMarkup = createMenuCards(menuArray);
const menuEl = document.querySelector('.js-menu');

function createMenuCards(menuArray) {
  return cardMenu(menuArray);
}
menuEl.insertAdjacentHTML('beforeend', cardsMarkup);