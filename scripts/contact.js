// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let submitButton = document.querySelector('#submit-button');

function submitForm() {
    let pElement = document.createElement('p');
    pElement.innerHTML = "Thank you for your message!";
    pElement.style.fontSize = '24px';

    let main = document.querySelector('main');
    let h2Main = document.querySelector('main.contact h2');
    let form = document.querySelector('form');

    h2Main.remove();
    main.replaceChild(pElement, form);
    

    return false;
}

submitButton.addEventListener('click', submitForm);