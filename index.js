var APIKey = "7f755d4aafb97ca2538210838a8be727";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=" + APIKey;



$(".saveBtn").click(function(){
    let value = $(".searchInfo").val();
    let searchURL = "https://openweathermap.org/find?q="+value
    $("ol").append("<br><button>"+value+"</button></br>")

    if (value !== undefined) {
        $.ajax({
            url: searchURL,
            method: "GET"
          }).then(function(response) {
            console.log(searchURL)
        });
    }
});


