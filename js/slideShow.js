


var slidesOn = document.getElementsByClassName("Slide");

// var cA = c.getAttribute();

function Stop() {
  var b = document.getElementById("prev"),
    n = document.getElementById("next"),
    c = document.getElementById("closeSlide");
  b.removeAttribute("onclick");
  n.removeAttribute("onclick");
  c.removeAttribute("onclick");
}
function Start() {
  var b = document.getElementById("prev"),
    n = document.getElementById("next"),
    c = document.getElementById("closeSlide");
  b.setAttribute("onclick", "minusSlides()");
  n.setAttribute("onclick", "plusSlides()");
  c.setAttribute("onclick", "CloseSlides()");
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);

  jQuery(".SlideButt").removeClass('SlideOff');
  jQuery('.SlideButt').addClass('SlideButtOn');
  jQuery(slidesOn[n]).removeClass("Unactive");
  jQuery(slidesOn[n]).addClass("SlideDown");
  setTimeout(() => {
    jQuery(slidesOn[n]).removeClass("SlideDown");
  }, 1000);
}
// Next/previous controls
function plusSlides() {
  Stop();
  var slides = document.getElementsByClassName("Slide");
  if (slideIndex >= slides.length - 1) {
    slideLast = slides.length - 1;
    jQuery(slidesOn[slideLast]).addClass("BackAnim");
    jQuery(slidesOn[0]).removeClass("Unactive");
    jQuery(slidesOn[0]).addClass("NextAnim");
    setTimeout(() => {
      jQuery(slidesOn[slideLast]).removeClass("BackAnim");
      jQuery(slidesOn[slideLast]).addClass("Unactive");
    }, 700);
    setTimeout(() => {
      jQuery(slidesOn[0]).removeClass("NextAnim");
    }, 800);
    setTimeout(() => {
      showSlides(slideIndex = 0);
    }, 900);
    setTimeout(() => {
      Start();
    }, 900);
  }
  else {
    jQuery(slidesOn[slideIndex]).addClass("BackAnim");
    jQuery(slidesOn[slideIndex + 1]).removeClass("Unactive");
    jQuery(slidesOn[slideIndex + 1]).addClass("NextAnim");
    setTimeout(() => {
      jQuery(slidesOn[slideIndex]).removeClass("BackAnim");
      jQuery(slidesOn[slideIndex]).addClass("Unactive");
    }, 700);
    setTimeout(() => {
      jQuery(slidesOn[slideIndex + 1]).removeClass("NextAnim");
    }, 800);
    setTimeout(() => {
      showSlides(slideIndex += 1);
    }, 900);
    setTimeout(() => {
      Start();
    }, 900);
  }
}



function minusSlides() {
  Stop();
  var slides = document.getElementsByClassName("Slides");
  if (slideIndex <= 0) {
    var a = slides.length - 1;
    console.log(a+" первое");
  jQuery(slidesOn[slideIndex]).addClass("NextAnimRev");
  jQuery(slidesOn[a]).removeClass("Unactive");
  jQuery(slidesOn[a]).addClass("BackAnimRev");
  setTimeout(() => {
    jQuery(slidesOn[slideIndex]).removeClass("NextAnimRev");
    jQuery(slidesOn[slideIndex]).addClass("Unactive");
  }, 700);
  setTimeout(() => {
    jQuery(slidesOn[a]).removeClass("BackAnimRev");
  }, 800);
  setTimeout(() => {
    showSlides(slideIndex = a);
  }, 900);
     console.log(a+" второе")
  setTimeout(() => {
    Start();
  }, 900);
}
else {
  jQuery(slidesOn[slideIndex]).addClass("NextAnimRev");
  jQuery(slidesOn[slideIndex - 1]).removeClass("Unactive");
  jQuery(slidesOn[slideIndex - 1]).addClass("BackAnimRev");
  setTimeout(() => {
    jQuery(slidesOn[slideIndex]).removeClass("NextAnimRev");
    jQuery(slidesOn[slideIndex]).addClass("Unactive");
  }, 700);
  setTimeout(() => {
    jQuery(slidesOn[slideIndex - 1]).removeClass("BackAnimRev");
  }, 800);
  setTimeout(() => {
    showSlides(slideIndex -= 1);
  }, 900);
  setTimeout(() => {
    Start();
  }, 900);
}
}

function showSlides(n) {
  var slides = document.getElementsByClassName("Slide");
  if (n >= slides.length) { slideIndex = 0 };
  if (n <= 0) { slideIndex = slides.length - 1 };
}


function CloseSlides() {
      jQuery(".SlideButt").addClass('SlideOff');
      setTimeout(() => {
        jQuery(".SlideButt").removeClass('SlideButtOn');
        jQuery(".Slide").addClass("Unactive");
      }, 900);
    };
