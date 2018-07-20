//Set the page to auto reload (to update)
setTimeout(function () {
    location.reload();
}, 10000);




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
        var hour = (hours - 12);
        pastnoon = true;
    }
    var time = `${hours}:${mins}:${seconds} ${pastnoon ? "PM" : "AM"}`
    $(".clock").html(time);
}
