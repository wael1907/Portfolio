let counters = document.querySelectorAll('.counter-item'),
projects = document.querySelectorAll('.my-work .project'),
rights = document.querySelectorAll('.toright'),
lefts = document.querySelectorAll('.toleft'),
circles = document.querySelectorAll('.act-cir'),
contactSection = document.getElementById('contact'),
workSection = document.getElementById('work'),
skillsSection = document.getElementById('skills')
// cursor = document.querySelector('.cursor')

// window.addEventListener('mousemove',(e)=> {

//     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`

// })

window.onscroll = function () {

    if(window.scrollY >= skillsSection.offsetTop - 400) {
        circles.forEach((circle) => circle.style.cssText = 'background:#d31f2b;')
    } else {
        circles.forEach((circle) => circle.style.cssText = 'background:rgb(163, 17, 28,.2);')
    };

    if(window.scrollY >= skillsSection.offsetTop - 300) {
        counters.forEach((counter) => counter.style.cssText = 'box-shadow: 0px 0px 10px 0px red;border-color: #a3111c')
    } else {
        counters.forEach((counter) => counter.style.cssText = 'box-shadow: none')
    };

    if(window.scrollY >= workSection.offsetTop - 350) {
        projects.forEach((project) => project.style.cssText = 'opacity: 1;')
    } else {
        projects.forEach((project) => project.style.cssText = 'opacity: 0;')
    };

    if(window.scrollY >= contactSection.offsetTop - 300) {
        rights.forEach((right) => right.style.cssText = 'transform: translateX(0)')
        lefts.forEach((left) => left.style.cssText = 'transform: translateX(0)')
    } else {
        rights.forEach((right) => right.style.cssText = 'transform: translateX(1000)')
        lefts.forEach((left) => left.style.cssText = 'transform: translateX(-1000)')
    };

}

let year = document.querySelector('.year')
let date = new Date()
year.textContent = date.getFullYear()
