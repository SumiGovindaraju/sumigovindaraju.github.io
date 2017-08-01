// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) 
//         return;
//     js = d.createElement(s); 
//     js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
//     fjs.parentNode.insertBefore(js, fjs);
// } (document, 'script', 'facebook-jssdk'));

function loadJSON(url) {
    console.log('starting');
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); // For IE7+, Firefox, Chrome, Opera, Safari
    } else {
        xml = new ActiveXObject("Microsoft.XMLHTTP"); // For IE6, IE5
    }

    xmlhttp.onreadystatechange = function() {
        console.log('xmlhttp state changed');
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                document.getElementById("myBody").innerHTML = xmlhttp.responseText;
                document.getElementById("myBody").innerHTML = JSON.stringify(xmlhttp.responseText);
            } else if (xmlhttp.status == 400) {
                alert("400 error");
            } else {
                alert("Error");
            }
        }
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    console.log('request sent');
}

loadJSON('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=team254');