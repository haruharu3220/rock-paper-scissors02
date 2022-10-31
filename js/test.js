
//★★★★★★★★パターン１★★★★★★★★
// オブジェクト指向を使っていない
//https://original-game.com/introduction-to-javascript-move-a-character-by-input/
// //画面に画像を表示する
// document.write( '<img id="enemy_red" src="img/enemy_red.png">' );

// //キャラクターの位置
// var y = 0;
// var x = 0;

// //なにかキーが押されたとき、keydownfuncという関数を呼び出す
// addEventListener( "keydown", keydownfunc );

// //キーが押されたときに呼び出される関数
// function keydownfunc( event ) {

// 	//押されたボタンに割り当てられた数値（すうち）を、key_codeに代入
// 	var key_code = event.keyCode;

// 	if( key_code === 37 ) x -= 32;		//「左ボタン」が押されたとき、xの値から32を引き算する
// 	if( key_code === 38 ) y -= 32;		//「上ボタン」が押されたとき、yの値から32を引き算する
// 	if( key_code === 39 ) x += 32;		//「右ボタン」が押されたとき、xの値に32を足し算する
// 	if( key_code === 40 ) y += 32;		//「下ボタン」が押されたとき、yの値に32を足し算する

// 	//りこちゃんの画像の位置（いち）を反映（はんえい）させる
// 	document.getElementById( 'enemy_red' ).style.top = y + "px";
// 	document.getElementById( 'enemy_red' ).style.left = x + "px";

// }


// //★★★★★★★★パターン２★★★★★★★★
// // オブジェクト指向を使う
// //https://original-game.com/introduction-to-javascript-how-to-use-object/
// //画面に画像を表示する
// document.write( '<img id="enemy_blue" src="img/enemy_blue.png">' );

// //りこちゃんのオブジェクトを作成
// var rico = new Object();
// rico.x = 0;
// rico.y = 0;

// //なにかキーが押されたとき、keydownfuncという関数を呼び出す
// addEventListener( "keydown", keydownfunc );

// //キーが押されたときに呼び出される関数
// function keydownfunc( event ) {

// //押されたボタンに割り当てられた数値（すうち）を、key_codeに代入
// 	var key_code = event.keyCode;

// 	if( key_code === 37 ) rico.x -= 32;		//「左ボタン」が押されたとき、rico.xの値から32を引き算する
// 	if( key_code === 38 ) rico.y -= 32;		//「上ボタン」が押されたとき、rico.yの値から32を引き算する
// 	if( key_code === 39 ) rico.x += 32;		//「右ボタン」が押されたとき、rico.xの値に32を足し算する
// 	if( key_code === 40 ) rico.y += 32;		//「下ボタン」が押されたとき、rico.yの値に32を足し算する

// 	//りこちゃんの画像の位置（いち）を反映（はんえい）させる
// 	document.getElementById( 'enemy_blue' ).style.top = rico.y + "px";
// 	document.getElementById( 'enemy_blue' ).style.left = rico.x + "px";

// }


// //★★★★★★★★パターン３★★★★★★★★
// // オブジェクト指向を使う＋ループを使う
// //https://original-game.com/introduction-to-javascript-how-to-use-object/
//画面に画像を表示する
document.write( '<img id="enemy_green" src="img/enemy_green.png">' );

//りこちゃんのオブジェクトを作成
var rico = new Object();
rico.x = 0;
rico.y = 0;

//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;

//メインループ
function main() {

	//キーボードが押された時、keydownfunc関数（かんすう）を呼び出す
	addEventListener( "keydown", keydownfunc );
	//キーボードがはなされた時、keyupfunc関数（かんすう）を呼び出す
	addEventListener( "keyup", keyupfunc );

	//方向キーが押されている場合（ばあい）は、りこちゃんが移動する
	if( key.left === true ) rico.x -= 32;		//key.leftがtrueのとき、rico.xの値から32を引き算する
	if( key.up === true ) rico.y -= 32;		//key.upがtrueのとき、rico.yの値から32を引き算する
	if( key.right === true ) rico.x += 32;		//key.rightがtrueのとき、rico.xの値に32を足し算する
	if( key.down === true ) rico.y += 32;		//key.downがtrueのとき、rico.yの値に32を足し算する

	//りこちゃんの画像の位置（いち）を反映（はんえい）させる
	document.getElementById( 'enemy_green' ).style.top = rico.y + "px";
	document.getElementById( 'enemy_green' ).style.left = rico.x + "px";

	//main関数（かんすう）、つまり自分自身の関数を呼び出すことでループさせる。
	requestAnimationFrame( main );

}
requestAnimationFrame( main );

//キーボードが押されたときに呼び出される関数（かんすう）
function keydownfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = true;		//「左ボタン」が押されたとき、key.leftをtrueにする
	if( key_code === 38 ) key.up = true;		//「上ボタン」が押されたとき、key.upをtrueにする
	if( key_code === 39 ) key.right = true;		//「右ボタン」が押されたとき、key.rightをtrueにする
	if( key_code === 40 ) key.down = true;		//「下ボタン」が押されたとき、key.downをtrueにする
}

//キーボードがはなされたときに呼び出される関数
function keyupfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = false;		//「左ボタン」がはなされたとき、key.leftをfalseにする
	if( key_code === 38 ) key.up = false;  		//「上ボタン」がはなされたとき、key.upをfalseにする
	if( key_code === 39 ) key.right = false		//「右ボタン」がはなされたとき、key.rightをfalseにする;
	if( key_code === 40 ) key.down = false;		//「下ボタン」がはなされたとき、key.downをfalseにする
}