gsap.registerPlugin(ScrollTrigger)



const sc1 = gsap.timeline()


sc1.fromTo('.content-wrap>*', {
    delay: 1,
    opacity: 0,
    y: 30
}, {

    opacity: 1,
    stagger: .2,
    y: 0
})





const cursor = document.querySelector('.cursor')
const cursorImgBox = document.querySelector('.cursor .img-box')
const workItem = document.querySelectorAll('.work-item a:first-child')



const updatePos = (cursor, e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
}




const projectList = document.querySelectorAll('.project-lst>li')


projectList.forEach((project) => {
    project.addEventListener('mouseenter', () => {
        project.classList.add('On')
    })
    project.addEventListener('mouseleave', () => {
        project.classList.remove('On')
    })
})


const box = document.querySelector('.header')


window.addEventListener('scroll', function () {

    let scroll = document.documentElement.scrollTop

    console.log(scroll);

    if (scroll >= 100) {
        // line.classList.add('on')

    } else {

        // line.classList.remove('on')
    }

})

