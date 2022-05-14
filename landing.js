

$(".faq-title-1").click(function(){
    $('.faq-content-1').slideToggle(300);
});

$(".faq-title-2").click(function(){
    $('.faq-content-2').slideToggle(300);
});

$(".faq-title-3").click(function(){
    $('.faq-content-3').slideToggle(300);
});

$(".faq-title-4").click(function(){
    $('.faq-content-4').slideToggle(300);
});



$(".faq-title-1").click(function(){
    $('.faq-title-1').addClass('active');
    $('.faq-title-2').removeClass('active');
    $('.faq-title-3').removeClass('active');
    $('.faq-title-4').removeClass('active');
});


$(".faq-title-2").click(function(){
    $('.faq-title-1').removeClass('active');
    $('.faq-title-2').addClass('active');
    $('.faq-title-3').removeClass('active');
    $('.faq-title-4').removeClass('active');
});

$(".faq-title-3").click(function(){
    $('.faq-title-1').removeClass('active');
    $('.faq-title-2').removeClass('active');
    $('.faq-title-3').addClass('active');
    $('.faq-title-4').removeClass('active');
});

$(".faq-title-4").click(function(){
    $('.faq-title-1').removeClass('active');
    $('.faq-title-2').removeClass('active');
    $('.faq-title-3').removeClass('active');
    $('.faq-title-4').addClass('active');
});