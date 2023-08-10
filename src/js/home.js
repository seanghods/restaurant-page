import mainPic from '../images/burger.png';

function setupInitial() {
    const content = document.querySelector('.content');

    // buttons

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    const homeButton = createButton('home', 'Home');
    const menuButton = createButton('menu', 'Menu');
    const contactButton = createButton('contact', 'Contact');
    buttonsDiv.append(homeButton, menuButton, contactButton);

    content.appendChild(buttonsDiv);

    // main body

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-body');
    const mainImg = document.createElement('img');
    mainImg.src = mainPic;
    mainDiv.appendChild(mainImg);

    const textSec = document.createElement('h3');
    textSec.innerHTML = "Welcome to Sean's Burgers";
    mainDiv.appendChild(textSec);

    content.appendChild(mainDiv);

    // footer

    const footer = document.createElement('div');
    footer.classList.add('footer');
    const anchor = document.createElement('a');
    anchor.href = 'https://github.com/seanghods'
    anchor.text = 'Sean Ghods'
    footer.appendChild(anchor);

    content.appendChild(footer);

}

function createButton(id, inner) {
    const name = document.createElement('button');
    name.setAttribute('id',id);
    name.innerHTML = inner;
    return name;
}

export {setupInitial}