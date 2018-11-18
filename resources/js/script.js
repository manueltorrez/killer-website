// For sticky navigation
let waypoint = new Waypoint({
    element: document.querySelector('.js--section-features'),
    handler: function(direction) {
        if(direction === 'down') {
            document.querySelector('nav').classList.add('sticky')
            console.log('Basic waypoint triggered');
        } else {
            document.querySelector('nav').classList.remove('sticky');
        }
    },
    offset: 60
});

// Scroll on buttons
document.querySelector('.js--scroll-to-plans').addEventListener('click', function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});

document.querySelector('.js--scroll-to-start').addEventListener('click', function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

/* Navigation scroll */

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Animations on scroll
let waypoint1 = new Waypoint({
  element: document.querySelector('.js--section-features'),
  handler: function(direction) {
    console.log('culo');
    document.querySelector('.js--wp-1').classList.add('animated', 'fadeIn');
  }
});

let waypoint2 = new Waypoint({
  element: document.querySelector('.js--section-steps'),
  handler: function(direction) {
    console.log('culo');
    document.querySelector('.js--wp-2').classList.add('animated', 'fadeInUp');
  }
});

let waypoint3 = new Waypoint({
  element: document.querySelector('.js--section-cities'),
  handler: function(direction) {
    console.log('culo');
    document.querySelector('.js--wp-3').classList.add('animated', 'fadeIn');
  }
});

let waypoint4 = new Waypoint({
  element: document.querySelector('.js--section-plans'),
  handler: function(direction) {
    console.log('culo');
    document.querySelector('.js--wp-4').classList.add('animated', 'pulse');
  }
});

// Mobile nav
document.querySelector('.js--nav-icon').addEventListener('click', () => {
  let nav = $('.js--main-nav');
  let icon = document.querySelector('.js--nav-icon i');
  nav.slideToggle(200);

  if(icon.classList.contains('ion-navicon-round')) {
    icon.classList.remove('ion-navicon-round');
    icon.classList.add('ion-close-round');
  } else {
    icon.classList.remove('ion-close-round');
    icon.classList.add('ion-navicon-round');
  }
})