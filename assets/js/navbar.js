//navbar changes from transparent to solid color
//Animation on the jumbotron and profile picture
$(document).ready(function () {
    $('#pro-pic, .title').hide();             //hide the profile pic first
    $('#arrow-down').hide();
    $('.title, #arrow-down').slideDown(2000);              //Slide down the title
    $(window).scroll(function () {
        if ($(document).scrollTop() > 300) {
            $('.navbar').removeClass('bg-transparent');
            $('.navbar').addClass('solid').fadeIn('slow');
            $('#pro-pic').fadeIn(2500);       //Activate after scroll down
        } else if ($(document).scrollTop() < 300) {
            $('.navbar').removeClass('solid');
            $('.navbar').addClass('bg-transparent');
            $('#pro-pic').fadeIn(2000);     //Activate after scroll down
        }

    })
});

//smooth scrolling
$(document).ready(function () {
    var scrollLink = $('.scroll');

    scrollLink.click(function (e) {
        e.preventDefault();
        if (window.matchMedia('(min-width: 990px)').matches) {
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top - 63
            }, 1500);
        } else {
            $('body, html').animate({
                scrollTop: $(this.hash).offset().top - 288
            }, 1500);
        }

    })

});
