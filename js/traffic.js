// Handles making the traffic stuff, and making it pretty
updateWeather();
$(function () {
    setInterval(updateWeather, 1000 * 60 * 15); //every 15 minutes
});

function updateWeather() {
    $.ajax({
        url: "https://wcvrmmhyzelr.azurewebsites.net/api/GetTrafficData",
        crossDomain: true,
        type: "GET",
        success: function (result, x) {
            parseAndUpdateTrafficWidget(result);
        }
    });
}

function parseAndUpdateTrafficWidget(data) {
    // Comes in as raw JSON
    var parsedJson = JSON.parse(data);
    console.log(parsedJson);

    var traffic1Json = JSON.parse(parsedJson[0]);
    var traffic2Json = JSON.parse(parsedJson[1]);
    var trafficDiv = $(".traffic");

    trafficDiv.empty();
    trafficDiv.append("Luka Time to Work (driving): " + traffic1Json['routes'][0]['legs'][0]['duration']['text'])
    trafficDiv.append("<br />")
    trafficDiv.append("Maggie Time to Work (driving): " + traffic2Json['routes'][0]['legs'][0]['duration']['text'])
}