$(document).ready(function() {
    $('.dropdown').hover(
        function() {
            $(this).children('.submenu').slideDown(350);
        }, function() {
            $(this).children('.submenu').slideUp(350);
        }
    );
});

window.addEventListener("load", function() {
  if (Math.random() < 0.5) {
      $('#menu').css('background-color', 'rgb(255, 100, 100)');
      $('#menu li ul').css('background-color', 'rgb(225, 75, 75)');
      $('#menu li li a').css('border-bottom', 'solid 1px rgb(200, 50, 50)');
  } else if (Math.random() < 0.5) {
      $('#menu').css('background-color', 'rgb(100, 255, 100)');
      $('#menu li ul').css('background-color', 'rgb(75, 225, 75)');
      $('#menu li li a').css('border-bottom', 'solid 1px rgb(50, 200, 50)');
  } else {
      $('#menu').css('background-color', 'rgb(100, 100, 255)');
      $('#menu li ul').css('background-color', 'rgb(75, 75, 225)');
      $('#menu li li a').css('border-bottom', 'solid 1px rgb(50, 50, 200)');
  }
});
