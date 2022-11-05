let settingsLevel = 0;

function getSettingsLevel() {
    return settingsLevel;


}

window.globalFunction = {};
window.globalFunction.getSettingsLevel = getSettingsLevel;


addEventListener('keypress', selectLevel);
function selectLevel(e) {
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
    }

    if (number === 1) {
        $("#demonstration a").css("background", "gray");
        $("#easy a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
    }

}

function settingsLevelPlus(e) {
    if (e.keyCode === 40) { //下ボタン
        if (settingsLevel < 1) {
            console.log("下");
            settingsLevel++;
        }
        levelSelect(settingsLevel);
    }

    return false;
}


function settingsLevelMinus(e) {
    if (e.keyCode === 38) { //上ボタン
        if (settingsLevel > 0) {
            console.log("上");
            settingsLevel--;
        }
        levelSelect(settingsLevel);
    }

    return false;
}
