/**
 * Created by Sumi.Govindaraju20 on 3/6/2017.
 */
var canvas, ctx;
var generation = 0;
var width = innerWidth, height = innerHeight;
var cellWidth = 8;
var cellHeight = 8;
var proportionalWidth = Math.floor(width/cellWidth);
var proportionalHeight =  Math.floor(height/cellHeight);
var block = new Array(proportionalWidth);
for (var i = 0; i < proportionalWidth; i++) {
    block[i] = new Array(proportionalHeight);
}
window.addEventListener("load", function(e) {
    canvas = document.getElementById("can");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    init();
});

function init() {
    console.log("init()");
    for (var i = 0; i < proportionalWidth; i++) {
        for (var j = 0; j < proportionalHeight; j++) {
            if (Math.random() >= 0.5)
                block[i][j] = true;
            else
                block[i][j] = false;
        }
    }
    draw();
}

function draw() {
    console.log("draw()");
    for (var i = 0; i < proportionalWidth; i++) {
        for (var j = 0; j < proportionalWidth; j++) {
            if (block[i][j])
                ctx.fillStyle = "#000000";
            else
                ctx.fillStyle = "#ffffff";
           ctx.fillRect(i*cellWidth, j*cellHeight, cellWidth, cellHeight);
        }
    }
    step();

    requestAnimationFrame(draw);
}

function step() {
    var blockNextGen = new Array(proportionalWidth);
    for (var i = 0; i < proportionalWidth; i++) {
        blockNextGen[i] = new Array(proportionalHeight);
        for (var j = 0; j < proportionalHeight; j++) {
            var count = 0;
            if (i >= 1 && j >= 1 && block[i - 1][j - 1]) {
                count++;
            }
            if (j >= 1 && block[i][j - 1])
                count++;
            if (i < (proportionalWidth - 1) && j >= 1 && block[i + 1][j - 1])
                count++;
            if (i >= 1 && block[i - 1][j])
                count++;
            if (i < (proportionalWidth - 1) && block[i + 1][j])
                count++;
            if (i >= 1 && j < (proportionalHeight - 1) && block[i - 1][j + 1])
                count++;
            if (j < (proportionalHeight - 1) && block[i][j + 1])
                count++;
            if (i < (proportionalWidth - 1) && j < (proportionalHeight - 1) && block[i + 1][j + 1])
                count++;
            blockNextGen[i][j] = count == 3 || (block[i][j] && count == 2);
        }
    }
    block = blockNextGen;
}