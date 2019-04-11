// PORTFOLIO SLIDE

/*
  1) animate active slide with easeOutCubic and 1000 
  duration from top: 0 to top: 100%
  2) animate active slide with same values except
  top: -100% to 0
  3) remove active class from and slide and apply to next sibling
*/

var sliding = false;

function scroll(direction) {
  let nextIndex = $('.active').next();
  let prevIndex = $('.active').prev();

  setTimeout(function() { sliding = false; console.log("okay") }, 1050)
  if (direction == "up") {
    TweenMax.to(".active", 1, {top:"-100%"});
    TweenMax.to(nextIndex, 1, {top:0});

    $('.active').removeClass('active')
    nextIndex.addClass('active')
  } else if (direction == "down") {
    TweenMax.to(".active", 1, {top:"100%"});
    TweenMax.to(prevIndex, 1, {top:"0"});

    $('.active').removeClass('active')
    prevIndex.addClass('active')
  }
}

let homePage = true;
$(window).bind('mousewheel', function(event) {
  event.preventDefault();
  console.log(!sliding)
  if (homePage && !sliding) {
    if (event.originalEvent.wheelDelta >= 0 && $(".slide").index('.active') !== 0) {
      sliding = true;
      scroll("down")
    }
    else if (event.originalEvent.wheelDelta < 0 && $(".active").nextAll().length !== 0) {
      sliding = true;
      scroll("up")
    }
  }

});


// PAGE TRANSITIONS

/*
  1) first click #left-content right: 0 #right-content left: 100%
  2) if second revert

  1) first click #right-content left: 0 #left-content right: 100%
  2) .pic fliter: grayscale: (0%)
  3) if second revert
*/

// ABOUT
let contactCounter = 0;
$('#contact').click(
  function() {
    contactCounter++;

    if (contactCounter % 2 === 1) {
      TweenMax.to('#left-content', 0.75, {right: 0})
      TweenMax.to('#right-content', 0.75, {left: "100%"})
      TweenMax.to('#contact', 0.5, {})
      homePage = false;
    } else {
      TweenMax.to("#left-content", 0.75, {right: "50%"})
      TweenMax.to("#right-content", 0.75, {left: "50%"})
      homePage = true;
    }

  }
);


// PORTOFLIO
let portfolioCounter = 0;
$('#details').click(
  function() {
    portfolioCounter++;

    if (portfolioCounter % 2 === 1) {
      TweenMax.to("#right-content", 1, {left: 0})
      TweenMax.to("#left-content", 1, {right: "+100%"})
      TweenMax.to(".pic", 1, {filter: "grayscale(0%)"})
      homePage = false;
    } else {
      TweenMax.to("#right-content", 1, {left: "50%"})
      TweenMax.to("#left-content", 1, {right: "50%"})
      TweenMax.to(".pic", 1, {filter: "grayscale(100%)"})
      homePage = true;
    }
  
  }
);



