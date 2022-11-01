var selecter = 0;

addEventListener('keypress', select);


function select(e) {
    if (e.keyCode === 13) {
        if(selecter===1){
            location.href="game.html";
        }
        if(selecter===2){
            location.href="game.html";
        }
        if(selecter===3){
            location.href="settings.html";
        }


    }
    return false;
}

addEventListener('keydown', plus);
addEventListener('keydown', minus);
function numberSelect(number) {
    if (number === 1) {
        console.log("1だよ");
        $("#start a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#select a").css("background", "gray");
        $("#setting a").css("background", "gray");
    }

    if (number === 2) {
        console.log("2だよ");
        $("#start a").css("background", "gray");
        $("#select a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#setting a").css("background", "gray");
    }

    if (number === 3) {
        console.log("3だよ");
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
        console.log(selecter);
        
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

