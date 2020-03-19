
/*  Weather API */
var OneWordClimate

function CallWeather() {
    var APICity = "Sydney";
    console.log(APICity)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+APICity+"&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
        url: queryURL,
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




