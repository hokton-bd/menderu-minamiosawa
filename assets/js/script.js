$(document).ready(function() {

    $('.nav-menu__link').click(function(){

            if($(this).attr('href') === '#top') {
                var adjust = -300;

            } else {
                var adjust = -150;
            }

            var speed = 400;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top + adjust;
            $('body,html').animate({scrollTop:position}, speed, 'swing');

        return false;
    });

    $(window).on('scroll', function() {

        if($(this).scrollTop() > 100) {

            $('.js-logo').attr('src', 'assets/images/logo-minamiosawa-w.svg');
            $('.global-nav').addClass('js-global-nav--scroll');

        } else if($(this).scrollTop() === 0) {

            $('.js-logo').attr('src', 'assets/images/logo-minamiosawa-b.svg');
            $('.global-nav').removeClass('js-global-nav--scroll');

        }

    });

});