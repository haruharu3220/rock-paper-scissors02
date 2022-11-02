addEventListener('keypress', select);
function select(e) {
    if (e.keyCode === 13) {

		console.log("aを押しました");
            location.href="top.html";
    }
    return false;
}