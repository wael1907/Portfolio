let counters = document.querySelectorAll('.counter-item')
let projects = document.querySelectorAll('.my-work .project')
let rights = document.querySelectorAll('.toright')
let lefts = document.querySelectorAll('.toleft')
let circles = document.querySelectorAll('.act-cir')

window.onscroll = function () {
    console.log(window.scrollY);
    if(window.scrollY >= 700) {
        counters.forEach((counter) => counter.style.cssText = 'box-shadow: 0px 0px 10px 0px red;border-color: #a3111c')
    } else {
        counters.forEach((counter) => counter.style.cssText = 'box-shadow: none')
    };

    if(window.scrollY >= 2650) {
        projects.forEach((project) => project.style.cssText = 'opacity: 1;')
    } else {
        projects.forEach((project) => project.style.cssText = 'opacity: 0;')
    };

    if(window.scrollY >= 3300) {
        rights.forEach((right) => right.style.cssText = 'transform: translateX(0)')
        lefts.forEach((left) => left.style.cssText = 'transform: translateX(0)')
    } else {
        rights.forEach((right) => right.style.cssText = 'transform: translateX(1000)')
        lefts.forEach((left) => left.style.cssText = 'transform: translateX(-1000)')
    };

    if(window.scrollY >= 500) {
        circles.forEach((circle) => circle.style.cssText = 'background:#d31f2b;')
    } else {
        circles.forEach((circle) => circle.style.cssText = 'background:rgb(163, 17, 28,.2);')
    };
}

let year = document.querySelector('.year')
let date = new Date()
year.textContent = date.getFullYear()


window.onblur = function() {
    document.title = `Come Back`
}
window.onfocus = function() {
    document.title = `Abdullah Waell`
}