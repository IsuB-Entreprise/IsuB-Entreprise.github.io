//VARIABLES AND FUNCTIONS
const imgTitle2 = document.getElementById('img-title2');
const imgTitle3 = document.getElementById('img-title3');
const navbar = document.getElementById('navbar');
const navElements = document.getElementById('nav-elements');

//SCROLL DETECTION
window.addEventListener('scroll', () => {
    const scroll = this.document.documentElement.scrollTop;
    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight)
    //TEXT/IMG APPEAR
    if (scrollValue > 0.45) {
        imgTitle2.style.opacity = '1';
        imgTitle2.style.transform = 'none';
    }
    if (scrollValue > 0.80) {
        imgTitle3.style.opacity = '1'
        imgTitle3.style.transform = 'none'
    } else {
        imgTitle3.style.opacity = '0';
    }
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