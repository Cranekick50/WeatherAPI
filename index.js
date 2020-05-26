var APIKey = "7f755d4aafb97ca2538210838a8be727";

$(".saveBtn").click(function(){
    let value = $(".searchInfo").val();
    let searchURL = "https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid="+APIKey;
    $("ol").append("<br><button>"+value+"</button></br>")

    if (value !== undefined) {
        $.ajax({
            url: searchURL,
            method: "GET"
          }).then(function(response) {
            var lon=(response.coord.lon)
            var lat=(response.coord.lat)
            let searchURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude={part}&appid="+APIKey
                $.ajax({
                    url: searchURL2,
                    method: "GET"
                }).then(function(response) {
                    console.log(response)
                    var d = new Date()
                    $(".nameCity").text(value+" "+d);
                    var tempF = (response.current.temp - 273.15) * 1.80 + 32;
                    $(".tempCity").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)));
                    $(".humidityCity").text(JSON.stringify("Humidity: "+response.current.humidity+"%"));
                    $(".windCity").text(JSON.stringify("Wind Speed: "+response.current.wind_speed+" MPH"));
                    $(".uvCity").text(JSON.stringify("UV index: " +response.current.uvi));
                }).then(function(response) {
                    
                    
        });
        });
    });    
}
});