import './style.css';
import {setupInitial, setupHome} from './js/home.js';
import {setupMenu} from './js/menu.js';
import {setupContact} from './js/contact.js';

setupInitial();
setupButtons();


function setupButtons() {
    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', setupHome);
    
    const menuButton = document.querySelector('#menu');
    menuButton.addEventListener('click', setupMenu);

    const contactButton = document.querySelector('#contact');
    contactButton.addEventListener('click', setupContact);
}