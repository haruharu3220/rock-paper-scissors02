const min = 0;
const max = 2;

const rand_a1 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_b1 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_c1 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_d1 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_a2 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_b2 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_c2 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_d2 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_a3 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_b3 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_c3 = Math.floor(Math.random() * (max - min + 1) + min);
const rand_d3 = Math.floor(Math.random() * (max - min + 1) + min);


$(function () {
    $("#gu").on("click", function () {

        //$("table").css("font-size", "36px");

        console.log("a1=" + rand_a1);
        console.log("b1=" + rand_b1);
        // console.log("c1="+rand_c1);
        // console.log("d1="+rand_d1);


        if (rand_a1 === 0) {
            $(".table_a1").text("グー");
        } else if (rand_a1 === 1) {
            $(".table_a1").text("チョキ");
        } else if (rand_a1 === 2) {
            $(".table_a1").text("パー");
        }


        if (rand_b1 === 0) {
            $(".table_b1").text("グー");
        } else if (rand_b1 === 1) {
            $(".table_b1").text("チョキ");
        } else if (rand_b1 === 2) {
            $(".table_b1").text("パー");
        }

        if (rand_c1 === 0) {
            $(".table_c1").text("グー");
        } else if (rand_c1 === 1) {
            $(".table_c1").text("チョキ");
        } else if (rand_c1 === 2) {
            $(".table_c1").text("パー");
        }


        if (rand_d1 === 0) {
            $(".table_d1").text("グー");
        } else if (rand_d1 === 1) {
            $(".table_d1").text("チョキ");
        } else if (rand_d1 === 2) {
            $(".table_d1").text("パー");
        }

        if (rand_a2 === 0) {
            $(".table_a2").text("グー");
        } else if (rand_a2 === 1) {
            $(".table_a2").text("チョキ");
        } else if (rand_a2 === 2) {
            $(".table_a2").text("パー");
        }


        if (rand_b2 === 0) {
            $(".table_b2").text("グー");
        } else if (rand_b2 === 1) {
            $(".table_b2").text("チョキ");
        } else if (rand_b2 === 2) {
            $(".table_b2").text("パー");
        }

        if (rand_c2 === 0) {
            $(".table_c2").text("グー");
        } else if (rand_c2 === 1) {
            $(".table_c2").text("チョキ");
        } else if (rand_c2 === 2) {
            $(".table_c2").text("パー");
        }


        if (rand_d2 === 0) {
            $(".table_d2").text("グー");
        } else if (rand_d2 === 1) {
            $(".table_d2").text("チョキ");
        } else if (rand_d2 === 2) {
            $(".table_d2").text("パー");
        }

        if (rand_a3 === 0) {
            $(".table_a3").text("グー");
        } else if (rand_a3 === 1) {
            $(".table_a3").text("チョキ");
        } else if (rand_a3 === 2) {
            $(".table_a3").text("パー");
        }


        if (rand_b3 === 0) {
            $(".table_b3").text("グー");
        } else if (rand_b3 === 1) {
            $(".table_b3").text("チョキ");
        } else if (rand_b3 === 2) {
            $(".table_b3").text("パー");
        }

        if (rand_c3 === 0) {
            $(".table_c3").text("グー");
        } else if (rand_c3 === 1) {
            $(".table_c3").text("チョキ");
        } else if (rand_c3 === 2) {
            $(".table_c3").text("パー");
        }


        if (rand_d3 === 0) {
            $(".table_d3").text("グー");
        } else if (rand_d3 === 1) {
            $(".table_d3").text("チョキ");
        } else if (rand_d3 === 2) {
            $(".table_d3").text("パー");
        }
        //let i=1;
        // $("td").each(function(){
        //     $("td").text("これは"+ i);
        //     console.log(i);
        //     i++;
        // });

    });
});





$(function () {
    $(".table_a1").on("click", function () {

        if (rand_a1 === 0 /*グー*/) {
            alert("アイコ");
        } else if (rand_a1=== 1 /*チョキ*/) {
            alert("勝ち！！！");
        } else if (rand_a1 === 2/*パー*/) {
            alert("まけ😒😒😒");
        }


    });
});






/*
あとで参考になりそうな資料

クリック時のクラスの追加・削除
https://qiita.com/Scheme/items/300739f6da6a95e58306


キーボード入力で移動
https://original-game.com/introduction-to-javascript-move-a-character-by-input/


*/
