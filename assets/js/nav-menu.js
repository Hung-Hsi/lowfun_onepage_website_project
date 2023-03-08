let $nav_trigger = $('.nav-trigger');
let $menu_list = $('.menu-list');
let $window = $(window);

$('#navbar').on('click', '.nav-trigger', function (e) {
    e.preventDefault();
    if ($(this).is('.nav-active')) {
        close_list()
    } else {
        open_list()
    }
});

$('.menu-list').on('click', function () {
    close_list()
})

function open_list() {
    //打開menu
    $nav_trigger
        // .not('.nav-active')
        .addClass('nav-active')
        .next('.menu-list')
        .not(':animated')
        .addClass('active');
        
}
function close_list() {
    //關menu
    $nav_trigger
        // .has('.nav-active')
        .removeClass('nav-active')
        .next('.menu-list')
        .not(':animated')
        .removeClass('active');
}
