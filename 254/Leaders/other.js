$(document).ready(function() { 
    $('#2017-2018').show();
    $('#2016-2017').hide();
    $('#2015-2016').hide();
    $('#2014-2015').hide();
    $('#2013-2014').hide();
    $('#2012-2013').hide();
    $('#2011-2012').hide();
    $('#2010-2011').hide();
    $('#2009-2010').hide();
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