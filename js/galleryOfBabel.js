$(window).ready(function() {
    var time_frame = 1000 / 10;
    //drawOtherLine();
    //one_iteration();
    //set every fourth element to 125
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var data = imageData.data;
    var i = 0;

    for (var i = 3; i < data.length; i += 4) {
      data[i] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    setInterval(one_iteration, time_frame);
});

function one_iteration(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = new Image();
  var imageData = ctx.getImageData(0, 0, c.width, c.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
      data[i]     = data[i] + 1;     // red
      data[i + 1] = data[i + 1] + 2; // green
      data[i + 2] = data[i + 2]+ 3; // blue
      data[i] = (data[i] >= 255 ? 0 : data[i]);
      data[i + 1] = (data[i + 1] >= 255 ? 0 : data[i + 1]);
      data[i + 2] = (data[i + 2] >= 255 ? 0 : data[i + 2]);
    }
  ctx.putImageData(imageData, 0, 0);
}

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

function all_colors() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = new Image();
  var imageData = ctx.getImageData(0, 0, c.width, c.height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
      data[i]     = data[i] + 1;     // red
      data[i + 1] = data[i + 1] + 2; // green
      data[i + 2] = data[i + 2]+ 3; // blue
      data[i] = (data[i] >= 255 ? 0 : data[i]);
      data[i + 1] = (data[i + 1] >= 255 ? 0 : data[i + 1]);
      data[i + 2] = (data[i + 2] >= 255 ? 0 : data[i + 2]);
    }
  ctx.putImageData(imageData, 0, 0);
}

//draw blank Image
//iterate over every pixel
//oh jeez this is gonna be a lot of loops
