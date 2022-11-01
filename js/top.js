var selecter = 0;

addEventListener('keypress', select);


function select(e) {
    if (e.keyCode === 13) {

        //selecter++;  
        //console.log(selecter);
        // if(selecter===1){
        //     $("#start a").css("background","red");
        //     $("#select a").css("background","gray");
        //     $("#setting a").css("background","gray");
        // }

        // if(selecter===2){
        //     $("#start a").css("background","gray");
        //     $("#select a").css("background","red");
        //     $("#setting a").css("background","gray");
        // }

        // if(selecter===3){
        //     $("#start a").css("background","gray");
        //     $("#select a").css("background","gray");
        //     $("#setting a").css("background","red");
        // }


    }
    return false;
}

addEventListener('keypress', plus);
addEventListener('keypress', minus);
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
    if (e.keyCode === 97) { //aボタン
        if (selecter < 3) {
            selecter++;
        }
        numberSelect(selecter);
        console.log(selecter);
        
    }
    
    return false;
}


function minus(e) {
    if (e.keyCode === 115) { //Sボタン
        if (selecter > 1) {
            selecter--;
        }
        numberSelect(selecter);
        console.log(selecter);
        
    }
    
    return false;
}

