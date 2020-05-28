var APIKey = "7f755d4aafb97ca2538210838a8be727";

function reSearch(cityName) {
    let searchURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey;
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
                $(".nameCity").text(cityName+" "+d);
                var tempF = (response.current.temp - 273.15) * 1.80 + 32;
                $(".tempCity").text("Temperature (F): "+tempF.toFixed(2));
                $(".humidityCity").text("Humidity: "+response.current.humidity+"%");
                $(".windCity").text("Wind Speed: "+response.current.wind_speed+" MPH");
                $(".uvCity").text(response.current.uvi);
                if (response.current.uvi < 6) {
                    $(".uvCity").css("background-color","green");
                } else {
                    $(".uvCity").css("background-color","red");
                }
                if (response.daily[0].weather[0].description === "clear sky") {
                    $(".currentIcon").addClass("fa fa-sun")
                } if (response.daily[0].weather[0].description === "light rain") {
                    $(".currentIcon").addClass("fa fa-cloud-sun-rain")
                } if (response.daily[0].weather[0].description === "moderate rain") {
                    $(".currentIcon").addClass("fa fa-cloud-showers-heavy")
                } if (response.daily[0].weather[0].description === "overcast clouds"||"scattered clouds") {
                    $(".currentIcon").addClass("fa fa-cloud")
                }


                var dayOne = moment(d).add(1, 'days').format('L');
                var tempF = (response.daily[1].temp.day - 273.15) * 1.80 + 32;
                $(".day1").text(dayOne)
                $(".temp1").text("Temperature (F): "+tempF.toFixed(2))
                $(".humid1").text("Humidity: "+response.daily[1].humidity)
                console.log (response.daily[2].weather[0].description)
                if (response.daily[1].weather[0].description === "clear sky") {
                    $(".icon1").addClass("fa fa-sun")
                } if (response.daily[1].weather[0].description === "light rain") {
                    $(".icon1").addClass("fa fa-cloud-sun-rain")
                } if (response.daily[1].weather[0].description === "moderate rain") {
                    $(".icon1").addClass("fa fa-cloud-showers-heavy")
                } if (response.daily[1].weather[0].description === "overcast clouds"||"scattered clouds") {
                    $(".icon1").addClass("fa fa-cloud")
                }
                    

                var dayTwo = moment(d).add(2, 'days').format('L');
                var tempF = (response.daily[2].temp.day - 273.15) * 1.80 + 32;
                $(".day2").text(dayTwo)
                $(".temp2").text("Temperature (F): "+tempF.toFixed(2))
                $(".humid2").text("Humidity: "+response.daily[2].humidity)
                if (response.daily[2].weather[0].description === "clear sky") {
                    $(".icon2").addClass("fa fa-sun")
                } if (response.daily[2].weather[0].description === "light rain") {
                    $(".icon2").addClass("fa fa-cloud-sun-rain")
                } if (response.daily[2].weather[0].description === "moderate rain") {
                    $(".icon2").addClass("fa fa-cloud-showers-heavy")
                } if (response.daily[2].weather[0].description === "overcast clouds"||"scattered clouds") {
                    $(".icon2").addClass("fa fa-cloud")
                }

                var dayThree = moment(d).add(3, 'days').format('L');
                var tempF = (response.daily[3].temp.day - 273.15) * 1.80 + 32;
                $(".day3").text(dayThree)
                $(".temp3").text("Temperature (F): "+tempF.toFixed(2))
                $(".humid3").text("Humidity: "+response.daily[3].humidity)
                if (response.daily[3].weather[0].description === "clear sky") {
                    $(".icon3").addClass("fa fa-sun")
                } if (response.daily[3].weather[0].description === "light rain") {
                    $(".icon3").addClass("fa fa-cloud-sun-rain")
                } if (response.daily[3].weather[0].description === "moderate rain") {
                    $(".icon3").addClass("fa fa-cloud-showers-heavy")
                } if (response.daily[3].weather[0].description === "overcast clouds"||"scattered clouds") {
                    $(".icon3").addClass("fa fa-cloud")
                }

                var dayFour = moment(d).add(4, 'days').format('L');
                var tempF = (response.daily[4].temp.day - 273.15) * 1.80 + 32;
                $(".day4").text(dayFour)
                $(".temp4").text("Temperature (F): "+tempF.toFixed(2))
                $(".humid4").text("Humidity: "+response.daily[4].humidity)
                if (response.daily[4].weather[0].description === "clear sky") {
                    $(".icon4").addClass("fa fa-sun")
                } if (response.daily[4].weather[0].description === "light rain") {
                    $(".icon4").addClass("fa fa-cloud-sun-rain")
                } if (response.daily[4].weather[0].description === "moderate rain") {
                    $(".icon4").addClass("fa fa-cloud-showers-heavy")
                } if (response.daily[4].weather[0].description === "overcast clouds"||"scattered clouds") {
                    $(".icon4").addClass("fa fa-cloud")
                }

                var dayFive = moment(d).add(5, 'days').format('L');
                var tempF = (response.daily[5].temp.day - 273.15) * 1.80 + 32;
                $(".day5").text(dayFive)
                $(".temp5").text("Temperature (F): "+tempF.toFixed(2))
                $(".humid5").text("Humidity: "+response.daily[5].humidity)
                if (response.daily[5].weather[0].description === "clear sky") {
                    $(".icon5").addClass("fa fa-sun")
                } if (response.daily[5].weather[0].description === "light rain") {
                    $(".icon5").addClass("fa fa-cloud-sun-rain")
                } if (response.daily[5].weather[0].description === "moderate rain") {
                    $(".icon5").addClass("fa fa-cloud-showers-heavy")
                } if (response.daily[5].weather[0].description === "overcast clouds"||"scattered clouds") {
                    $(".icon5").addClass("fa fa-cloud")
                }
    
    });
});
}
$(".saveBtn").click(function(){
    let value = $(".searchInfo").val();
    
    $("ol").prepend("<br><button onclick=reSearch('"+value+"')>"+value+"</button></br>")
    reSearch(value)

     
    
           
});