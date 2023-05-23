// mobile/tablet hamburger
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
});

document.querySelectorAll('.nav-a').forEach(
    n => n.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navUl.classList.toggle('active');
    })
);

// scrolling
const root = document.documentElement;
const marqueElementsDisplayed = getComputedStyle(root).getPropertyValue('--marque-elements-displayed');

const marqueContent = document.querySelector('.marque-content');

root.style.setProperty('--marque-elements', marqueContent.children.length);

for (let i = 0; i < marqueElementsDisplayed; i++) {
    marqueContent.appendChild(marqueContent.children[i].cloneNode(true));
}

// media query
const marqueAnimation = document.getElementById('marque-animation');
const marqueFixed = document.getElementById('marque-fixed');

function screenChange(screen) {
    if (screen.matches) {
        marqueAnimation.classList.add('hide');
        marqueFixed.classList.remove('hide');
    } else {
        marqueFixed.classList.add('hide');
        marqueAnimation.classList.remove('hide');
    }
}

const mediaQuery = window.matchMedia('(min-width: 800px)');

mediaQuery.addListener(screenChange);

screenChange(mediaQuery);

// animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const hiddenElementsBlur = document.querySelectorAll('.hidden-blur');
hiddenElementsBlur.forEach((element) => observer.observe(element));

const slideRightElements = document.querySelectorAll('.slide-right');
slideRightElements.forEach((element) => observer.observe(element));

const slideLeftElements = document.querySelectorAll('.slide-left');
slideLeftElements.forEach((element) => observer.observe(element));
