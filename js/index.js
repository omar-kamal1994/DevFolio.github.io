//  start plug typed //

var options = {
    strings: ['Web Designer', 'CEO DevFolio', 'Web Developer', 'Frontend Developer'],

    loop: true,
    loopCount: Infinity,
    typeSpeed: 170
};
var typed = new Typed('.typed', options);

//   end plug typed  //
$('.counter').counterUp({
    delay: 10,
    time: 1000
});





$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();

    $(".navbar .nav-item .nav-link").click(function() {
        let href = $(this).attr("href");
        var linkOffset = $(href).offset().top;
        $("body").animate({ scrollTop: linkOffset }, 500)



    });

    if (scrollTop > 790) {
        $('.navbar').css({
            "backgroundColor": '#fff',
            "transition": 'all .3s'
        });

        $('.navbar .nav-link').css({ 'color': '#0078FF', "transition": 'all .3s' });
        $(' .navbar-brand').css({ 'color': '#0078FF', "transition": 'all .3s' });


    } else {
        $('.navbar').css({
            "backgroundColor": 'transparent',
            "transition": 'all .5s'
        });
        $('.navbar .nav-link').css({ 'color': '#fff', "transition": 'all .3s' });
        $('.navbar .navbar-brand').css({ 'color': '#fff', "transition": 'all .3s' });


    }




    $(".navbar .nav-item ").click(
        function() {
            $(this).addClass('active').siblings().removeClass('active');
        }
    );



});