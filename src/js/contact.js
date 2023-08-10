import angryburger from '../images/angryburger.jpeg';

function setupContact() {
    const mainDiv = document.querySelector('.main-body');
    mainDiv.innerHTML = '';

    const textArea = document.createElement('h3');
    textArea.innerHTML = 'Send us feedback!';

    const feedbackPic = document.createElement('img');
    feedbackPic.src = angryburger;

    const textArea2 = document.createElement('h6');
    textArea2.innerHTML = "Just kidding, keep it";

    mainDiv.append(textArea, feedbackPic, textArea2);



}

export {setupContact};