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
  var parallaxBoxForAbout = document.getElementById('about');
  var parallaxBoxForContent = document.getElementById('contact');
  var parallaxBoxForcapabilies = document.getElementById('capabilities');
  var parallaxBoxForService = document.getElementById('services'),
    parallaxBoxForHowItWorks = document.getElementById('how_it_works');
  var c1left = document.getElementById('l1').offsetLeft,
    c1top = document.getElementById('l1').offsetTop,
    c2left = document.getElementById('l2').offsetLeft,
    c2top = document.getElementById('l2').offsetTop,
    c3left = document.getElementById('l3').offsetLeft,
    c3top = document.getElementById('l3').offsetTop,
    c4left = document.getElementById('movingAbout').offsetLeft,
    c4top = document.getElementById('movingAbout').offsetTop,
    c5left = document.getElementById('headerAbout').offsetLeft,
    c5top = document.getElementById('headerAbout').offsetTop,
    c6top = document.getElementById('capability_head').offsetTop,//
    c6left = document.getElementById('capability_head').offsetLeft,
    c7top = document.getElementById('sevicehead').offsetTop ,
    c7left = document.getElementById('sevicehead').offsetLeft,
    c8top = document.getElementById('how_it_works_head').offsetTop,
    c8left = document.getElementById('how_it_works_head').offsetLeft,
    c9top = document.getElementById('rectangle').offsetTop,
    c9left = document.getElementById('rectangle').offsetLeft,
    c10top = document.getElementById('person_btn').offsetTop,
    c10left = document.getElementById('person_btn').offsetLeft,
    c11top = document.getElementById('contact_head').offsetTop,
    c11left = document.getElementById('contact_head').offsetLeft;



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
    mouseParallax('movingAbout', c4left, c4top, x, y, 10);
    mouseParallax('headerAbout', c5left, c5top, x, y, 5);

  }

  parallaxBoxForcapabilies.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;
    mouseParallax('capability_head', c6left, c6top, x, y, 5);
  }
  parallaxBoxForService.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;
    mouseParallax('sevicehead', c7left, c7top, x, y, 5);
    mouseParallax('rectangle', c9left, c9top, x, y, 5);
    mouseParallax('person_btn', c10left, c10top, x, y, 5);
  }
  parallaxBoxForHowItWorks.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;
    mouseParallax('how_it_works_head', c8left, c8top, x, y, 5);

  }
  parallaxBoxForContent.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;
    mouseParallax('contact_head', c11left, c11top, x, y, 5);

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

// window.sr = ('#about .header', {
//   origin: 'bottom',
//   distance: '50px',
//   duration: 500,
//   easing: 'ease',
//   mobile: false,
//   reset: true,
//   viewFactor: 0.4,
// });


// var rect = $('#how_it_works')[0].getBoundingClientRect();
// var mouse = {x: 0, y: 0, moved: false};

// $("#how_it_works").mousemove(function(e) {
//   mouse.moved = true;
//   mouse.x = e.clientX - rect.left;
//   mouse.y = e.clientY - rect.top;
// });

// // Ticker event will be called on every frame
// TweenLite.ticker.addEventListener('tick', function(){
//   if (mouse.moved){    
//     parallaxIt(".how_it_works_header_img", -100);
//     parallaxIt("img", -30); 
//   }
//   mouse.moved = false;
// });

// function parallaxIt(target, movement) {
//   TweenMax.to(target, 0.3, {
//     x: (mouse.x - rect.width / 2) / rect.width * movement,
//     y: (mouse.y - rect.height / 2) / rect.height * movement
//   });
// }

// $(window).on('resize scroll', function(){
//   rect = $('#how_it_works')[0].getBoundingClientRect();
// })
// $(document).ready(function () {
//   var plane = document.getElementById('how_it_works');
//   var rocket = document.getElementById('how_it_works_head');
//   plane.homePos = { x: plane.offsetLeft, y: plane.offsetTop };
//   rocket.homePos = { x: rocket.offsetLeft, y: rocket.offsetTop };

//   $('#how_it_works_head').mousemove(function (e) {
//       parallax(e, plane, 80);
//       parallax(e, rocket, 20);
//   });
// });

// function parallax(e, target, layer) {
//   var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
//   var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
//   $(target).offset({ top: y ,left : x });
// };