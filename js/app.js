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
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
let list = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// setActiveSection will be triggered when user scrolls.
// it will calculate the position of a section, if its showen in the viewport it will set its class attrebute to active.
// while changing the class of a section it will also change the class the coresponsing nav bar li class to active.
function setActiveSection(){
    for(let i = 0; i< sections.length; i++){
        if(sections[i].getBoundingClientRect().top >= 0 && (sections[i].getBoundingClientRect().top + (sections[i].getBoundingClientRect().height/2)) <= window.innerHeight ){
            sections[i].setAttribute('class','your-active-class');
            list.children[i].setAttribute('class', 'menu__link__active');
        }else{
            list.children[i].setAttribute('class', 'menu__link');
            sections[i].removeAttribute('class');
        }
    }
}

//scroll to section by clicking nav bar menu.
function scrollToSection(e){
    let elm = e.target;
    let textLength = elm.textContent.length;
    const sectionElement = document.querySelector(`#section${elm.textContent[textLength-1]}`);
    sectionElement.scrollIntoView(
        {block: 'start',
         inline:'start',
          behavior: 'smooth'
        });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(){
    // 1.create li elements to be shown in nav bar.
    for(let i = 0; i < sections.length; i++){
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a>${sections[i].getAttribute('data-nav')}</a>`
        listItem.setAttribute('class','menu__link');
        fragment.appendChild(listItem);
    }
    // 2.appent list elements to ul using fragment
    list.appendChild(fragment);
}
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
    // I did not understand what is required??


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
list.addEventListener('click',scrollToSection);

// Set sections as active
document.addEventListener('scroll', setActiveSection );



