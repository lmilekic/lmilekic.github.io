$(window).ready(function() {
    var time_frame = 1;
    setupCanvas();
    setInterval(one_iteration, time_frame);
});

function one_iteration() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var data = imageData.data;
    for(var i = 0; i < 1; i++){
      recursiveApproach(0, data);
    }
    ctx.putImageData(imageData, 0, 0);
}

function recursiveApproach(i, data) {
  if(i >= data.length){
    return;
  }
  if(i % 4 == 3){
    recursiveApproach(i+1,data);
  }
  else{
    if(data[i] >= 250){

      data[i] = 0;
      recursiveApproach(i+5,data);
    }
    else{
      data[i] = data[i]+10;
    }
  }
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
        data[i] = data[i] + 1; // red
        data[i + 1] = data[i + 1] + 2; // green
        data[i + 2] = data[i + 2] + 3; // blue
        data[i] = (data[i] >= 255 ? 0 : data[i]);
        data[i + 1] = (data[i + 1] >= 255 ? 0 : data[i + 1]);
        data[i + 2] = (data[i + 2] >= 255 ? 0 : data[i + 2]);
    }
    ctx.putImageData(imageData, 0, 0);
}

function setupCanvas() {
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
}
