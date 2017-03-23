var isPlay = true;
var canvas, ctx;
var width = innerWidth, height = innerHeight;

window.addEventListener("keypress", function(e) {
    isPlay = !isPlay;
});

window.addEventListener("load", function(e) {
    canvas = document.getElementById("can");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    init();
});

function init() {
    ctx.strokeStyle = "#1C86EE";
    ctx.moveTo(width/2, height/2-150);
    ctx.lineTo(width/2+150, height/2);
    ctx.stroke();
    //draw();
}

function draw() {
    step();
    requestAnimationFrame(draw);
}

function step() {

}