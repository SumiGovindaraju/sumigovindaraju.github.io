$(document).ready(function() {
    $('.nav').hide();
    $('.navbar').css('background-color', 'transparent');
    $('.x').hide();

    $('.hamburger').click(function() {
        $('.hamburger').hide();    
        $('.social').css('margin-right', '39px');        
        $('.nav').slideDown("fast", function(){
            $('.navbar').css('background-color', 'rgb(255, 100, 100)');            
            $('.x').show();            
        });
    });

    $('.x').click(function() {
        $('.x').hide();   
        $('.nav').slideUp("fast", function() {
            $('.social').css('margin-right', '250px');                      
            $('.navbar').css('background-color', 'transparent');            
            $('.hamburger').show();            
        });
    });
});