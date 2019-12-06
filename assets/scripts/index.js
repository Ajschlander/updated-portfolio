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
        scrollTop: $("").offset().top
    },
        'slow');
});

// Scroll to contact section when contact is clicked
$("#content-nav-link").click(function () {
    $('html,body').animate({
        scrollTop: $("").offset().top
    },
        'slow');
});
