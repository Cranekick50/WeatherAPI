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
                    console.log(d)
                    var date = new Date()
                    var d = moment(date).format('L')
                    $(".nameCity").text(value+" "+d);
                    var tempF = (response.current.temp - 273.15) * 1.80 + 32;
                    $(".tempCity").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)));
                    $(".humidityCity").text(JSON.stringify("Humidity: "+response.current.humidity+"%"));
                    $(".windCity").text(JSON.stringify("Wind Speed: "+response.current.wind_speed+" MPH"));
                    $(".uvCity").text(JSON.stringify("UV index: " +response.current.uvi));
                    if (response.current.uvi < 6) {
                        $(".uvCity").css("background-color","green");
                    } else {
                        $(".uvCity").css("background-color","red");
                    }
                    console.log (response.daily[1].temp.day)
                    var dayOne = Date.add(1).day();
                    var tempF = (response.daily[1].temp.day - 273.15) * 1.80 + 32;
                    $(".day1").text(dayOne)
                    $(".temp1").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)))
                    $(".humid1").text(JSON.stringify("Humidity: "+response.daily[1].humidity))
                    
        
        });
    });    
}
});