$(document).ready(function() { 
    $('#2017-2018').show();
    $('#2016-2017').hide();
    $('#2015-2016').hide();  
});

function showLeaders(year) {
    if (year !== null) {
        if ($(year).hasClass('active')) { 
            $(year).slideUp('slow', function() {
                $(year).removeClass('active');
            }); 
        } else {
            $('.active').slideUp('slow', function() {
                $('.active').removeClass('active');
            });
            $(year).slideDown('slow', function() {
                $(year).addClass('active');
            });
        }
    }
}