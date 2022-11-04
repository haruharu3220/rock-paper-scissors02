var returnTopSelecter = 0;

addEventListener('keypress', returnTop);
function returnTop(e) {

    if (e.keyCode === 13) {
        if (returnTopSelecter !== 0) {
            location.href = "top.html";
        }

    }
    return false;
}


addEventListener('keydown', plus2);
function numberSelect(number) {
    if (number === 1) {
        // $("#returnTop a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#returnTop a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
    }
}


function plus2(e) {
    if (e.keyCode === 40) { //下ボタン
        console.log(returnTopSelecter);
        if (returnTopSelecter === 0) {
            returnTopSelecter++;
        }
        numberSelect(returnTopSelecter);
    }
}
