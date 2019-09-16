$(function () {

  $(document).ready(function () {
    $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  });

});
window.onload = function () {

  var parallaxBox = document.getElementById('box');
  var parallaxBoxForAbout = document.getElementById('imgBlock');
  var parallaxBoxForContent = document.getElementById('aboutContent');
  var c1left = document.getElementById('l1').offsetLeft,
    c1top = document.getElementById('l1').offsetTop,
    c2left = document.getElementById('l2').offsetLeft,
    c2top = document.getElementById('l2').offsetTop,
    c3left = document.getElementById('l3').offsetLeft,
    c3top = document.getElementById('l3').offsetTop,
    c4left = document.getElementById('movingAbout').offsetLeft,
    c4top = document.getElementById('movingAbout').offsetTop,
    c5left = document.getElementById('headerAbout').offsetLeft,
    c5top = document.getElementById('headerAbout').offsetTop;
  this.console.log(c4left);



  parallaxBox.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;

    mouseParallax('l1', c1left, c1top, x, y, 25);
    mouseParallax('l2', c2left, c2top, x, y, 55);
    mouseParallax('l3', c3left, c3top, x, y, 70);
  }
  parallaxBoxForAbout.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;
    mouseParallax('movingAbout', c4left, c4top, x, y, 25);
  }
  parallaxBoxForContent.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;
    mouseParallax('headerAbout', c5left, c5top, x, y, 15);
  }
}

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
  var obj = document.getElementById(id);
  var parentObj = obj.parentNode,
    containerWidth = parseInt(parentObj.offsetWidth),
    containerHeight = parseInt(parentObj.offsetHeight);
  obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
  obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
}

window.sr = ('#about .header', {
  origin: 'bottom',
  distance: '50px',
  duration: 500,
  easing: 'ease',
  mobile: false,
  reset: true,
  viewFactor: 0.4,
});