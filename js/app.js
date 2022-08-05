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


// 1.loop inside the list of sections
// 2.when user scrolls check the position of the sections one bu one to look for the one the user is at.
function setActiveSection(){
    for(let i = 0; i< sections.length; i++){
        if(sections[i].getBoundingClientRect().top >= 0 && sections[i].getBoundingClientRect().bottom <= window.innerHeight ){
            sections[i].setAttribute('class','your-active-class');
        }else{
            sections[i].removeAttribute('class');
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
        listItem.innerHTML = `<a>${sections[i].getAttribute('data-nav')}</a>`
        listItem.setAttribute('class','menu__link');
        fragment.appendChild(listItem);
    }
    // 2.appent list elements to ul using fragment
    list.appendChild(fragment);


//scroll to section by clicking nav bar menu.
function scrollToSection(e){
    // e.preventDefault();
    let elm = e.target;
    let textLength = elm.textContent.length;
    const sectionElement = document.querySelector(`#section${elm.textContent[textLength-1]}`);
    sectionElement.scrollIntoView({block: 'end', behavior: 'smooth'});
    // let sectionPosition = sectionElement.getBoundingClientRect();
    // console.log(`top: ${sectionPosition.top}`);
    // console.log(`left: ${sectionPosition.left}`);
    // window.scrollTo({
    //         top: sectionPosition.top,
    //         left: sectionPosition.left,
    //         behavior: 'smooth'
    //       });
    // console.log(`top: ${sectionPosition.top}`);
    // console.log(`left: ${sectionPosition.left}`);
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', setActiveSection );

// Scroll to anchor ID using scrollTO event
    // I did not understand what is required??


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
    //what do you mean by menu? are you refering to the nav bar?

    // ------------------------------
            // window.scrollTo({
            //     top: 100,
            //     left: 100,
            //     behavior: 'smooth'
            //   });
    // ------------------------------

// Scroll to section on link click
    list.addEventListener('click',scrollToSection);

// Set sections as active
    // we alrready covered this part above, didn't we?



