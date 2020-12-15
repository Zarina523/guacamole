var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 20;
var x = canvas.width/2;
var y = canvas.height/2;
var x2 = 1;
var y2 = -1;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = "#FF00FF";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if((x + x2 > canvas.width-radius) || (x + x2 < radius)) {
        x2 = -x2;
    }

    if((y + y2 > canvas.height-radius) || (y + y2 < radius)) {
        y2 = -y2;
    }

    x += x2;
    y += y2;
}

setInterval(draw, 10);