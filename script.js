/*HOME SCROLL BUTTON*/

$('.js-anchor').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');

    $('html, body').animate(
        {
            scrollTop: $(target).offset().top,
        },
        1500
    );
});

/*MENU BUTTON*/

$ ('.js-open').on('click', function(){

    if($('html').class('menu-open')){
      $('html').addClass('menu-open');
    } else {
      $('html').removeClass('menu-open')
    }

});

$ ('.js-close').on('click', function(){
    $('html').removeClass('menu-open');
});



$(document).ready(function() {
  $(".hamburguer-bt").click(function() {
    $(this).toggleClass("on");
    $('html').toggleClass('menu-open');
  });
});