jQuery(document).ready(function($){
    $(".loadAnim").css("display", "block");
    $("body").css("background-color", "#505050");
    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function(response){
        var respData = response.data;
        for (let i = 0; i < 4; i++) {
            console.log(respData[i]);
        }

        $("#cardImg1").attr("src", respData[0].image);
        $("#cardImg2").attr("src", respData[1].image);
        $("#cardImg3").attr("src", respData[2].image);
        $("#cardImg4").attr("src", respData[3].image);

        $("#cardTitle1").text(respData[0].name);
        $("#cardTitle2").text(respData[1].name);
        $("#cardTitle3").text(respData[2].name);
        $("#cardTitle4").text(respData[3].name);

        $(".loadAnim").css("display", "none");
        $("body").css("background-color", "white");
        $(".container").css("display", "block");
    });
});

function btnClick(id) {
    var targetDiv = "#extraContent" + id;
    if ($(targetDiv).children().length == 0) {
        $(".loadAnim").css("display", "block");
        $("body").css("background-color", "#505050");
        $(".container").css("display", "none");
        const request = axios.get('http://csc225.mockable.io/consoles' + '/' + id);
        request.then(function(response){
            var respData = response.data;
            var price = $("<p></p>").text("Price: " + respData.price);
            var country = $("<p></p>").text("Country: " + respData.country);
            var releaseYr = $("<p></p>").text("Release Year: " + respData.releaseYear);
            $(targetDiv).append(price, country, releaseYr);
            $(".loadAnim").css("display", "none");
            $("body").css("background-color", "white");
            $(".container").css("display", "block");
        });
    }
}