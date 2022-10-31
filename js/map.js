//★★★★★★★★パターン１★★★★★★★★
//画像をきりとって配置
//https://original-game.com/introduction-to-javascript-how-to-make-a-map/
//マップの作成１
//canvasの設定（せってい）
// var canvas_map = document.getElementById( 'canvas_map' );

// //コンテキストを取得（しゅとく）
// var ctx_map = canvas_map.getContext( '2d' );

// //画像（がぞう）のオブジェクトを作る
// var img_map = new Image();
// img_map.src = 'img/map.png';

// //画像（がぞう）を表示（ひょうじ）する
// addEventListener('load', function() {
//     //drawImage( image, sx, sy, sw, sh, dx, dy, dw, dh )
//     //sx, syで、画像がぞうを読み込む部分ぶぶんの、左上ひだりうえの位置いち、
//     // sw, shで、画像を読み込む部分の、幅はばと高たかさ、
//     // dx, dyで、画像を表示ひょうじする、左上の位置、
//     // dw, dhで、画像を表示するときの大きさ、
// 	ctx_map.drawImage( img_map, 0, 0, 32, 32, 50, 0, 32, 32 );
// 	ctx_map.drawImage( img_map, 32, 0, 32, 32, 50, 64, 32, 32 );
// }, false);


//★★★★★★★★パターン2★★★★★★★★
//マップを作成
//https://original-game.com/introduction-to-javascript-how-to-make-a-map/
//マップの作成２
//canvasの設定（せってい）
// var canvas_map = document.getElementById( 'canvas_map' );
// canvas_map.width = 640;		//canvasの横幅（よこはば）
// canvas_map.height = 640;	//canvasの縦幅（たてはば）

// //コンテキストを取得（しゅとく）
// var ctx_map = canvas.getContext( '2d' );

// //マップチップのImageオブジェクトを作る
// var mapchip = new Image();
// mapchip.src = 'img/map.png';

// //マップの作成（さくせい）
// var map = [
// 	[0, 0, 1, 0, 1, 0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0],
// 	[0, 1, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0],
// 	[0, 0, 1, 1, 0, 0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
// 	[1, 0, 1, 0, 1, 1, 0, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,0],
// 	[0, 0, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0],
// 	[0, 1, 1, 1, 0, 0, 0, 0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
// 	[0, 1, 1, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0],
// 	[0, 0, 0, 1, 0, 0, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
// 	[1, 1, 0, 1, 1, 1, 1, 1 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,1],
// 	[1, 0, 0, 0, 0, 0, 1, 1 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,0],
// 	[1, 0, 1, 1, 1, 0, 0, 0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0],
// 	[1, 0, 1, 0, 1, 1, 1, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
// 	[0, 0, 1, 0, 0, 1, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
// 	[0, 1, 1, 1, 0, 1, 0, 1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0],
// 	[0, 0, 0, 1, 0, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0],
// 	[1, 1, 0, 1, 0, 1, 0, 1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0],
// 	[0, 0, 0, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
// 	[0, 1, 1, 1, 0, 1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1],
// 	[0, 1, 0, 0, 0, 1, 0, 1 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
// 	[0, 0, 0, 1, 0, 0, 0, 1 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,0]
// ];

// //マップチップを表示（ひょうじ）する
// addEventListener('load', function() {
// 	for (var y=0; y<map.length; y++) {
// 		for (var x=0; x<map[y].length; x++) {
// 			if ( map[y][x] === 0 ) ctx_map.drawImage( mapchip, 0, 0, 32, 32, 32*x, 32*y, 32, 32 );
// 			if ( map[y][x] === 1 ) ctx_map.drawImage( mapchip, 32, 0, 32, 32, 32*x, 32*y, 32, 32 );
// 		}
// 	}
// }, false);


////★★★★★★★★パターン２★★★★★★★★
//https://original-game.com/introduction-to-javascript-character-move-on-map/
//canvasの設定（せってい）
// var canvas_map = document.getElementById( 'canvas_map');
// canvas_map.width = 640;	//canvasの横幅（よこはば）
// canvas_map.height = 640;	//canvasの縦幅（たてはば）
 
// //コンテキストを取得（しゅとく）
// var ctx_map = canvas_map.getContext( '2d' );


// //りこちゃんのオブジェクトを作成
// var enemy_red = new Object();
// enemy_red.img = new Image();
// enemy_red.img.src = 'img/enemy_red.png';
// enemy_red.x = 0;
// enemy_red.y = 0;
// enemy_red.move = 0;

// //マップチップのImageオブジェクトを作る
// var mapchip = new Image();
// mapchip.src = 'img/map.png';

// //キーボードのオブジェクトを作成
// var key = new Object();
// key.up = false;
// key.down = false;
// key.right = false;
// key.left = false;
// key.push = '';

// //マップの作成（さくせい）
// var map = [
// 	[0, 0, 1, 0, 1, 0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0],
// 	[0, 1, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0],
// 	[0, 0, 1, 1, 0, 0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
// 	[1, 0, 1, 0, 1, 1, 0, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,0],
// 	[0, 0, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0],
// 	[0, 1, 1, 1, 0, 0, 0, 0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
// 	[0, 1, 1, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0],
// 	[0, 0, 0, 1, 0, 0, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
// 	[1, 1, 0, 1, 1, 1, 1, 1 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,1],
// 	[1, 0, 0, 0, 0, 0, 1, 1 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,0],
// 	[1, 0, 1, 1, 1, 0, 0, 0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0],
// 	[1, 0, 1, 0, 1, 1, 1, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
// 	[0, 0, 1, 0, 0, 1, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
// 	[0, 1, 1, 1, 0, 1, 0, 1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0],
// 	[0, 0, 0, 1, 0, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0],
// 	[1, 1, 0, 1, 0, 1, 0, 1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0],
// 	[0, 0, 0, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
// 	[0, 1, 1, 1, 0, 1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1],
// 	[0, 1, 0, 0, 0, 1, 0, 1 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
// 	[0, 0, 0, 1, 0, 0, 0, 1 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,0]
// ]
// //メインループ
// function main() {
// 	//塗（ぬ）りつぶす色を指定（してい）
// 	ctx_map.fillStyle = "rgb( 0, 0, 0 )";
// 	//塗（ぬ）りつぶす
// 	ctx_map.fillRect(0, 0, 640, 640);

// 	for (var y=0; y<map.length; y++) {
// 		for (var x=0; x<map[y].length; x++) {
// 			if ( map[y][x] === 0 ) ctx_map.drawImage( mapchip, 0, 0, 32, 32, 32*x, 32*y, 32, 32 );
// 			if ( map[y][x] === 1 ) ctx_map.drawImage( mapchip, 32, 0, 32, 32, 32*x, 32*y, 32, 32 );
// 		}
// 	}

// 	//画像を表示
// 	ctx_map.drawImage( enemy_red.img, enemy_red.x, enemy_red.y );

// 	addEventListener("keydown", keydownfunc02, false);
// 	addEventListener("keyup", keyupfunc02, false);

// 	//方向キーが押されている場合（ばあい）は、りこちゃんが移動する
// 	if ( enemy_red.move === 0 ) {
// 		if ( key.left === true ) {
// 			enemy_red.move = 32;
// 			key.push = 'left';
// 		}
// 		if ( key.up === true ) {
// 			enemy_red.move = 32;
// 			key.push = 'up';
// 		}
// 		if ( key.right === true ) {
// 			enemy_red.move = 32;
// 			key.push = 'right';
// 		}
// 		if ( key.down === true ) {
// 			enemy_red.move = 32;
// 			key.push = 'down';
// 		}
// 	}
// 	//rico.moveが0より大きい場合は、4pxずつ移動（いどう）を続ける
// 	if (enemy_red.move > 0) {
// 		enemy_red.move -= 4;
// 		if ( key.push === 'left' ) enemy_red.x -= 4;
// 		if ( key.push === 'up' ) enemy_red.y -= 4;
// 		if ( key.push === 'right' ) enemy_red.x += 4;
// 		if ( key.push === 'down' ) enemy_red.y += 4;
// 	}

// 	requestAnimationFrame( main );
// }
// //ページと依存（いぞん）している全てのデータが読み込まれたら、メインループ開始
// addEventListener('load', main(), false);

// //キーボードが押されたときに呼び出される関数（かんすう）
// function keydownfunc02( event ) {
// 	var key_code = event.keyCode;
// 	if( key_code === 37 ) key.left = true;
// 	if( key_code === 38 ) key.up = true;
// 	if( key_code === 39 ) key.right = true;
// 	if( key_code === 40 ) key.down = true;
// 	event.preventDefault();
// }

// //キーボードが放（はな）されたときに呼び出される関数
// function keyupfunc02( event ) {
// 	var key_code = event.keyCode;
// 	if( key_code === 37 ) key.left = false;
// 	if( key_code === 38 ) key.up = false;
// 	if( key_code === 39 ) key.right = false;
// 	if( key_code === 40 ) key.down = false;
// }


////★★★★★★★★パターン3★★★★★★★★
//https://original-game.com/introduction-to-javascript-character-move-on-map/
//あたり判定
var canvas_map = document.getElementById( 'canvas_map');
canvas_map.width = 640;	//canvasの横幅（よこはば）
canvas_map.height = 640;	//canvasの縦幅（たてはば）
 
//コンテキストを取得（しゅとく）
var ctx_map = canvas_map.getContext( '2d' );


//りこちゃんのオブジェクトを作成
var enemy_red = new Object();
enemy_red.img = new Image();
enemy_red.img.src = 'img/enemy_red.png';
enemy_red.x = 0;
enemy_red.y = 0;
enemy_red.move = 0;



//マップチップのImageオブジェクトを作る
var mapchip = new Image();
mapchip.src = 'img/map.png';

//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//マップの作成（さくせい）
var map = [
	[0, 0, 1, 0, 1, 0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0],
	[0, 1, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0],
	[0, 0, 1, 1, 0, 0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
	[1, 0, 1, 0, 1, 1, 0, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,0],
	[0, 0, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0],
	[0, 1, 1, 1, 0, 0, 0, 0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
	[0, 1, 1, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0],
	[0, 0, 0, 1, 0, 0, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
	[1, 1, 0, 1, 1, 1, 1, 1 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,1],
	[1, 0, 0, 0, 0, 0, 1, 1 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,0],
	[1, 0, 1, 1, 1, 0, 0, 0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0],
	[1, 0, 1, 0, 1, 1, 1, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
	[0, 0, 1, 0, 0, 1, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
	[0, 1, 1, 1, 0, 1, 0, 1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0],
	[0, 0, 0, 1, 0, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0],
	[1, 1, 0, 1, 0, 1, 0, 1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0],
	[0, 0, 0, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
	[0, 1, 1, 1, 0, 1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1],
	[0, 1, 0, 0, 0, 1, 0, 1 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
	[0, 0, 0, 1, 0, 0, 0, 1 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,0]
]
//メインループ
function main() {
	//塗（ぬ）りつぶす色を指定（してい）
	ctx_map.fillStyle = "rgb( 0, 0, 0 )";
	//塗（ぬ）りつぶす
	ctx_map.fillRect(0, 0, 640, 640);

	for (var y=0; y<map.length; y++) {
		for (var x=0; x<map[y].length; x++) {
			if ( map[y][x] === 0 ) ctx_map.drawImage( mapchip, 0, 0, 32, 32, 32*x, 32*y, 32, 32 );
			if ( map[y][x] === 1 ) ctx_map.drawImage( mapchip, 32, 0, 32, 32, 32*x, 32*y, 32, 32 );
		}
	}

	//画像を表示
	ctx_map.drawImage( enemy_red.img, enemy_red.x, enemy_red.y ,32,32); //32pxにリサイズ

	addEventListener("keydown", keydownfunc02, false);
	addEventListener("keyup", keyupfunc02, false);

	//方向キーが押されている場合（ばあい）は、りこちゃんが移動する
	if ( enemy_red.move === 0 ) {
		if ( key.left === true ) {
            
            var x = enemy_red.x/32;
            var y = enemy_red.y/32;
            x--;
                if ( map[y][x] === 0 ) {
                    enemy_red.move = 32;
                    key.push = 'left';
                }
            }
		
		if ( key.up === true ) {
            var x = enemy_red.x/32;
            var y = enemy_red.y/32;
            if ( y > 0) {
                y--;
                if ( map[y][x] === 0 ) {
                    enemy_red.move = 32;
                    key.push = 'up';
                    console.log("下に移動するよ");
                }
            }

		}
		if ( key.right === true ) {
            
            var x = enemy_red.x/32;
            var y = enemy_red.y/32;
            x++;
                if ( map[y][x] === 0 ) {
                    enemy_red.move = 32;
                    key.push = 'right';
                }
            }
		if ( key.down === true ) {
            var x = enemy_red.x/32;
			var y = enemy_red.y/32;
			if ( y < 19 ) {
				y++;
				if ( map[y][x] === 0 ) {
					enemy_red.move = 32;
					key.push = 'down';
                    console.log("４つずつ");
				}
			}
		}
    }

	//rico.moveが0より大きい場合は、4pxずつ移動（いどう）を続ける
	if (enemy_red.move > 0) {
		enemy_red.move -= 4;
		if ( key.push === 'left' )  enemy_red.x -= 4;
		if ( key.push === 'up' )    enemy_red.y -= 4;
		if ( key.push === 'right' ) enemy_red.x += 4;
		if ( key.push === 'down' )  enemy_red.y += 4;
	}

	requestAnimationFrame( main );
}
//ページと依存（いぞん）している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

//キーボードが押されたときに呼び出される関数（かんすう）
function keydownfunc02( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = true;
	if( key_code === 38 ) key.up = true;
	if( key_code === 39 ) key.right = true;
	if( key_code === 40 ) key.down = true;
	event.preventDefault();
}

//キーボードが放（はな）されたときに呼び出される関数
function keyupfunc02( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = false;
	if( key_code === 38 ) key.up = false;
	if( key_code === 39 ) key.right = false;
	if( key_code === 40 ) key.down = false;
}
