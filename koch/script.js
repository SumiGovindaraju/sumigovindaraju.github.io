var isPlay = true;

window.addEventListener("keypress", function(e) {
    isPlay = !isPlay;
});

window.addEventListener("load", function(e) {

});

function init() {
    draw();
}

function draw() {
    step();
    requestAnimationFrame(draw);
}

function step() {

}