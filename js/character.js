//https://www.sejuku.net/blog/103061


$('#enemy_green').animate({'left': '100%'}).animate({'left': '0'}); //左から見て
$('#enemy_green').animate({'top': '100%'}).animate({'top': '0'}); //上から見て



// 斜めに動かす
//https://arkgame.com/2022/08/04/post-311539/
$('#enemy_green')
    .animate({ "top": "100%", "left": "100%" ,})
    .animate({ "top": "0px", "left": "0px"}) ;

$(function () {
    $("#gu").on("click", function () {
       $("#enemy_green").animate({"left":"50%"}) 
       $(".chara").animate({"left":"50%"}) 
        console.log("今押しました。");
    })
});
