window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

VANTA.CELLS({
    el: ".home-content",
    color1: 0x194a59,
    color2: 0x112d28,
    size: 5.00,
    speed: 0.00
})

// Scroll to top when home is clicked
$("#home-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".home-content").offset().top
    },
        'slow');
});

// Scroll to about section when about is clicked
$("#about-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".about-me-container").offset().top
    },
        'slow');
});

// Scroll to portfolio section when portfolio is clicked
$("#portfolio-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".portfolio-container").offset().top
    },
        'slow');
});

// Scroll to contact section when contact is clicked
$("#contact-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $(".contact-container").offset().top
    },
        'slow');
});

// Make navbar fixed at certain page height
$(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the 
    //nav bar to stick.  
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 969) {
        $('.navbar').addClass('fixed');
    }
    if ($(window).scrollTop() < 300) {
        $('.navbar').removeClass('fixed');
    }
});
