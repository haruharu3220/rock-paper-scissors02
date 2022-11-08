var selecter = 0;
console.log('pathname:' + location.pathname);

addEventListener('keypress', select);
function select(e) {
    if (e.keyCode === 13) {
        if (selecter === 1) {
            $("#yes_audio").get(0).play();
            setTimeout(function () {
                location.href = "game.html";
            }, 700);
        }
        if (selecter === 2) {
            $("#yes_audio").get(0).play();
            setTimeout(function () {
                location.href = "makeMap.html";
            }, 700);
        }
        if (selecter === 3) {
            $("#yes_audio").get(0).play();
            setTimeout(function () {
                location.href = "settings.html";
            }, 700);
        }


    }
    return false;
}


addEventListener('keydown', plus);
addEventListener('keydown', minus);
function numberSelect(number) {
    if (number === 1) {
        $("#start a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#select a").css("background", "gray");
        $("#setting a").css("background", "gray");
    }

    if (number === 2) {
        $("#start a").css("background", "gray");
        $("#select a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#setting a").css("background", "gray");
    }

    if (number === 3) {
        $("#start a").css("background", "gray");
        $("#select a").css("background", "gray");
        $("#setting a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
    }
}


function plus(e) {
    if (e.keyCode === 40) { //下ボタン
        if (selecter < 3) {
            selecter++;
        }
        numberSelect(selecter);
    }

    return false;
}


function minus(e) {
    if (e.keyCode === 38) { //上ボタン
        if (selecter > 1) {
            selecter--;
        }
        numberSelect(selecter);
        console.log(selecter);

    }

    return false;
}

