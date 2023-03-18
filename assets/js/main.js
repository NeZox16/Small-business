$(document).ready(function() {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 400) {
           $('.container-header').addClass('fixed');
        } else if(scroll <= 399) {
            $('.container-header').removeClass('fixed');
        }
    })

    $('.burger').on('click', function() {
        $('.line-f, .line-s, .line-t').toggleClass('active');

        $('.mobile-nav').toggleClass('active')
    })

    $('.close-btn').on('click', function() {
        $('.mobile-nav').removeClass('active');
        $('.line-f, .line-s, .line-t').removeClass('active');
    })
    $('.hero-right-logo__img').on('click', function() {
        $('.hero-right-wrapper').show(1000);
    })
})