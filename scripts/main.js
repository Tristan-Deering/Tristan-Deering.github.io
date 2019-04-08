let lActive = false;
var activeSlide = document.querySelector('.active');;

// PORTFOLIO SLIDE

let sliding = false;

function scrollDown(id) {
  let num = id.substr(id.length - 1)
  console.log(num)
  anime({
    targets: activeSlide,
    top: ['-100%', '0'],
    easing: 'easeOutCubic',
    duration: 1000
  });
  anime({
    targets: `#slide-2`,
    top: ['0', '100'],
    easing: 'easeOutCubic',
    duration: 1000
  });
}

function scrollUp(id) {
  let num = id.substr(id.length - 1)
  console.log(num)
  anime({
    targets: activeSlide,
    top: ['0', '-100%'],
    easing: 'easeOutCubic',
    duration: 1000
  })
  anime({
    targets: `#slide-2`,
    top: ['100%', '0'],
    easing: 'easeOutCubic',
    duration: 1000
  })
}

$(window).bind('mousewheel', function(event) {
  if (!sliding && event.originalEvent.wheelDelta >= 0) {
    sliding = true;
    setTimeout(function() { sliding = false; }, 1100)

    scrollDown($('.active').attr('id'))
  }
  else if (!sliding && event.originalEvent.wheelDelta < 0) {
    sliding = true;
    setTimeout(function() { sliding = false; }, 1100)

    scrollUp($('.active').attr('id'))
  }
});



// ABOUT TRANSITION
$('#contact').click(
  function() {
    if (!lActive) {
      anime({
        targets: '#left-content',
        right: ['50%', '0'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#right-content',
        left: ['50%', '100%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      // anime({
      //   targets: '#home',
      //   display: ['none', 'block']
      //   easing: 'easeOutCubic',
      //   duration: 300
      // })
      lActive = true;
    } else {
      anime({
        targets: '#right-content',
        left: ['100%', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#left-content',
        right: ['0', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = false;
    }
  }
);

// DETAILS TRANSITION
$('#details').click(
  function() {
    if (!lActive) {
      anime({
        targets: '#right-content',
        left: ['50%', '0'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#left-content',
        right: ['50%', '100%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: ['.pic', '.pic2'],
        filter: ['grayscale(100%)', 'grayscale(0%)'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = true;
    } else {
      anime({
        targets: '#left-content',
        right: ['100%', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: '#right-content',
        left: ['0', '50%'],
        easing: 'easeOutCubic',
        duration: 750
      })
      anime({
        targets: ['.pic', '.pic2'],
        filter: ['grayscale(0%)', 'grayscale(100%)'],
        easing: 'easeOutCubic',
        duration: 750
      })
      lActive = false;
    }
  }
);















// /* SLIDER
// /////////////////////////////////////////////*/

// var $activeSlide = $('.active'),
// $homeSlide = $(".slide"),
// $slideNavPrev = $("#prev"),
// $slideNavNext = $("#next"),
// $nextPrev = $(".prevnext"),
// $arrow = $(".arrow"),
// ready = true;

// function init() {
//   TweenMax.set($homeSlide.not($activeSlide), {autoAlpha: 0});
//   TweenMax.set($slideNavPrev, {autoAlpha: 0.2});
// }

// init();

// function disable() {
//   ready = false;
//   setTimeout(function() { ready = true; }, 1000)
// }

// function filterNav(index, activeIndex) {
//   console.log(index, activeIndex)
//   if (index === 1 && activeIndex === 0) {
//     $nextPrev.css("display", "none");
//     $('.ghost').css("display", "block");
//     setTimeout(function() {
//       $('.ghost').css("display", "none");
//       $nextPrev.css("display", "block");
//     }, 1000)
//   } else if (index === 1 && activeIndex > 1) {
//     $('.ghost').css("display", "none");
//     $nextPrev.css("display", "block");
//   }
//   else if (index === 0) {
//     $('.ghost').css("display", "block");
//     $nextPrev.css("display", "none");
//   } else {
//     $('.ghost').css("display", "none");
//     $nextPrev.css("display", "block");
//   }
// }

// function goToNextSlide(slideOut, slideIn, slideInAll) {
//   disable();
//   filterNav(slideIn.index(), slideOut.index());
//   var t1 = new TimelineLite(),
//   slideOutContent = slideOut.find('.content'),
//   slideInContent = slideIn.find('.content'),
//   slideOutImg = slideOut.find('.card-img'),
//   slideInImg = slideIn.find('.card-img'),
//   index = slideIn.index(),
//   size = $homeSlide.length;

//   if (slideIn.length !== 0) {
//     t1.set(slideIn, {autoAlpha: 1, className: '+=active'})
//       .set(slideOut, {className: '-=active'})
//       .to(slideOutContent, 0.65, {y: "-=40px", ease: Power3.easeInOut}, 0)
//       .to(slideOutImg, 0.65, {backgroundPosition: 'bottom', ease: Power3.easeInOut}, 0)
//       .to(slideInAll, 1, {y: "-=100%", ease: Power3.easeInOut}, 0)
//       .fromTo(slideInContent, 0.65, {y: '-=40px'}, {y: 0, ease: Power3.easeInOut}, '-=0.60')
//       .fromTo(slideInImg, 0.65, {backgroundPosition: 'top'}, {backgroundPosition: 'bottom', ease: Power3.easeInOut}, '-=0.7')
//   }

//   TweenMax.set($slideNavPrev, {autoAlpha: 1});

//   if (index === size - 1) {
//     TweenMax.to($slideNavNext, 0.3, {autoAlpha: 0.2, ease: Linear.easeNone});
//   }
// };


// function goToPrevSlide(slideOut, slideIn, slideInAll) {
//   disable()
//   filterNav(slideIn.index(), slideOut.index());
//   var t1 = new TimelineLite(),
//   slideOutContent = slideOut.find('.content'),
//   slideInContent = slideIn.find('.content'),
//   slideOutImg = slideOut.find('.card-img'),
//   slideInImg = slideIn.find('.card-img'),
//   index = slideIn.index(),
//   size = $homeSlide.length;

//   if (slideIn.length !== 0) {
//     t1.set(slideIn, {autoAlpha: 1, className: '+=active'})
//       .set(slideOut, {className: '-=active'})
//       .to(slideOutContent, 0.65, {y: "+=40px", ease: Power3.easeInOut}, 0)
//       .to(slideOutImg, 0.65, {backgroundPosition: 'top', ease: Power3.easeInOut}, '+=0.7')
//       .to(slideInAll, 1, {y: "+=100%", ease: Power3.easeInOut}, 0)
//       .fromTo(slideInContent, 0.65, {y: '+=40px'}, {y: 0, ease: Power3.easeInOut}, 0.65)
//       .fromTo(slideInImg, 0.65, {backgroundPosition: 'bottom'}, {backgroundPosition: 'top', ease: Power3.easeInOut}, 0)
//   }

//   TweenMax.set($slideNavNext, {autoAlpha: 1});

//   if (index === size - 1) {
//     TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 0.2, ease: Linear.easeNone});
//   }
// };


// $slideNavNext.click(function(e) {
//   console.log('adfda', $arrow.is(":visible"))

//   e.preventDefault();

//   var slideOut = $('.slide.active'),
//   slideIn = $('.slide.active').next('.slide'),
//   slideInAll = $('.slide')

//   if (ready) goToNextSlide(slideOut, slideIn, slideInAll);
// })

// $arrow.click(function(e) {
//   e.preventDefault();

//   var slideOut = $('.slide.active'),
//   slideIn = $('.slide.active').next('.slide'),
//   slideInAll = $('.slide')

//   if (ready) goToNextSlide(slideOut, slideIn, slideInAll);
// })

// $slideNavPrev.click(function(e) {
//   e.preventDefault();

//   var slideOut = $('.slide.active'),
//   slideIn = $('.slide.active').prev('.slide'),
//   slideInAll = $('.slide')

//   if (ready) goToPrevSlide(slideOut, slideIn, slideInAll);
// })












