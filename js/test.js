



// //★★★★★★★★パターン４★★★★★★★★
// // オブジェクト指向を使う＋ループを使う＋ゆっくり動く
// //https://original-game.com/introduction-to-javascript-move-chara-regular-intervals/
//画面に画像を表示する
document.write( '<img id="enemy_green" src="img/enemy_green.png">' );

//りこちゃんのオブジェクトを作成
var rico = new Object();
rico.x = 0;
rico.y = 0;
rico.move = 0;

//押されたキーを入れておくための変数
var pressed_key = '';


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
	if ( rico.move === 0 ) {
        if ( key.left === true ) {
            rico.move = 32;
            pressed_key = 'left';
        }
        if ( key.up === true ) {
            rico.move = 32;
            pressed_key = 'up';
        }
        if ( key.right === true ) {
            rico.move = 32;
            pressed_key = 'right';
        }
        if ( key.down === true ) {
            rico.move = 32;
            pressed_key = 'down';
        }
    }

    if (rico.move > 0) {
        rico.move -= 4;
        if ( pressed_key === 'left' ) rico.x -= 4;
        if ( pressed_key === 'up' ) rico.y -= 4;
        if ( pressed_key === 'right' ) rico.x += 4;
        if ( pressed_key === 'down' ) rico.y += 4;
    }


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

