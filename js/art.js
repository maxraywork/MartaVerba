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

    jQuery('.art').each(function () {

        //Portf anim
        let target1 = jQuery(this).find(".ImgDivArt");
        var portfol = new TimelineMax()
            .add([
                TweenMax.to(target1, { top: "0" })
            ])

        //Portf cont
        var Portf = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.9,duration: jQuery('.art').height() })
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
        TweenMax.to('.textArt', { borderBottomColor: '#f3f3f3' }),
        TweenMax.to('#pOff, #aOff, #abOff, #cOff', { color: '#f3f3f3' }),
        TweenMax.to('.MobMenPal', { fill: '#1a1c25' }),
        TweenMax.to('.MobMenCir', { fill: '#f3f3f3' })
    ])

//Dark cont
var Dark = new ScrollMagic.Scene({ triggerElement: '.art:nth-child(3)', duration: '30%', offset: jQuery('.art').height() })
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
        TweenMax.to('.textArt', { borderBottomColor: '#1a1c25' }),
        TweenMax.to('#pOff, #aOff, #abOff, #cOff', { color: '#1a1c25' }),
        TweenMax.to('.MobMenPal', { fill: '#f3f3f3' }),
        TweenMax.to('.MobMenCir', { fill: '#1a1c25' }),
        TweenMax.to('.behanceSvg', {fill: '#1a1c25'})
    ])

//Light cont
var Light = new ScrollMagic.Scene({ triggerElement: '.footer', duration: jQuery('.allHref').height()*1.5, triggerHook: 0.9, offset: jQuery('.allHref').height()})
    .setTween(LightTheme)
    .addIndicators({
        name: 'BG COlor light',
        colorStart: '#ff0',
        colorEnd: '#ff0'
    })
    .addTo(cntr);

//Contact anim
var Footer = new TimelineMax()
    .add([
        TweenMax.to('.behance', { transform: 'translate(0, 0)' }),
    ])
//Contact control
var AAooterAnim = new ScrollMagic.Scene({ triggerElement: ".allHref", duration: jQuery(".allHref").height() * 2, offset: 20 })
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
var AAooterAnim2 = new ScrollMagic.Scene({ triggerElement: ".allHref", duration: jQuery(".allHref").height() * 1.6, offset: 60 })
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
var AAooterAnim3 = new ScrollMagic.Scene({ triggerElement: ".allHref", duration: jQuery(".allHref").height() * 1.6, offset: 100 })
    .setTween(Footer3)
    .addIndicators({
        name: 'Href',
        colorStart: '#000',
        colorEnd: '#000'
    })
    .addTo(cntrDown);
});

