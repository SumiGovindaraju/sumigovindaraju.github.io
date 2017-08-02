(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) 
        return;
    js = d.createElement(s); 
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
    $('#TwitterFeed').show();
    $('#FacebookFeed').hide();
    $('#InstagramFeed').hide();

    $('.TwitterTab').click(function() {
        $('#TwitterFeed').show();
        $('#FacebookFeed').hide();
        $('#InstagramFeed').hide();
    });

    $('.FacebookTab').click(function() {
        $('#TwitterFeed').hide();
        $('#FacebookFeed').show();
        $('#InstagramFeed').hide();
    });
    
    $('.InstagramTab').click(function() {
        $('#TwitterFeed').hide();
        $('#FacebookFeed').hide();
        $('#InstagramFeed').show();
    });
});