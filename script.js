
/*  Weather API */
var OneWordClimate
var currLocation;
var apiKey = "166a433c57516f51dfab1f7edaed8413"
function CallWeather() {
    var 
    var APICity = "Sydney";
    console.log(APICity)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+APICity+"&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    //add new api
    var queryURL1 = "https:/api.openweathermap.org/data/2.5/weather?q=" + currLocation + " &appid=" + apiKey;
    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function(response) {            
     OneWordClimate = response.weather[0].main
    console.log(response)
    console.log(OneWordClimate);
})
}
CallWeather()


/* Clock*/
function update() {
    var HourNow= moment().format('LTS')
    $("#Clock").text(HourNow)
    };

    $(document).ready(function() {
        setInterval(update, 0);
    })
    function latLon(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=eee2c7e90565ccc72ed33f1160353f32";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            currentLoc = response.name;
            dataStroage(response.name);// call the function for save the data
            getCurrent(currentLoc);// call the the function for cureent weather
        });
    }



