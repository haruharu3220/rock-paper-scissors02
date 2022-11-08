let settingsLevel = 0;
let levelTypesNum = 4; //何種類のレベルがあるか

addEventListener('keypress', selectLevel);
function selectLevel(e) {
    //エンターキーを押したらトップ画面に遷移
    if (e.keyCode === 13) {
        location.href = "top.html";
    }
}

addEventListener('keydown', settingsLevelPlus);
addEventListener('keydown', settingsLevelMinus);
function levelSelect(number) {
    if (number === 0) {
        $("#demonstration a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#easy a").css("background", "gray");
        $("#normal a").css("background", "gray");
        $("#hard a").css("background", "gray");
    }

    if (number === 1) {
        $("#demonstration a").css("background", "gray");
        $("#easy a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#normal a").css("background", "gray");
        $("#hard a").css("background", "gray");
    }

    if (number === 2) {
        $("#demonstration a").css("background", "gray");
        $("#easy a").css("background", "gray");
        $("#normal a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
        $("#hard a").css("background", "gray");
    }

    if (number === 3) {
        $("#demonstration a").css("background", "gray");
        $("#easy a").css("background", "gray");
        $("#normal a").css("background", "gray");
        $("#hard a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
    }
}

function settingsLevelPlus(e) {
    if (e.keyCode === 40) { //下ボタン

        if (settingsLevel < levelTypesNum) {
            settingsLevel++;
        }
        console.log("下のsettingsLevelは"+settingsLevel);
        levelSelect(settingsLevel);
    }
}

function settingsLevelMinus(e) {
    if (e.keyCode === 38) { //上ボタン

        if (settingsLevel > 0) {
            settingsLevel--;
        }
        console.log("上のsettingsLevelは"+settingsLevel);
        levelSelect(settingsLevel);
    }
}

addEventListener('keydown', returnTop);
function returnTop(e) {
    if (e.keyCode === 37) {
        location.href = "top.html";
    }
}

function getSettingsLevel() {
    console.log("関数内のsettingsLevelは"+settingsLevel);
    return settingsLevel;
}