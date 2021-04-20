gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scrub: .1,
});

//MAIN NAME
let Start = gsap.timeline({
    scrollTrigger: {
        trigger: ".mainDes",
        start: "bottom 70%",
        markers: true,
    }
});

Start.to(".mainName", { marginLeft: "5%" })
    .to(".mainDes", { marginRight: "10%" }, 0)
    .to(".SBBGstart", { transform: "translate3d(0, 0, 0)" }, 0);

//NAV
ScrollTrigger.create({
    trigger: "nav",
    start: "top top",
    endTrigger: 'html',
    toggleClass: 'sticky',
    markers: true,
    scrub: false
});
ScrollTrigger.create({
    trigger: ".pinNav",
    start: "top top",
    endTrigger: 'html',
    toggleClass: {targets: ".menuMob", className: "sticky"},
    markers: true,
    scrub: false
});


ScrollTrigger.create({
    trigger: ".PortfAll",
    start: "top 70%",
    end: "bottom 70%",
    toggleClass: {targets: "#portfolio", className: "active"},
    markers: true,
    scrub: false
});
ScrollTrigger.create({
    trigger: "#PaintNav",
    start: "top 70%",
    end: "bottom 70%",
    toggleClass: {targets: "#art", className: "active"},
    markers: true,
    scrub: false
});
ScrollTrigger.create({
    trigger: "#AboutFull",
    start: "top 70%",
    end: "bottom 70%",
    toggleClass: {targets: "#about", className: "active"},
    markers: true,
    scrub: false
});
ScrollTrigger.create({
    trigger: ".GetIT",
    start: "top 70%",
    endTrigger: 'html',
    toggleClass: {targets: "#contact", className: "active"},
    markers: true,
    scrub: false
});


//PORTFOLIO

const portImg = gsap.utils.toArray(".portfol");
portImg.forEach(img => {
    let ImgPortf = img.querySelector(".ImgPortf");
    gsap.to(ImgPortf, {
        transform: "translate(0, 0)",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom 80%",
            markers: false,
        }
    })
});

//Dark Theme

let Dark = gsap.timeline({
    scrollTrigger: {
        trigger: ".PortfAll",
        start: "40% bottom",
        end: "+=40%",
        markers: true,
    }
});

Dark.to('body', { backgroundColor: '#1a1c25', color: '#f3f3f3' })
    .to('.textPortf', { borderBottomColor: '#f3f3f3' }, 0)
    .to('#pOff, #aOff, #abOff, #cOff', { color: '#f3f3f3' }, 0)
    .to('.ball', { backgroundColor: '#f3f3f3' }, 0)
    .to('.MobMenPal', { fill: '#1a1c25' }, 0)
    .to('.MobMenCir', { fill: '#f3f3f3' }, 0);

//LIGHT THEME

let Light = gsap.timeline({
    scrollTrigger: {
        trigger: "#AboutFull",
        start: "75% center",
        end: "+=20%",
        markers: false,
    }
    
});

Light.to('body', { backgroundColor: '#f3f3f3', color: '#1a1c25' })
.to('.textPortf', { borderBottomColor: 'inherit' }, 0)
.to('#pOff, #aOff, #abOff, #cOff', { color: '#1a1c25' }, 0)
.to('.ball', { backgroundColor: '#1a1c25' }, 0)
.to('.MobMenPal', { fill: '#f3f3f3' }, 0)
.to('.MobMenCir', { fill: '#1a1c25' }, 0)
.to('.ArrowOn', { fill: '#1a1c25' }, 0)
.to('.behanceSvg', { fill: '#1a1c25'}, 0);

//Paint
//LOGO
gsap.to(".PaintLogo", {
    scrollTrigger: {
        trigger: ".AnimPaint",
        start: "top 90%",
        end: "+=50%",
        markers: false,
    },
    transform: "translate(0, 0)",
    toggleClass: { targets: "#art", className: "active" }
});
//Ball
gsap.to(".scrollBallMore", {
    scrollTrigger: {
        trigger: ".Paint",
        start: "top bottom",
        end: "+=40%",
        markers: false,
    },
    transform: "translate(0, 0)"
});
//BlackImg
gsap.to(".PaintBg", {
    scrollTrigger: {
        trigger: ".PaintAnimImg",
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
    },
    width: "0"
});
//ABOUT
//Ball
gsap.to(".ball", {
    scrollTrigger: {
        trigger: ".textBall",
        start: "top 80%",
        end: "bottom 80%",
        markers: false
    },
    transform: 'translate(0, 0)'
});
//FOOTER
gsap.to(".behance, .drib, .insta", {
    scrollTrigger: {
        trigger: ".allHref",
        start: "top 90%",
        end: "+=15%",
        markers: false
    },
    stagger: 0.3,
    transform: 'translate(0, 0)'
})
