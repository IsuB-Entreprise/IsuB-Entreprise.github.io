//VARIABLES AND FUNCTIONS
const navbar = document.getElementById('navbar');
const navElements = document.getElementById('nav-elements');

//SCROLL DETECTION
window.addEventListener('scroll', () => {
    //NAVBAR REDUCTION
    if (scroll > 200) {
        navbar.style.height = '5vh';
        navElements.style.height = '5vh';
        navbar.style.opacity = '0.880'
    } else {
        navbar.style.height = '7vh';
        navElements.style.height = '7vh';
        navbar.style.opacity = '1'
    }
})