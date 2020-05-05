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

$ ('.js-open').on('click', function(){
    $('html').addClass('menu-open');
});

$ ('.js-close').on('click', function(){
    $('html').removeClass('menu-open');
});
