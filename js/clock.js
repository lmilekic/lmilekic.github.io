// Handles making the clock, and making it pretty
$(function () {
    setInterval(updateClock, 500);
    
});

function updateClock() {
    
    var curr = new Date();
    var hours = curr.getHours();
    var mins = curr.getMinutes();
    var seconds = curr.getSeconds();
    if (mins < 10) {
        mins = "0" + mins;
    }
    var pastnoon = false;
    if (hours > 12) {
        hours = (hours - 12);
        pastnoon = true;
    }
    var time = `${hours}:${mins}:${seconds} ${pastnoon ? "PM" : "AM"}`
    $(".clock").empty();
    $(".clock").html(time);
}