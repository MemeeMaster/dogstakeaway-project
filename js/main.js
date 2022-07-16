let $hamburgerBtn;
let $hamburgerBars;
let $menu;
let $menuLinks;
let $infoBtn;
let $aboutUsCard;
let $aboutUsClose;
let $aboutUsText;
let $contactName;
let $contactText;
let $dynamicYear;
let $allSections;

const main = () => {
    DOMElements();
    DOMEvents();
    addYear();
};

const DOMElements = () => {
    $hamburgerBtn = document.querySelector('.nav-mobile__button');
    $hamburgerBars = document.querySelector('.nav-mobile__button-bars');
    $menu = document.querySelector('.header__menu');
    $menuLinks = document.querySelectorAll('.header__menu-links');
    $infoBtn = document.querySelector('.fa-info-circle');
    $aboutUsCard = document.querySelector('.aboutus__card');
    $aboutUsClose = document.querySelector('.fa-times');
    $aboutUsText = document.querySelector('.aboutus__text');
    $contactName = document.querySelector('.text-name');
    $contactText = document.querySelector('.text-area');
    $dynamicYear = document.querySelector('.dynamic-year');
    $allSections = document.querySelectorAll('.section');
};

const DOMEvents = () => {
    $hamburgerBtn.addEventListener('click', showMenu);
    $infoBtn.addEventListener('click', extendCard);
    $aboutUsClose.addEventListener('click', closeCard);
    $contactName.addEventListener('focus', highlightContact);
    $contactName.addEventListener('focusout', unhighlightContact);
    $contactText.addEventListener('focus', highlightContact);
    $contactText.addEventListener('focusout', unhighlightContact);
    window.addEventListener('scroll', handleObserver)

    for (const el of $menuLinks) {
        el.addEventListener('click', showMenu);
    }
};

const showMenu = () => {
    $menu.classList.toggle('show-menu');
};

const extendCard = () => {
    $aboutUsCard.classList.add('extend-card');
    $aboutUsText.classList.add('display-none');
};

const closeCard = () => {
    $aboutUsCard.classList.remove('extend-card');
    $aboutUsText.classList.remove('display-none');
};

const highlightContact = (e) => {
    e.target.closest('.contact__block-box-text').classList.add('contact-click');
};

const unhighlightContact = (e) => {
    e.target.closest('.contact__block-box-text').classList.remove('contact-click');
};

const addYear = () => {
    actualYear = new Date().getFullYear();
    $dynamicYear.innerText = actualYear;
};

const handleObserver = () => {
    const currentSection = window.scrollY;

    $allSections.forEach(section => {
        if (section.classList.contains('light-section') && section.offsetTop <= currentSection + 60) {
            $hamburgerBars.classList.add('dark-hamburger-color')
        } else if (!section.classList.contains('light-section') && section.offsetTop <= currentSection + 60) {
            $hamburgerBars.classList.remove('dark-hamburger-color')
        }
    })
}

document.addEventListener('DOMContentLoaded', main());