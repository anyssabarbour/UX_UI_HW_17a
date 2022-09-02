$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 

            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 

});


$("document").ready(function(){

if ( $(window).width() < 768) {

$('div,section').removeClass("animatedParent");
$('div,section').removeClass("animated");
$('div,section').removeClass("fadeIn");
$('div,section').removeClass("bounceInRight");
$('div,section').removeClass("bounceInLeft");
$('div,section').removeClass("flipInX");
}

 });