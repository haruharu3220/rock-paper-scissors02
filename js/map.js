////★★★★★★★★パターン3★★★★★★★★
//https://original-game.com/introduction-to-javascript-character-move-on-map/
//あたり判定
var canvas_map = document.getElementById('canvas_map');
canvas_map.width = 896;	//canvasの横幅（よこはば）
canvas_map.height = 960;	//canvasの縦幅（たてはば）

const min = 0;
const max = 100;
let randamNum1 = 0;

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

//マップチップのImageオブジェクトを作る
var gu = new Image();
gu.src = 'img/gu.png';

var choki = new Image();
choki.src = 'img/choki.png';

var pa = new Image();
pa.src = 'img/pa.png';


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

let janken = {
	gu: -2,
	choki: 3,
	pa: -4,
	
};

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
	[1, janken.gu, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, janken.choki, 1],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[1, janken.pa, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
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

			if (map[y][x] === 0) { // アイテム無し通路
				ctx_map.drawImage(aisle_pacman, 32 * x, 32 * y);
			}
			else if (map[y][x] === -1 && x < 5 && y < 5) { //ポイント有り通路
				ctx_map.drawImage(point, 32 * x, 32 * y);
				remainItemCount++;
				//console.log("map[y][x]="+ map[y][x]);
			}
			else if (map[y][x] === 1) { //壁
				ctx_map.drawImage(aisle, 32 * x, 32 * y);
			}
			else if (map[y][x] === janken.gu){ //グーアイテム
				ctx_map.drawImage(gu, 32 * x, 32 * y,32,32);
			}
			else if (map[y][x] === janken.choki){ //チョキアイテム
				ctx_map.drawImage(choki, 32 * x, 32 * y,32,32);
			}
			else if (map[y][x] === janken.pa){ //パーアイテム
				ctx_map.drawImage(pa, 32 * x, 32 * y,32,32);
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

	//キャラクターを表示
	ctx_map.drawImage(pacman.img, pacman.x, pacman.y,); //パックマン
	ctx_map.drawImage(enemy_gu.img, enemy_gu.x, enemy_gu.y, 32, 32); //グーの敵　＝青
	ctx_map.drawImage(enemy_choki.img, enemy_choki.x, enemy_choki.y, 32, 32); //チョキの敵　＝赤
	ctx_map.drawImage(enemy_pa.img, enemy_pa.x, enemy_pa.y, 32, 32); //パーの敵　＝緑


	//パックマンが一度通った道のアイテムは消す
	if (pacman.move === 0 && pacman.x % 32 === 0 && pacman.y % 32 === 0) {
		map[pacman.y / 32][pacman.x / 32] = 0;
	}


	//移動先が壁でなかったらパックマンを動かす
	if (pacman.move === 0) {
		collision(pacman);
	}
	if (pacman.move > 0) {
		move(pacman);
	}

	if (enemy_gu.move === 0) {
		collision(enemy_gu);
		randamNum1 = Math.floor(Math.random() * (max - min + 1) + min);
	}
	// if (enemy_gu.move > 0) {
	// 	move_random(enemy_gu, randamNum1);
	// }



	collision_to_enemy(pacman, enemy_gu, enemy_choki);


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


//壁当たり判定を関数化
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

//敵との当たり判定　第一引数：パックマンオブジェクト　第二引数以降：敵オブジェクト
function collision_to_enemy(Pacman, ...Object) {
	for (let i = 0; i < arguments.length - 1; i++) {
		if ((Pacman.x === Object[i].x) && (Pacman.y === Object[i].y)) {
			console.log("GAMEOVER");
		}
	}

}

//パックマンがmoveが0より大きい場合は、4pxずつ移動を続ける
function move(Object) {
	if (Object.move > 0) {
		Object.move -= 4;
		if (key.push === 'left') Object.x -= 4;
		if (key.push === 'up') Object.y -= 4;
		if (key.push === 'right') Object.x += 4;
		if (key.push === 'down') Object.y += 4;
	}
}

let direction = {
	top: 1,
	right: 2,
	down: 3,
	left: 4
};
direction.top;

//敵のmoveが0より大きい場合は4pxセルずつランダムに移動を続ける
function move_random(Object, num) {


	while (Object.move > 0) {

		if (num < 50) {
			Object.x -= 4;
		} else if (num > 51 && num < 75) {
			Object.y -= 4;
		} else if (num > 76 && num < 90) {
			Object.x += 4;
		} else {
			Object.y += 4;
		}
	}
}


function move_random2(Object) {

	Object.move -= 4;
	if (key.push === 'left') Object.x -= 4;
	if (key.push === 'up') Object.y -= 4;
	if (key.push === 'right') Object.x += 4;
	if (key.push === 'down') Object.y += 4;
}
