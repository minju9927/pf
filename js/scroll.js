const links = document.querySelectorAll('.main-nav li')
const sections = document.querySelectorAll('#wrap>section')
let pageNum = 0
let totalNum = sections.length
const navBtn = document.querySelector('.navBtn')
const navBtnList = document.querySelectorAll('.modalNav ul li')
const body = document.querySelector('body')

init(pageNum)


window.addEventListener('scroll', function () {
    let scroll = window.scrollY || this.window.pageYOffset

    for (let i = 0; i < totalNum; i++) {
        if (scroll > sections[i].offsetTop - window.outerHeight / 1.5 &&
            scroll < sections[i].offsetTop - window.outerHeight / 1.5 + sections[i].offsetHeight) {

            pageNum = i
            init(pageNum)
            // console.log(scroll,pageNum)
            funcObj[`f_${pageNum}`]()

        }
    }
})


navBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    body.classList.toggle('full')
})

navBtnList.forEach(function (nav, index) {

    nav.addEventListener('click', function () {
        
        body.classList.remove('full')
        init(index)

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#s${index}`
            }
        })

    })

})





let funcObj = {
    f_0: function () {
        console.log('0번 함수')
    },
    f_1: function () {
        console.log(1)
    },
    f_2: function () {
        console.log(2)
    },
    f_3: function () {

        const tl = gsap.timeline()

        tl.to('#s3 .tit-wrap>* ', {
            opacity: 1,
            stagger: .3,
            x: 10
        })
        tl.to('.project-lst li ', {
            opacity: 1,
            stagger: .3,
            rotationY: 360,
        })

    },
    f_4: function () {
        console.log(4)
    },
    f_5: function () {
        console.log(5)
    },

}

funcObj['f_0']()


function init(i) {
    links.forEach((link) => link.classList.remove('active'))
    sections.forEach((section) => section.classList.remove('current'))

    if (links[i - 1]) {  // s1 → links[0], s2 → links[1]... 매칭되도록
        links[i - 1].classList.add('active')
    }
    sections[i].classList.add('current')
}
const topLogo = document.querySelector('header h1')

topLogo.addEventListener('click', () => {

    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: '#s0'
        }
    })
})
links.forEach(function (link, index) {

    link.addEventListener('click', function () {



        init(index)

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#s${index + 1}`
            }
        })

    })

})










