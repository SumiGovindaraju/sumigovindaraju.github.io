// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) 
//         return;
//     js = d.createElement(s); 
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
//     fjs.parentNode.insertBefore(js, fjs);
// } (document, 'script', 'facebook-jssdk'));

// $(document).ready(function() {
//     $('#TwitterFeed').show();
//     $('#FacebookFeed').hide();
//     $('#InstagramFeed').hide();

//     $('.TwitterTab').click(function() {
//         $('#TwitterFeed').show();
//         $('#FacebookFeed').hide();
//         $('#InstagramFeed').hide();
//     });

//     $('.FacebookTab').click(function() {
//         $('#TwitterFeed').hide();
//         $('#FacebookFeed').show();
//         $('#InstagramFeed').hide();
//     });
    
//     $('.InstagramTab').click(function() {
//         $('#TwitterFeed').hide();
//         $('#FacebookFeed').hide();
//         $('#InstagramFeed').show();
//     });
// });

// var jqxhr = $.getJSON( "http://instagram.com/team254/media", function() {
//         console.log( "success" );
//     })
//     .done(function() {
//         console.log( "second success" );
//     })
//     .fail(function() {
//         console.log( "error");
//     })
//     .always(function() {
//         console.log( "complete" );
// });
 
// // Perform other work here ...
 
// // Set another completion function for the request above
// jqxhr.complete(function() {
//   console.log( "second complete" );
// });

$(document).ready(function() {
    $.ajax({
        url: 'http://instagram.com/team254/media',
        dataType: 'jsonp',
        success: function(data){
            console.log(data);
        }
    });
})