(function () {

    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    let speed = 0.03;
    let scrollTop = 0;
    let parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_5, parallax_6, parallax_7;


    const customCursor = document.querySelector('.cursor-wrap')
    const customCursor2 = document.querySelector('.cursor-wrap .cursor')

    const mouseEventEl = document.querySelectorAll('.mouse-event')

    document.addEventListener('mousemove', function (e) {

        // console.log(e.clientX, e.clientY);

        gsap.to(customCursor, {
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            duration: .1,
            opacity: 1
        })

    })

    document.querySelectorAll('a,button').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            gsap.to(customCursor2, {
                scale: .3,
                duration: .1
            })
        })
        el.addEventListener('mouseleave', () => {
            gsap.to(customCursor2, {
                scale: 1,
                duration: .1
            })
        })
    })


    const mouseTl = gsap.timeline({ paused: true })


    mouseTl.to('.cursor-wrap .learn-more ', {
        opacity: 1,
        duration: .1
    })


    mouseEventEl.forEach((el => {
        el.addEventListener('mouseenter', () => {
            mouseTl.play()
        })
        el.addEventListener('mouseleave', () => {
            mouseTl.reverse()
        })
    }))

    window.onload = function () {
        parallax_0 = document.querySelector('.s0-tit-1');
        parallax_1 = document.querySelector('.s0-tit-2');
        parallax_2 = document.querySelector('.main-image');
        parallax_3 = document.querySelector('.footer-lg');
        parallax_4 = document.querySelector('.footer.tag2');
        parallax_5 = document.querySelector('.footer.tag1');
        parallax_6 = document.querySelector('.ft-ico');

        window.addEventListener('resize', stageResize, false);
        window.addEventListener('mousemove', mouseMove, false);
        window.addEventListener('scroll', scrollFunc, false);

        stageResize();
        loop()




    }

    function scrollFunc() {
        scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);//전체 높이값
        // console.log(parallax_0)
        parallax_0.style.transform = "translate3d(0px," + scrollTop * .03 + "px, 0px)";
        parallax_1.style.transform = "translate3d(0px," + scrollTop * .4 + "px, 0px)";
        parallax_2.style.transform = "translate3d(0px," + scrollTop * .6 + "px, 0px)";
        // parallax_3.style.transform ="translate3d(0px," + scrollTop * .8 + "px, 0px)";
        // parallax_4.style.transform ="translate3d(0px," + -scrollTop * 1.3 + "px, 0px)";
        // parallax_5.style.transform ="translate3d(0px," + -scrollTop * 1.7 + "px, 0px)";

    }
    function stageResize() { }
    function loop() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        parallax_0.style.transform = "scale(1.1) translate(" + mx / 50 + "px," + -scrollTop * .02 + "px)";
        parallax_1.style.transform = "scale(1.1) translate(" + - mx / 30 + "px," + -scrollTop * .02 + "px)";
        parallax_2.style.transform = "scale(1) translate(" + mx / 10 + "px," + -scrollTop * .25 + "px)";
        // parallax_3.style.transform = "scale(1) translate(" + mx / 10 + "px," + -scrollTop * .25 + "px)";
        // parallax_4.style.transform = "scale(1) translate(" + mx / 5 + "px," + -scrollTop * .02 + "px)";
        // parallax_5.style.transform = "scale(1) translate(" + mx / -10 + "px," + -scrollTop * .25 + "px)";
        // parallax_6.style.transform = "scale(1) translate(" + mx / 40 + "px," + -scrollTop * .02 + "px)";
        window.requestAnimationFrame(loop);

    }
    function mouseMove(e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerWidth / 2);
    }


})()