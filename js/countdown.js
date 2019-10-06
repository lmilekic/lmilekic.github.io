// Handles making the countdown to 10/2, and making it pretty
updateCountdown();
$(function () {
    setInterval(updateCountdown, 1000 * 60 * 60); //every 1 hour
});

function updateCountdown() {
    var curr = new Date();
    curr.setHours(0,0,0);
    var bigDay = new Date(year=2020, month=9, date=2);
    var days = Math.round((bigDay - curr)/(1000*60*60*24));
    var countdownDiv = $(".countdown");
    countdownDiv.empty();
    if(days > 0)
    {
        countdownDiv.append("It is " + days + " days until October 2nd 2020");
    }
    else if(days < 0)
    {
        countdownDiv.append("It has been " + (days * -1) + " days since October 2nd 2020");
    }
    else
    {
        countdownDiv.append("Don't look in a magic mirror, today is important!");
    }
}