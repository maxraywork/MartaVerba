


var slidesOn = document.getElementsByClassName("Slide");
showSlides(slideIndex);

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

  $(".SlideButt").removeClass('SlideOff');
  $('.SlideButt').addClass('SlideButtOn');
  $(slidesOn[n]).removeClass("Unactive");
  $(slidesOn[n]).addClass("SlideDown");
  setTimeout(() => {
    $(slidesOn[n]).removeClass("SlideDown");
  }, 1000);
}
// Next/previous controls
function plusSlides() {
  Stop();
  var slides = document.getElementsByClassName("imgArt");
  if (slideIndex >= slides.length - 1) {
    slideLast = slides.length - 1;
    $(slidesOn[slideLast]).addClass("BackAnim");
    $(slidesOn[0]).removeClass("Unactive");
    $(slidesOn[0]).addClass("NextAnim");
    setTimeout(() => {
      $(slidesOn[slideLast]).removeClass("BackAnim");
      $(slidesOn[slideLast]).addClass("Unactive");
    }, 700);
    setTimeout(() => {
      $(slidesOn[0]).removeClass("NextAnim");
    }, 800);
    setTimeout(() => {
      showSlides(slideIndex = 0);
    }, 900);
    setTimeout(() => {
      Start();
    }, 900);
  }
  else {
    $(slidesOn[slideIndex]).addClass("BackAnim");
    $(slidesOn[slideIndex + 1]).removeClass("Unactive");
    $(slidesOn[slideIndex + 1]).addClass("NextAnim");
    setTimeout(() => {
      $(slidesOn[slideIndex]).removeClass("BackAnim");
      $(slidesOn[slideIndex]).addClass("Unactive");
    }, 700);
    setTimeout(() => {
      $(slidesOn[slideIndex + 1]).removeClass("NextAnim");
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
  var slides = document.getElementsByClassName("imgArt");
  if (slideIndex <= 0) {
    var a = slides.length - 1;
  $(slidesOn[slideIndex]).addClass("NextAnimRev");
  $(slidesOn[a]).removeClass("Unactive");
  $(slidesOn[a]).addClass("BackAnimRev");
  setTimeout(() => {
    $(slidesOn[slideIndex]).removeClass("NextAnimRev");
    $(slidesOn[slideIndex]).addClass("Unactive");
  }, 700);
  setTimeout(() => {
    $(slidesOn[a]).removeClass("BackAnimRev");
  }, 800);
  setTimeout(() => {
    showSlides(slideIndex = a);
  }, 900);
  setTimeout(() => {
    Start();
  }, 900);
}
else {
  $(slidesOn[slideIndex]).addClass("NextAnimRev");
  $(slidesOn[slideIndex - 1]).removeClass("Unactive");
  $(slidesOn[slideIndex - 1]).addClass("BackAnimRev");
  setTimeout(() => {
    $(slidesOn[slideIndex]).removeClass("NextAnimRev");
    $(slidesOn[slideIndex]).addClass("Unactive");
  }, 700);
  setTimeout(() => {
    $(slidesOn[slideIndex - 1]).removeClass("BackAnimRev");
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
  var i;
  var slides = document.getElementsByClassName("imgArt");
  if (n >= slides.length) { slideIndex = 0 };
  if (n < 0) { slideIndex = slides.length - 1 };
}


