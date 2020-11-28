$(document).ready(function () {
  var $win = $(".ImgPortf a img");

  var duration = 1000;
  var parallax = [];
  var viewZ = [];
  
  for (var i = 0; i < 6; i++) {
    parallax[i] = random(10, 40);
    viewZ[i] = random(10, 30);
  }
  parallax.sort();
  viewZ.sort();
  
  function random(min, max) {
    var randomz = Math.floor(Math.random() * (max - min + 1) + min);
    return randomz;
  }

  $($win).on('mouseleave', function () {
    $('.slices').remove();
  });
  $($win).on('mouseover', function () {
    $(this).before("<div class='slices'><div class='move'><div class='zoom'><div class='image'></div></div></div><div class='move'><div class='zoom'><div class='image'></div></div></div><div class='move'><div class='zoom'><div class='image'></div></div></div><div class='move'><div class='zoom'><div class='image'></div></div></div><div class='move'><div class='zoom'><div class='image'></div></div></div><div class='move'><div class='zoom'><div class='image'></div></div></div></div>");
    $('.image').css('background-image', 'url(' + $(this).attr("src") + ')');
    $(this).on('mousemove', function (e) {
      requestAnimationFrame(function () {
        $('.move').each(function (i) {
          var t = parallax[i];
          transX = t / (800) * e.clientX - t / 2,
          transY = t / (400) * e.clientY - t / 2;
          $('.move').css({
            transform: 'translate3d(' + transX + 'px,' + transY + 'px,0)'
          });
        });
      });
      
      $('.zoom').each(function (i) {
        $(this).animate({
          viewZ: viewZ[i]
        }, {
          step: function (now) {
            $(this).css('transform', 'translateZ(' + now + 'px)');
          },
          duration: duration
        }, 'linear');
      });
      
      function mobile(e) {
        var y = e.gamma / 45;
        requestAnimationFrame(function () {
          $('.move').each(function (i) {
            var t = parallax[i];
            transX = (t / ($win.width()) - t / 2) * y,
            transY = (t / ($win.height()) - t / 2) * y;
            $(this).css({
              transform: 'translate3d(' + transX + 'px,' + transY + 'px,0)'
            });
          });
        });
      }
      window.addEventListener('deviceorientation', mobile);
    });
  });
    
  });