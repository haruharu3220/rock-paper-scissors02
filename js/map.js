////★★★★★★★★パターン3★★★★★★★★
//https://original-game.com/introduction-to-javascript-character-move-on-map/
//あたり判定
var canvas_map = document.getElementById('canvas_map');
canvas_map.width = 896;	//canvasの横幅（よこはば）
canvas_map.height = 960;	//canvasの縦幅（たてはば）

//コンテキストを取得（しゅとく）
var ctx_map = canvas_map.getContext('2d');

//パックマンのオブジェクトを作成
var pacman = new Object();
pacman.img = new Image();
pacman.img.src = 'img/pacman.png';
pacman.x = 32;
pacman.y = 32;
pacman.move = 0;

//敵(グー)のオブジェクトを作成
var enemy_gu = new Object();
enemy_gu.img = new Image();
enemy_gu.img.src = 'img/blue.png';
enemy_gu.x = 64;
enemy_gu.y = 64;
enemy_gu.move = 0;

//敵(チョキ)のオブジェクトを作成
var enemy_choki = new Object();
enemy_choki.img = new Image();
enemy_choki.img.src = 'img/red.png';
enemy_choki.x = 96;
enemy_choki.y = 96;
enemy_choki.move = 0;

//敵(パー)のオブジェクトを作成
var enemy_pa = new Object();
enemy_pa.img = new Image();
enemy_pa.img.src = 'img/green.png';
enemy_pa.x = 128;
enemy_pa.y = 128;
enemy_pa.move = 0;

//マップチップのImageオブジェクトを作る
var aisle = new Image();
aisle.src = 'img/aisle7.png';

var aisle_pacman = new Image();
aisle_pacman.src = 'img/aisle5.png';

var point = new Image();
point.src = 'img/point.png';

//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//マップの作成（さくせい）
var map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
	[1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1],
	[1, -1, 1, 0, 0, 1, -1, 1, 0, 0, 0, 1, -1, 1, 1, -1, 1, 0, 0, 0, 1, -1, 1, 0, 0, 1, -1, 1],
	[1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1],
	[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
	[1, -1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1],
	[1, -1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1],
	[1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
	[1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1],
	[1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, 1],
	[1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1],
	[1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1],
	[1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
	[1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
	[1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
	[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let itemCount = 0; //残アイテムの数をカウント
let itemCountBuff = 0; //残アイテムの数をカウント

for (var y = 0; y < map.length; y++) {
	for (var x = 0; x < map[y].length; x++) {

		if (map[y][x] === -1 && x < 5 && y < 5) {
			itemCount++;
		}
	}
}
console.log("アイテム数は" + itemCount);

let clearFlig = 0;
//メインループ
function main() {
	// //塗（ぬ）りつぶす色を指定（してい）
	// ctx_map.fillStyle = "rgb( 0, 0, 0 )";
	// //塗（ぬ）りつぶす
	// ctx_map.fillRect(0, 0, 640, 640);
	let remainItemCount = 0;

	for (var y = 0; y < map.length; y++) {
		for (var x = 0; x < map[y].length; x++) {

			if (map[y][x] === 0) {
				ctx_map.drawImage(aisle_pacman, 32 * x, 32 * y);
			}
			else if (map[y][x] === -1 && x < 5 && y < 5) {
				ctx_map.drawImage(point, 32 * x, 32 * y);
				remainItemCount++;
				//console.log("map[y][x]="+ map[y][x]);
			}
			else if (map[y][x] === 1) {
				ctx_map.drawImage(aisle, 32 * x, 32 * y);
			}
			else { //デバッグ用コード　動作確認のためアイテムの数を減らす
				ctx_map.drawImage(aisle_pacman, 32 * x, 32 * y);
			}
		}
	}

	//残アイテムが0判定（クリア判定）
	//main 関数が無限ループしているからその中でクリア判定を実施し
	//クリアなら１回だけ通知を上げるところが難しかった
	if (remainItemCount === 0 && clearFlig == 0) {
		clearFlig++
		//console.log("A");
		if (clearFlig === 1) {
			console.log("クリア");
		}
	}

	//パックマンを表示
	ctx_map.drawImage(pacman.img, pacman.x, pacman.y, 32, 32); //32pxにリサイズ


	ctx_map.drawImage(enemy_gu.img, enemy_gu.x, enemy_gu.y, 32, 32); //32pxにリサイズ
	ctx_map.drawImage(enemy_choki.img, enemy_choki.x, enemy_choki.y, 32, 32); //32pxにリサイズ
	ctx_map.drawImage(enemy_pa.img, enemy_pa.x, enemy_pa.y, 32, 32); //32pxにリサイズ


	//パックマンが一度通った道のアイテムは消す
	if (pacman.move === 0) {
		map[pacman.y / 32][pacman.x / 32] = 0;
	}

	// addEventListener("keydown", keydownfunc02, false);
	// addEventListener("keyup", keyupfunc02, false);


	//方向キーが押されている場合は、りこちゃんが移動する
	//あたり判定
	//https://original-game.com/introduction-to-javascript-character-move-on-map/
	// if (pacman.move === 0) {
	// 	if (key.left === true) {

	// 		var x = pacman.x / 32;
	// 		var y = pacman.y / 32;
	// 		x--;
	// 		if (map[y][x] != 1) {
	// 			pacman.move = 32;
	// 			key.push = 'left';
	// 		}
	// 	}

	// 	if (key.up === true) {
	// 		var x = pacman.x / 32;
	// 		var y = pacman.y / 32;
	// 		if (y > 0) {
	// 			y--;
	// 			if (map[y][x] != 1) {
	// 				pacman.move = 32;
	// 				key.push = 'up';
	// 			}
	// 		}

	// 	}
	// 	if (key.right === true) {

	// 		var x = pacman.x / 32;
	// 		var y = pacman.y / 32;
	// 		x++;
	// 		if (map[y][x] != 1) {
	// 			pacman.move = 32;
	// 			key.push = 'right';
	// 		}
	// 	}
	// 	if (key.down === true) {
	// 		var x = pacman.x / 32;
	// 		var y = pacman.y / 32;
	// 		if (y < 30) {
	// 			y++;
	// 			if (map[y][x] != 1) {
	// 				pacman.move = 32;
	// 				key.push = 'down';
	// 			}
	// 		}
	// 	}
	// }
	collision(pacman);
	move(pacman);

	collision(enemy_gu);
	move(enemy_gu);

	//rico.moveが0より大きい場合は、4pxずつ移動（いどう）を続ける
	// if (pacman.move > 0) {
	// 	pacman.move -= 4;
	// 	if (key.push === 'left') pacman.x -= 4;
	// 	if (key.push === 'up') pacman.y -= 4;
	// 	if (key.push === 'right') pacman.x += 4;
	// 	if (key.push === 'down') pacman.y += 4;
	// }

	//敵配置のソース　未完成
	// if (enemy_gu.move > 0) {
	// 	enemy_gu.move -= 4;
	// 	if (key.push === 'left') pacman.x -= 4;
	// 	if (key.push === 'up') pacman.y -= 4;
	// 	if (key.push === 'right') pacman.x += 4;
	// 	if (key.push === 'down') pacman.y += 4;
	// }


	requestAnimationFrame(main);
}
//ページと依存（いぞん）している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);

addEventListener("keydown", keydownfunc02, false);
addEventListener("keyup", keyupfunc02, false);

//キーボードが押されたときに呼び出される関数（かんすう）
function keydownfunc02(event) {
	var key_code = event.keyCode;
	if (key_code === 37) key.left = true;
	if (key_code === 38) key.up = true;
	if (key_code === 39) key.right = true;
	if (key_code === 40) key.down = true;
	event.preventDefault();
}

//キーボードが放（はな）されたときに呼び出される関数
function keyupfunc02(event) {
	var key_code = event.keyCode;
	if (key_code === 37) key.left = false;
	if (key_code === 38) key.up = false;
	if (key_code === 39) key.right = false;
	if (key_code === 40) key.down = false;
}


//エンターを押したらTOP画面に戻る関数
//なぜかkeypressだと画面遷移しない
//ほかのページだとkeypressに反応する
addEventListener('keydown', returnTop);
function returnTop(e) {
	if (e.keyCode === 13) {

		console.log("aを押しました");
		location.href = "top.html";
	}


	return false;
}


//当たり判定を関数化
function collision(Object) {
	if (Object.move === 0) {
		if (key.left === true) {

			var x = Object.x / 32;
			var y = Object.y / 32;
			x--;
			if (map[y][x] != 1) {
				Object.move = 32;
				key.push = 'left';
			}
		}

		if (key.up === true) {
			var x = Object.x / 32;
			var y = Object.y / 32;
			if (y > 0) {
				y--;
				if (map[y][x] != 1) {
					Object.move = 32;
					key.push = 'up';
				}
			}

		}
		if (key.right === true) {

			var x = Object.x / 32;
			var y = Object.y / 32;
			x++;
			if (map[y][x] != 1) {
				Object.move = 32;
				key.push = 'right';
			}
		}
		if (key.down === true) {
			var x = Object.x / 32;
			var y = Object.y / 32;
			if (y < 30) {
				y++;
				if (map[y][x] != 1) {
					Object.move = 32;
					key.push = 'down';
				}
			}
		}
	}
}


//rico.moveが0より大きい場合は、4pxずつ移動（いどう）を続ける
function move(Object){
if (Object.move > 0) {
	Object.move -= 4;
	if (key.push === 'left') Object.x -= 4;
	if (key.push === 'up') Object.y -= 4;
	if (key.push === 'right') Object.x += 4;
	if (key.push === 'down') Object.y += 4;
}
}