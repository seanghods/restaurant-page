import thickBurgerElDiablo from '../images/menu/thickBurgerElDiablo.png';
import allNaturalBurger from '../images/menu/allnaturalburger.png';
import westernBaconCheeseburger from '../images/menu/westernbaconcheeseburger.png';
import jalapenoThickBurger from '../images/menu/jalapenothickburger.png';

function setupMenu() {
    const mainDiv = document.querySelector('.main-body');
    mainDiv.innerHTML = '';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const firstItem = createMenuItem('Thick Burger El Diablo!', thickBurgerElDiablo);
    const secondItem = createMenuItem('All Natural Burger!', allNaturalBurger);
    const thirdItem = createMenuItem('Western Bacon Cheeseburger!', westernBaconCheeseburger);
    const fourthItem = createMenuItem('Jalapeno Thick Burger!', jalapenoThickBurger);



    menuItems.append(firstItem, secondItem, thirdItem, fourthItem);
    mainDiv.append(menuItems);
}

function createMenuItem(name, path) {
    const item = document.createElement('div');
    item.classList.add('card');
    const textPart = document.createElement('h4');
    textPart.innerHTML = name
    const pic = document.createElement('img');
    pic.src = path;
    item.append(textPart, pic);
    return item;
}
export {setupMenu};