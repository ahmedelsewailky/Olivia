
// Trigger Breaking News Ticker
$('.my-news-ticker').AcmeTicker({
    type: 'typewriter',
    autoplay: 2000,
    speed: 50,
    direction: 'up',
    pauseOnFocus: true,
    pauseOnHover: true,
    controls: {
        prev: $('.acme-news-ticker-prev'),
        toggle: $('.acme-news-ticker-pause'),
        next: $('.acme-news-ticker-next')
    }
});



// Trigger Bootstrap Tooltip
$(function() { $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });});



// Back To Top Button
var btn = $('#back-to-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// On scroll execute the scrollProgress function
window.onscroll = function () { scrollProgress() };
function scrollProgress() {
  var currentState = document.body.scrollTop || document.documentElement.scrollTop;
  var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollStatePercentage = (currentState / pageHeight) * 100;
  document.querySelector(".page-scroll-indicator > .progress").style.width = scrollStatePercentage + "%";
}


// Get The Date Of The Day
document.getElementById('date-of-day').innerHTML = moment().format('LL');


// NewsLetter Popup Modal
setTimeout(function () {

    $(".news-letter-bg").fadeIn("fast", () => {
        $(".news-letter-popup").fadeIn("fast", () => {});
    });

    $("button[name=subscribe]").click(() => {
        $.ajax({
            type: "POST",
            url: $(".popup-form").attr("action"),
            data: $(".popup-form").serialize(),
            success: (data) => {
                $(".news-letter-popup-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
            }
        });
    });

    $(".popup-close").click(() => {
        $(".news-letter-bg, .news-letter-popup").hide();
        localStorage.setItem("news-letter-bg", (new Date()).getTime());
    });
}, 5 * 1000);



// Preloader
$(window).on('load', function() { // makes sure the whole site is loaded
  $('.preloader').fadeOut().delay(50); // will fade out the white DIV that covers the website.
  $('body').delay(50).css({'overflow':'visible'});
});



// Stacky Navbar
var zero = 0;
$(window).on('scroll', function(){
  var navbar = $('.navbar');
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= 173.5) {
    navbar.addClass('fixed');
    $('.body-inner').css({'padding-top': navbar.height()});
    $('.fixed').toggleClass('hide', $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  } else {
    navbar.removeClass('fixed');
    $('.body-inner').css({'padding-top': 0});
  }
});