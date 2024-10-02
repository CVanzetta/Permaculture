$(document).ready(function(){

    $(".navbar").hide();

    $(function() {
        $(window).scroll(function() {

            if ($(this).scrollTop() > 140) {
                $('.navbar').fadeIn();
            } else {
              $('.navbar').fadeOut();
            }
        });
    });
});