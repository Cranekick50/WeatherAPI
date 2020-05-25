var APIKey = "7f755d4aafb97ca2538210838a8be727";




$(".saveBtn").click(function(){
    let value = $(".searchInfo").val();
    let searchURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + "&appid=" + APIKey;
    $("ol").append("<br><button>"+value+"</button></br>")

    if (value !== undefined) {
        $.ajax({
            url: searchURL,
            method: "GET"
          }).then(function(response) {
            console.log(response)
        });
    }
});


