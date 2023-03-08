$(function () {
    let $window = $(window);
    let $btnTop = $('#btnTop');
    let endZone = $('#footer').offset().top - $window.height() - 100;

    $window.on('scroll', function () {

        if (endZone < $window.scrollTop()) {
            $('#btnTop').animate({
                right: '1%'
            }, 250);

        } else {
            $('#btnTop').stop(true).animate({ right: '-360px' }, 250);
        }
    });
    $('#btnTop').on('click',function(e){
        e.defaultPrevented;
        $window.scrollTop(0);
    })
});