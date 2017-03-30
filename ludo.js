//grid width and height
var bw = 600;
var bh = 600;
//padding around grid
var p = 10;
//size of canvas
var cw = bw + (p * 2) + 2;
var ch = bh + (p * 2) + 2;
var canvas = $('<canvas/>').attr({
    width: cw,
    height: ch
}).appendTo('#ludo-base');
var context = canvas.get(0).getContext("2d");

function drawBoard() {
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var b = 50; b <= 250; b += 40) {
        context.fillStyle = "#FF2222 ";
        context.fillRect(b, 290, 40, 40);
        context.fillStyle = "#008833";
        context.fillRect(290, b, 40, 40);
        context.fillStyle = "#ffff33";
        context.fillRect(b + 280, 290, 40, 40);
        context.fillStyle = "#3333ff";
        context.fillRect(290, b + 280, 40, 40);
    }

    context.fillStyle = "#FF2222 ";
    context.fillRect(50, 250, 40, 40);
    context.fillRect(90, 330, 40, 40);
    context.fillStyle = "#008833";
    context.fillRect(330, 50, 40, 40);
    context.fillRect(250, 90, 40, 40);
    context.fillStyle = "#ffff33";
    context.fillRect(530, 330, 40, 40);
    context.fillRect(490, 250, 40, 40);
    context.fillStyle = "#3333ff";
    context.fillRect(330, 490, 40, 40);
    context.fillRect(250, 530, 40, 40);

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "lightgray";
    context.stroke();
}

drawBoard();