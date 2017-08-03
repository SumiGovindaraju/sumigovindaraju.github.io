window.onscroll = function() {
    var height = $(window).scrollTop();
    height = height / 5 - 550;
    y = -height - 10;
    var button = y.toString();
    var z = button + "px";
    var scroll = height.toString();
    var x = scroll + "px";
    console.log(x);
    console.log(z);
    document.getElementById("parallaxIMG").style.marginTop = x;
};

window.onload = function() {
$(function(){
$('.carousel').carousel({
      interval: 7000
    });

});

};

