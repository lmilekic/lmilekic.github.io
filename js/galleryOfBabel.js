$(window).ready(function() {
    var time_frame = 1000 / 10;
    drawline();
    drawOtherLine();
    setInterval(oneIteration, time_frame);
});

function drawline() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawOtherLine() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function lighten() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
        data[i] = (data[i] + 2) % 256;
    }
    ctx.putImageData(imageData, 0, 0);
}

function oneIteration() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = new Image();
  var imageData = ctx.getImageData(0, 0, c.width, c.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 1) {
      data[i] = (data[i] + 1) % 256;
  }
  ctx.putImageData(imageData, 0, 0);
}

//draw blank Image
//iterate over every pixel
//oh jeez this is gonna be a lot of loops
