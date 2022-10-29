$(function () {
    $("p").on("click", function () {
        $("table").css("font-size", "36px");
        const min = 0;
        const max = 2;

        const rand_a1 = Math.floor(Math.random() * (max - min + 1) + min);
        //$("table").css("font-size", "36px");

        console.log(rand_a1);
        if (rand_a1 === 0) {
            $(".table_a1").text("グー");
        } else if (rand_a1 === 1) {
            $(".table_a1").text("チョキ");
        } else if (rand_a1 === 2) { 
        $(".table_a1").text("パー");
        }

    //let i=1;
    // $("td").each(function(){
    //     $("td").text("これは"+ i);
    //     console.log(i);
    //     i++;
    // });

});
});















/*
あとで参考になりそうな資料

クリック時のクラスの追加・削除
https://qiita.com/Scheme/items/300739f6da6a95e58306


キーボード入力で移動
https://original-game.com/introduction-to-javascript-move-a-character-by-input/


*/
