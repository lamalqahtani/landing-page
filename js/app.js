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
const viewportWidth20 = (window.innerHeight*20)/100;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// 1.loop inside the list of sections
// 2.when user scrolls check the position of the sections one bu one to look for the one the user is at.
function setActiveSection(){
    for(let i = 0; i< sections.length; i++){
        console.log(` section ${i} : ${sections[i].getBoundingClientRect().top}`);
        if(sections[i].getBoundingClientRect().top >= viewportWidth20){
            sections[i].setAttribute('class','your-active-class');
        }else{
            sections[i].setAttribute('class','nothing');
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    // 1.create list elements 
    for(let i = 0; i < sections.length; i++){
        let listItem = document.createElement('li');
        listItem.textContent = sections[i].getAttribute('data-nav');
        listItem.setAttribute('class','menu__link');
        fragment.appendChild(listItem);
    }
    // 2.appent list elements to ul using fragment
    list.appendChild(fragment);

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', setActiveSection );

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active







//tests
    // document.addEventListener('click',()=>{
    //     sections[2].scrollIntoView();
    // })


