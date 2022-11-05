let settings = 0;

addEventListener('keypress', selectSettings);
function selectSettings(e) {
    if (e.keyCode === 13) {
            location.href="settings_level.html";
    }
  }

addEventListener('keydown', settingsPlus);
addEventListener('keydown', settingsMinus);
function settingsSelect(number) {
    if (settings === 0) {
    $("#level a").css("background", "gray");
  }

    if (number === 1) {
        $("#level a").css("background", "linear-gradient(45deg, #ff8e8e, #ff99cc, #d3a8ff, #99ccff)");
    }

}

function settingsPlus(e) {
    if (e.keyCode === 40) { //下ボタン
      console.log("下");
        if (settings < 1) {
          settings++;
        }
        settingsSelect(settings);    
    }
    
    return false;
}


function settingsMinus(e) {
    if (e.keyCode === 38) { //上ボタン
        if (settings > 0) {
          settings--;
        }
        settingsSelect(settings); 
    }
    
    return false;
}
