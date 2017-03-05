
var arr;
generateArr(10, 10);
renderArr()

function generateArr(width, height) {
    arr = [];
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            row.push(Math.floor(Math.random() * 2) == 1);
        }
        arr.push(row);
    }
}

function renderArr() {
    //build string?
    var newGridHtml = '';
    for (var i = 0; i < arr.length; i++) {
        newGridHtml += '<div class="row">';
        for (var j = 0; j < arr[i].length; j++) {
            newGridHtml += '<div class="';
            newGridHtml += arr[i][j] ? 'hawk' : 'dove';
            newGridHtml += ' cell"></div>';
        }
        newGridHtml += '</div>';
    }
    $('#grid').html(newGridHtml);
}