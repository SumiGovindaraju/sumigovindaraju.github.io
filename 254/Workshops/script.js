$(document).ready(function() {
    $('.nav').hide();
    $('.x').hide();

    $('.hamburger').click(function() {
        $('.hamburger').hide();    
        $('.social').css('margin-right', '39px');        
        $('.nav').slideDown("fast", function(){
            $('.x').show();            
        });
    });

    $('.x').click(function() {
        $('.x').hide();        
        $('.nav').slideUp("fast", function(){
            $('.social').css('margin-right', '200px');            
            $('.hamburger').show();            
        });
    });
});