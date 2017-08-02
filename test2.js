function loadJSON(url) {=
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); // For IE7+, Firefox, Chrome, Opera, Safari
    } else {
        xml = new ActiveXObject("Microsoft.XMLHTTP"); // For IE6, IE5
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                createPosts(JSON.parse(xmlhttp.responseTest));
            } else if (xmlhttp.status == 400) {
                alert("400 error");
            } else {
                alert("Error");
            }
        }
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

loadJSON('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=team254');