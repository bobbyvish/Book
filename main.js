// sticky navigation
let navbar = $(".navbar");

$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  }
  else{
    navbar.removeClass("sticky");
  }
})

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollPosition=$(document).scrollTop();
    console.log(scrollPosition);
    if((scrollPosition>1400) && (scrollPosition<1600)){
      $('#rect1').addClass('animated bounceInLeft');
      $('#rect2').addClass('animated bounceInDown');
      $('#rect3').addClass('animated bounceInUp');
      $('#rect4').addClass('animated bounceInRight');
    }
    if((scrollPosition>1900) && (scrollPosition<2000)){
      $('#card1').addClass('animated fadeInLeft');
      $('#card2').addClass('animated fadeIn');
      $('#card3').addClass('animated fadeInRight');
    }
    if((scrollPosition>3160) && (scrollPosition<3200)){
      $('#team-card1').addClass('animated heartBeat');
      $('#team-card2').addClass('animated heartBeat');

    }
  })
})