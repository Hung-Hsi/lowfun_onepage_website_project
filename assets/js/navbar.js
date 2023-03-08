$(function () {
    let $window = $(window);
    let $nav = $('#navbar');
    let topZone = $nav.height();
    let lastPos = 0;
    
    function nav_scrolled() {
        // 下滑變色
        if ($window.scrollTop() > (topZone)) {
            $nav.addClass('scrolled');
        } else {
            $nav.removeClass('scrolled');
        };

        //   下滑收nav
        if ($window.scrollTop() > lastPos) {
            $('.scrolled').css({
                top: "-200px"
            })
        } else {
            $('.scrolled').css({
                top: "0px"
            })
        }
        lastPos = $window.scrollTop();
    }
    
    $window.on('scroll', nav_scrolled);

    // $window.on('resize',function () {
    //     console.log($window.width());

    //     if ($window.width() < 840) {
    //         $window.off('scroll', nav_scrolled);
    //     } else {
    //         $window.on('scroll', nav_scrolled);
    //     }
    // })
}());

