// Handles making the weather, and making it pretty
updateWeather();
$(function () {
    setInterval(updateWeather, 1000 * 60 * 10); //every 10 minutes
});

function updateWeather() {
    $.ajax({
        url: "https://wcvrmmhyzelr.azurewebsites.net/api/GetWeatherData",
        crossDomain: true,
        type: "GET",
        success: function (result, x) {
            parseAndUpdateWidget(result);
        }
    });
}

function parseAndUpdateWidget(data) {
    // Comes in as raw JSON
    var parsedJson = JSON.parse(data);
    console.log(parsedJson);

    var weatherDiv = $(".weather");
    weatherDiv.empty();
    weatherDiv.append("Temp: " + parsedJson['main']['temp'])
    weatherDiv.append("<br />")
    weatherDiv.append("Today: " + parsedJson['weather'][0]['description'])
}