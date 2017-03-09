var isPlay = true;
var canvas, ctx;

window.addEventListener("keypress", function(e) {
    isPlay = !isPlay;
});

window.addEventListener("load", function(e) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    init();
});

function init() {
    alert("init");
    ctx.fillStyle = '#1C86EE';
    var x1 = 30;
    var y1 = 40;
    var r =  50;
    var theta = 0.5;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + r * Math.cos(theta), y1 + r * Math.sin(theta));
    ctx.stroke();
    //draw();
}

function draw() {
    step();
    requestAnimationFrame(draw);
}

function step() {

}