const content = document.querySelector('#content');
const nav = document.querySelector('#nav');

const hero = document.createElement('div');
hero.id = 'hero';
const header = document.querySelector('header');

hero.appendChild(nav);
hero.appendChild(content);
header.appendChild(hero);

import restaurantImage from "./images/restaurant.jpg";
const image = document.createElement('img');
image.src = restaurantImage;
hero.appendChild(image);
function clearContent() {
    content.replaceChildren();
}

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

import { showHome } from "./home.js";

import { showMenu } from "./menu.js";

import { showContact } from "./contact.js";

import "./style.css";

const pages = {
    Home: showHome,
    Menu: showMenu,
    Contact: showContact
}
Object.keys(pages).forEach((name) => {
    const button = createButton(name);
    nav.appendChild(button);
});

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        pages[e.target.textContent](content, clearContent);
    });
});