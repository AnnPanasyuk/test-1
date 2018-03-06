$('.fade').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.single-item').slick({
    dots: true,
    arrow: false,
    infinite: true
});

$(document).ready(function(){
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
});

$('#nav-icon3').on('click',function(){
    if($('.nav').is(":visible")){
        $('.nav').hide();
    }
    else $('.nav').show();
});