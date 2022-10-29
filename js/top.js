$(".yes").on("click",function(){

    //https://maou.audio/
    $("#yes_audio").get(0).play();
    setTimeout(function(){
        window.location.href = "game.html";
        }, 700);
});


$(".no").on("click",function(){

    $("#yes_audio").get(0).play();
    setTimeout(function(){
    window.location.href = "game.html";
    }, 700);
});