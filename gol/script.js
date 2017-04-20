var canvas, ctx;
var generation = 1;
var width = innerWidth, height = innerHeight;
var cellWidth = 8;
var cellHeight = 8;
var proportionalWidth = Math.floor(width/cellWidth);
var proportionalHeight =  Math.floor(height/cellHeight);
var block = new Array(proportionalWidth);
var isPlay = true;
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
    alert("Press any key to pause/play. Click on any cell to change change its status.");
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
    if (isPlay) {
        for (var i = 0; i < proportionalWidth; i++) {
            for (var j = 0; j < proportionalWidth; j++) {
                if (block[i][j])
                    ctx.fillStyle = "#000000";
                else
                    ctx.fillStyle = "#ffffff";
                ctx.fillRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            }
        }
        step();
    }

    requestAnimationFrame(draw);
}

function step() {
    var blockNextGen = new Array(proportionalWidth);
    document.title = "Generation: " + generation;
    for (var i = 0; i < proportionalWidth; i++) {
        blockNextGen[i] = new Array(proportionalHeight);
        for (var j = 0; j < proportionalHeight; j++) {
            var count = 0;
            if (i >= 1 && j >= 1 && block[i - 1][j - 1])
                count++;
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
    generation++;
}

window.addEventListener("keypress", function(e) {
    isPlay = !isPlay;
    console.log("Pressed Key")
});

window.addEventListener("click", function(e){
    block[Math.floor(proportionalWidth*e.clientX/width)][Math.floor(proportionalHeight*e.clientY/height)] = !block[Math.floor(proportionalWidth*e.clientX/width)][Math.floor(proportionalHeight*e.clientY/height)];
    if (block[Math.floor(proportionalWidth*e.clientX/width)][Math.floor(proportionalHeight*e.clientY/height)])
        ctx.fillStyle = "#000000";
    else
        ctx.fillStyle = "#ffffff";
    ctx.fillRect(Math.floor(proportionalWidth*e.clientX/width) * cellWidth, Math.floor(proportionalHeight*e.clientY/height) * cellHeight, cellWidth, cellHeight);
});
