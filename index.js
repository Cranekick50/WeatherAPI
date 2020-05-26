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
                    var dayOne = moment(d).add(1, 'days').format('L');
                    var tempF = (response.daily[1].temp.day - 273.15) * 1.80 + 32;
                    $(".day1").text(dayOne)
                    $(".temp1").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)))
                    $(".humid1").text(JSON.stringify("Humidity: "+response.daily[1].humidity))

                    var dayTwo = moment(d).add(2, 'days').format('L');
                    var tempF = (response.daily[2].temp.day - 273.15) * 1.80 + 32;
                    $(".day2").text(dayTwo)
                    $(".temp2").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)))
                    $(".humid2").text(JSON.stringify("Humidity: "+response.daily[2].humidity))

                    var dayThree = moment(d).add(3, 'days').format('L');
                    var tempF = (response.daily[3].temp.day - 273.15) * 1.80 + 32;
                    $(".day3").text(dayThree)
                    $(".temp3").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)))
                    $(".humid3").text(JSON.stringify("Humidity: "+response.daily[3].humidity))

                    var dayFour = moment(d).add(4, 'days').format('L');
                    var tempF = (response.daily[4].temp.day - 273.15) * 1.80 + 32;
                    $(".day4").text(dayFour)
                    $(".temp4").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)))
                    $(".humid4").text(JSON.stringify("Humidity: "+response.daily[4].humidity))

                    var dayFive = moment(d).add(5, 'days').format('L');
                    var tempF = (response.daily[5].temp.day - 273.15) * 1.80 + 32;
                    $(".day5").text(dayFive)
                    $(".temp5").text(JSON.stringify("Temperature (F): "+tempF.toFixed(2)))
                    $(".humid5").text(JSON.stringify("Humidity: "+response.daily[5].humidity))
                    
        
        });
    });    
}
});