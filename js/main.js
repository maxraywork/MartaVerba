jQuery(document).ready(function () {

    //Top triger
    var cntrTop = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    //Down triger
    var cntrDown = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onEnter'
        }
    });
    var cntrSeven = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 0.7
        }
    });

    //Center triger
    var cntr = new ScrollMagic.Controller();



    //MainText anim
    var tweenStartText = new TimelineMax()
        .add([
            TweenMax.to("#MV", { marginLeft: "5%" }),
            TweenMax.to("#design", { marginRight: "10%" }),
        ])

    //MainText control
    var StartText = new ScrollMagic.Scene({ triggerElement: "body", duration: '100%', offset:  jQuery(window).height() / 1.8 })
        .setTween(tweenStartText)
        .addIndicators({
            name: 'header',
            colorStart: '#f0F',
            colorEnd: '#f0F'
        })
        .addTo(cntr);

    //Main Ball anim
    var tweenStartBall = new TimelineMax()
        .add([
            TweenMax.to(".SBBGstart", { transform: "translate3d(0, 0, 0)" })
        ])

    //Main BAll control
    var StartBall = new ScrollMagic.Scene({ triggerElement: ".mainDes", duration: '50%' })
        .setTween(tweenStartBall)
        .addIndicators({
            name: 'HeadBall',
            colorStart: '#0f0',
            colorEnd: '#0f0'
        })
        .addTo(cntr);

    /////////////////////////////////////////////////////////////////////////////////////////////////

    //Nav stick
    var StickNav = new ScrollMagic.Scene({ triggerElement: ".pinNav" })
        .setClassToggle('nav', 'sticky')
        .addIndicators({
            name: 'Nav',
            colorStart: '#f00',
            colorEnd: '#F00'
        })
        .addTo(cntrTop);

    //Nav mobile stick
    var StickNav = new ScrollMagic.Scene({ triggerElement: ".pinNav" })
        .setClassToggle('.menuMob', 'sticky')
        .addIndicators({
            name: 'Nav Mob',
            colorStart: '#fa0',
        })
        .addTo(cntrTop);


    var NavPortf = new ScrollMagic.Scene({ triggerElement: ".PortfAll", duration:  jQuery("#PortfNav").height() })
        .setClassToggle("#portfolio", "active")
        .addIndicators({
            name: 'Port Nav',
            colorStart: '#0ff',
            colorEnd: '#0ff'
        })
        .addTo(cntrSeven);
    var NavArt = new ScrollMagic.Scene({ triggerElement: "#PaintNav", duration:  jQuery("#PaintNav").height()})
        .setClassToggle("#art", "active")
        .addIndicators({
            name: 'Art Nav',
            colorStart: '#f00'
        })
        .addTo(cntrSeven);

    var NavAbout = new ScrollMagic.Scene({ triggerElement: "#AboutFull", duration:  jQuery("#AboutFull").height() })
        .setClassToggle("#about", "active")
        .addIndicators({
            name: 'About Nav',
            colorStart: '#FF0'
        })
        .addTo(cntrSeven);

    var NavContact = new ScrollMagic.Scene({ triggerElement: ".GetIT" })
        .setClassToggle("#contact", "active")
        .addIndicators({
            name: 'Contact Nav',
            colorStart: '#0FF'
        })
        .addTo(cntrSeven);

     jQuery('.portfol').each(function (i) {

        //Portf anim
        let target1 =  jQuery(this).find("img");
        var portfol = new TimelineMax()
            .add([
                TweenMax.to(target1, { transform: "translate(0, 0)" })
            ])

        //Portf cont
        var Portf = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.9,duration:  jQuery('.portfol').height() })
            .setTween(portfol)
            .addIndicators({
                name: 'portfol',
                colorStart: '#70f',
                colorEnd: '#70f'
            })
            .addTo(cntr);
        });
//Dark anim
var DarkTheme = new TimelineMax()
    .add([
        TweenMax.to('body', { backgroundColor: '#1a1c25', color: '#f3f3f3' }),
        TweenMax.to('.textPortf', { borderBottomColor: '#f3f3f3' }),
        TweenMax.to('#pOff, #aOff, #abOff, #cOff', { color: '#f3f3f3' }),
        TweenMax.to('.ball', { backgroundColor: '#f3f3f3' }),
        TweenMax.to('.MobMenPal', { fill: '#1a1c25' }),
        TweenMax.to('.MobMenCir', { fill: '#f3f3f3' }),
    ])

//Dark cont
var Dark = new ScrollMagic.Scene({ triggerElement: '.PortfAll', duration: '30%', offset:  jQuery('.PortfAll').height() / 2.5 })
    .setTween(DarkTheme)
    .addIndicators({
        name: 'BG COlor',
        colorStart: '#7ff',
        colorEnd: '#7ff'
    })
    .addTo(cntrDown);
//Light anim
var LightTheme = new TimelineMax()
    .add([
        TweenMax.to('body', { backgroundColor: '#f3f3f3', color: '#1a1c25' }),
        TweenMax.to('.textPortf', { borderBottomColor: 'inherit' }),
        TweenMax.to('#pOff, #aOff, #abOff, #cOff', { color: '#1a1c25' }),
        TweenMax.to('.ball', { backgroundColor: '#1a1c25' }),
        TweenMax.to('.MobMenPal', { fill: '#f3f3f3' }),
        TweenMax.to('.MobMenCir', { fill: '#1a1c25' }),
        TweenMax.to('.ArrowOn', { fill: '#1a1c25' }),
        TweenMax.to('.behanceSvg', { fill: '#1a1c25'})
    ])

//Light cont
var Light = new ScrollMagic.Scene({ triggerElement: '#AboutFull', duration: '10%', offset:  jQuery('#AboutFull').height() / 1.5 })
    .setTween(LightTheme)
    .addIndicators({
        name: 'BG COlor light',
        colorStart: '#ff0',
        colorEnd: '#ff0'
    })
    .addTo(cntr);
//Paint anim
var Paintlogo = new ScrollMagic.Scene({ triggerElement: ".AnimPaint", duration:  jQuery(".AnimPaint").height() * 2.5 })
    .setTween(TweenMax.to(".PaintLogo", { transform: "translate(0, 0)" }))
    .addIndicators({
        name: 'Art logo',
        colorStart: '#0f0',
        colorEnd: '#0f0'
    })
    .addTo(cntrSeven);

//Art anim
var Artanim = new TimelineMax()
    .add([
        TweenMax.to(".PaintBg", { width: "0" }),
    ])
//Art control
var PaintImg = new ScrollMagic.Scene({ triggerElement: ".PaintAnimImg", duration:  jQuery(".PaintAnimImg").height() })
    .setTween(Artanim)
    .addIndicators({
        name: 'Art img',
        colorStart: '#00f',
        colorEnd: '#00f'
    })
    .addTo(cntrDown);

var PaintBall = new ScrollMagic.Scene({ triggerElement: ".Paint", duration:  jQuery(".PaintAnimImg").height() / 1.4 })
    .setTween(TweenMax.to(".scrollBallMore", { transform: "translate(0, 0)" }))
    .addIndicators({
        name: 'Ball more',
        colorStart: '#f00',
        colorEnd: '#f00'
    })
    .addTo(cntrDown);

//about anim
var AboutanimBall = new TimelineMax()
    .add([
        TweenMax.to(".ball", { transform: 'translate(0, 0)' }),
    ])
//About control
var AboutBall = new ScrollMagic.Scene({ triggerElement: ".textBall", triggerHook: 0.8, duration:  jQuery("#AboutFull").height() })
    .setTween(AboutanimBall)
    .addIndicators({
        name: 'Ball',
        colorStart: '#f0f',
        colorEnd: '#f0f'
    })
    .addTo(cntr);

//Contact anim
var Footer = new TimelineMax()
    .add([
        TweenMax.to('.behance', { transform: 'translate(0, 0)' }),
    ])
//Contact control
var AAooterAnim = new ScrollMagic.Scene({ triggerElement: ".allHref", duration:  jQuery(".allHref").height() * 2, offset: 20 })
    .setTween(Footer)
    .addIndicators({
        name: 'Href',
        colorStart: '#000',
        colorEnd: '#000'
    })
    .addTo(cntrDown);
//Contact anim
var Footer2 = new TimelineMax()
    .add([
        TweenMax.to('.drib', { transform: 'translate(0, 0)' }),
    ])
//Contact control
var AAooterAnim2 = new ScrollMagic.Scene({ triggerElement: ".allHref", duration:  jQuery(".allHref").height() * 1.6, offset: 60 })
    .setTween(Footer2)
    .addIndicators({
        name: 'Href',
        colorStart: '#000',
        colorEnd: '#000'
    })
    .addTo(cntrDown);
//Contact anim
var Footer3 = new TimelineMax()
    .add([
        TweenMax.to('.insta', { transform: 'translate(0, 0)' }),
    ])
//Contact control
var AAooterAnim3 = new ScrollMagic.Scene({ triggerElement: ".allHref", duration:  jQuery(".allHref").height() * 1.6, offset: 100 })
    .setTween(Footer3)
    .addIndicators({
        name: 'Href',
        colorStart: '#000',
        colorEnd: '#000'
    })
    .addTo(cntrDown);

});

