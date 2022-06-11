/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//sections Global var **use QuerySelectorAll
const sections = Array.from(document.querySelectorAll('section'));
//navigation global var **use getElementBy ID
const NavList = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Give the section begin viewd a diffrernt appearance

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuilder() {
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = section.id;
        a.setAttribute('data-nav', section.id);
        a.classList.add('menu__link');
        a.innerText = section.dataset.nav;
        li.appendChild(a);
        NavList.appendChild(li);
    })
}
navBuilder();
//scroll to section smoothly
const navItemClicked = (event) => {
    event.preventDefault()
    const sectionId = event.target.getAttribute('data-nav');
    const section = document.getElementById(sectionId);
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
}

const navItems = document.querySelectorAll('#navbar__list a');


navItems.forEach(item =>  {
    item.addEventListener('click', navItemClicked)
})
// active class style
window.addEventListener('scroll', (event) => {
    sections.forEach(section => {
        const h2 = section.querySelector('h2')
        const inView = section.getBoundingClientRect().top < window.innerHeight  && section.getBoundingClientRect().bottom > window.innerHeight;
        inView && section.classList.add('active__class');
        !inView && section.classList.remove('active__class');
    })

})
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

