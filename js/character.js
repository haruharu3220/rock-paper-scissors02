//https://www.sejuku.net/blog/103061

$('#enemy_green').animate({'left': '100%'}).animate({'left': '0'});
 


$(function () {
    $("#gu").on("click", function () {
       $("#enemy_green").animate({"left":"100%"}) 
       $(".chara").animate({"left":"50%"}) 
        console.log("今押しました。");
    })
});
