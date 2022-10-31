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


//https://original-game.com/introduction-to-javascript-character-move-on-map/
