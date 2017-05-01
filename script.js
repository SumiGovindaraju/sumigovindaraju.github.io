$(document).ready(function() {
    $('.dropdown').hover(
        function() {
            $(this).children('.submenu').slideDown(350);
        }, function() {
            $(this).children('.submenu').slideUp(350);
        }
    );
});
