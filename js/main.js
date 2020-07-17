//Efeito do backgroud ao usar o scroll
$(window).scroll(function () {
    var $height = $(window).scrollTop();

    if ($height > 50) {
        $('header nav').addClass('active-nav');

    } else {
        $('header nav').removeClass('active-nav');
    }
});