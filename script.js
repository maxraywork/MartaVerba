$(document).ready(function() {
  var $win = $('.background');
  var $image = $('.image');
  var $move = $('.move');
  var $zoom = $('.zoom');

  var duration = 2000;

  var parallax = [];
  var viewZ = [];

  for (var i = 0; i < $move.length; i++) {
    parallax[i] = random(10, 40);
    viewZ[i] = random(10, 30);
  }
  parallax.sort();
  viewZ.sort();

  function random(min, max) {
    var randomz = Math.floor(Math.random() * (max - min + 1) + min);
    return randomz;
  }

  $image.css({
    'background-image': 'url(img/progects/photo-01.png)'
  });

  $('.containerr').on('mouseover', function() {
    $('.containerr').on('mousemove', function(e) {
      requestAnimationFrame(function() {
        $move.each(function(i) {
          var t = parallax[i];
          transX = t / ($('.containerr').width()) * e.clientX - t / 2,
            transY = t / ($('.containerr').height()) * e.clientY - t / 2;
          $(this).css({
            transform: 'translate3d(' + transX + 'px,' + transY + 'px,0)'
          });
        });
      });
    });
    $image.animate({
      opacity: '.1'
    }, duration);
    $zoom.each(function(i) {
      $(this).animate({
        viewZ: viewZ[i]
      }, {
        step: function(now) {
          $(this).css('transform', 'translateZ(' + now + 'px)');
        },
        duration: duration
      }, 'linear');
    });

    function mobile(e) {
      var y = e.gamma / 45;
      requestAnimationFrame(function() {
        $move.each(function(i) {
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