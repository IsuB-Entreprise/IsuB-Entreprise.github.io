//VARIABLES AND FUNCTIONS
const imgTitle2 = document.getElementById('img-title2');
const title2 = document.querySelector('.title2');
const navbar = document.getElementById('navbar');
const navElements = document.getElementById('nav-elements');

//SCROLL DETECTION
window.addEventListener('scroll', () => {
    const scroll = this.document.documentElement.scrollTop;
    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight)
    //TEXT/IMG APPEAR
    if (scrollValue > 0.47) {
        imgTitle2.style.opacity = '1';
        imgTitle2.style.transform = 'none'
    } else {
        imgTitle2.style.opacity = '0';
    }
    if (scrollValue > 0.60) {
        title3.style.background = 'rgba(196, 180, 220, 0.287)';
    } else {
        title3.style.background = 'rgba(196, 180, 220, 0)';
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