import { modalFrag } from './modal.js';


let canvas_map = document.getElementById('canvas_map');

canvas_map.width = 896;	//canvasの横幅
canvas_map.height = 960;	//canvasの縦幅

const min = 0;
const max = 100;
let directionChange = 0;
let directionNow = 0;

//コンテキストを取得
var ctx_map = canvas_map.getContext('2d');

//ジャンケンのENUM
let janken = {
	defalt: 0,
	gu: -2,
	choki: 3,
	pa: -4,
};

let direction = {
	top: 1,
	right: 2,
	down: 3,
	left: 4
};



//パックマンのオブジェクトを作成
var pacman = new Object();
pacman.img_default = new Image();
pacman.img_default.src = 'img/pacman.png';
pacman.img_gu = new Image();
pacman.img_gu.src = 'img/pacman_gu.png';
pacman.img_choki = new Image();
pacman.img_choki.src = 'img/pacman_choki.png';
pacman.img_pa = new Image();
pacman.img_pa.src = 'img/pacman_pa.png';
pacman.janken = janken.defalt;
pacman.x = 32;
pacman.y = 32;
pacman.move = 0;


//敵(グー 青)のオブジェクトを作成
var enemy_gu = new Object();
enemy_gu.img = new Image();
enemy_gu.img.src = 'img/blue.png';
enemy_gu.janken = janken.gu;
enemy_gu.x = 384;
enemy_gu.y = 256;
enemy_gu.move = 0;
enemy_gu.direction = direction.top;


//敵(チョキ　赤)のオブジェクトを作成
var enemy_choki = new Object();
enemy_choki.img = new Image();
enemy_choki.img.src = 'img/red.png';
enemy_choki.janken = janken.choki;
enemy_choki.x = 672;
enemy_choki.y = 384;
enemy_choki.move = 0;
enemy_choki.direction = direction.top;


//敵(パー　緑)のオブジェクトを作成
var enemy_pa = new Object();
enemy_pa.img = new Image();
enemy_pa.img.src = 'img/green.png';
enemy_pa.janken = janken.pa;
enemy_pa.x = 192;
enemy_pa.y = 608;
enemy_pa.move = 0;
enemy_pa.direction = direction.top;



//モンスターのImageオブジェクトを作る
var gu = new Image();
gu.src = 'img/gu.png';

var choki = new Image();
choki.src = 'img/choki.png';


var pa = new Image();
pa.src = 'img/pa.png';

//壁のImageオブジェクトを作る
var aisle = new Image();
aisle.src = 'img/aisle7.png';

//通路（アイテム無し）のImageオブジェクトを作る
var aisle_pacman = new Image();
aisle_pacman.src = 'img/aisle5.png';

//通路（アイテム有り）のImageオブジェクトを作る
var point = new Image();
point.src = 'img/point.png';

//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//クリア判定フラグ
export let clearFlig = false;

//マップの作成（さくせい）
var map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, janken.pa, 1, 1, janken.gu, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
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
	[1, 0, 0, 0, 0, 0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
	[1, janken.pa, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, janken.gu, 1],
	[1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1],
	[1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, 1],
	[1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1],
	[1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1],
	[1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
	[1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
	[1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
	[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, janken.choki, 1, 1, janken.pa, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
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

//メインループ
function main() {
	let remainItemCount = 0;

	for (var y = 0; y < map.length; y++) {
		for (var x = 0; x < map[y].length; x++) {

			if (map[y][x] === 0) { // アイテム無し通路
				ctx_map.drawImage(aisle_pacman, 32 * x, 32 * y);
			}
			else if (map[y][x] === -1 && x < 5 && y < 5) { //ポイント有り通路)
				//else if (map[y][x] === -1 ) { //ポイント有り通路)
				ctx_map.drawImage(point, 32 * x, 32 * y);
				remainItemCount++;
			}
			//console.log("map[y][x]="+ map[y][x]);
			else if (map[y][x] === 1) { //壁
				ctx_map.drawImage(aisle, 32 * x, 32 * y);
			}
			else if (map[y][x] === janken.gu) { //グーアイテム
				ctx_map.drawImage(gu, 32 * x, 32 * y, 32, 32);
			}
			else if (map[y][x] === janken.choki) { //チョキアイテム
				ctx_map.drawImage(choki, 32 * x, 32 * y, 32, 32);
			}
			else if (map[y][x] === janken.pa) { //パーアイテム
				ctx_map.drawImage(pa, 32 * x, 32 * y, 32, 32);
			}


			else { //デバッグ用コード　動作確認のためアイテムの数を減らす
				ctx_map.drawImage(aisle_pacman, 32 * x, 32 * y);
			}
		}
	}

	//残アイテムが0判定（クリア判定）
	//main 関数が無限ループしているからその中でクリア判定を実施し
	//クリアなら１回だけ通知を上げるところが難しかった
	if (remainItemCount === 0 && !clearFlig) {
		clearFlig = true;
		//console.log("A");
		if (clearFlig) {
			console.log("クリア");
			clearModal.style.display = 'block';
			modalFrag = true;
		}
	}

	//敵を表示
	ctx_map.drawImage(enemy_gu.img, enemy_gu.x, enemy_gu.y, 32, 32); //グーの敵　＝青
	ctx_map.drawImage(enemy_choki.img, enemy_choki.x, enemy_choki.y, 32, 32); //チョキの敵　＝赤
	ctx_map.drawImage(enemy_pa.img, enemy_pa.x, enemy_pa.y, 32, 32); //パーの敵　＝緑

	//パックマンを表示
	//グーチョキパーに適したパックマンを表示
	if (pacman.janken === janken.gu) {
		ctx_map.drawImage(pacman.img_gu, pacman.x, pacman.y,); //パックマン
	} else if (pacman.janken === janken.choki) {
		ctx_map.drawImage(pacman.img_choki, pacman.x, pacman.y,); //パックマン
	} else if (pacman.janken === janken.pa) {
		ctx_map.drawImage(pacman.img_pa, pacman.x, pacman.y,); //パックマン
	} else {
		ctx_map.drawImage(pacman.img_default, pacman.x, pacman.y,); //パックマン
	}


	//パックマンが一度通った道のアイテムは消す
	//パックマンがジャンケンアイテムをとったらパックマン状態を反映する
	if (pacman.move === 0 && pacman.x % 32 === 0 && pacman.y % 32 === 0) {


		if (map[pacman.y / 32][pacman.x / 32] === janken.gu) {
			console.log("グー");
			pacman.janken = janken.gu;
		} else if (map[pacman.y / 32][pacman.x / 32] === janken.choki) {
			console.log("チョキ");
			pacman.janken = janken.choki;
		} else if (map[pacman.y / 32][pacman.x / 32] === janken.pa) {
			console.log("パー");
			pacman.janken = janken.pa;
		}
		map[pacman.y / 32][pacman.x / 32] = 0;
	}

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


	//移動先が壁でなかったら敵を動かす
	if (enemy_gu.move === 0) {
		directionChange = Math.floor(Math.random() * (max - min + 1) + min);

		//40％の確率でそのままの向きに移動
		if (directionChange < 40) {
			//60％の確立で方向転換
		} else if (directionChange > 40 && directionChange < 55) {
			enemy_gu.direction = direction.top;
		}
		else if (directionChange > 55 && directionChange < 60) {
			enemy_gu.direction = direction.right;
		}
		else if (directionChange > 60 && directionChange < 75) {
			enemy_gu.direction = direction.down;
		}
		else if (directionChange > 75) {
			enemy_gu.direction = direction.left;
		}
		collision_enemy(enemy_gu);
		//console.log("directionChange=" + directionChange);
	}
	if (enemy_gu.move > 0) {
		move_random(enemy_gu);
		//console.log("directionChange"+directionChange);



		//敵と当たったとき
		if (collision_to_enemy(pacman, enemy_gu, enemy_choki, enemy_pa)) {
			if (gameover) {
				gameOver.style.display = 'block';
				modalFrag = true;
			}
		}

	}

	requestAnimationFrame(main);
}
//ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);
addEventListener("keydown", keydownfunc02, false);
addEventListener("keyup", keyupfunc02, false);

//キーボードが押されたときに呼び出される関数
function keydownfunc02(event) {
	var key_code = event.keyCode;
	if (key_code === 37) key.left = true;
	if (key_code === 38) key.up = true;
	if (key_code === 39) key.right = true;
	if (key_code === 40) key.down = true;
	event.preventDefault();
}

//キーボードが放されたときに呼び出される関数
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
	if (e.keyCode === 65) {
		location.href = "top.html";
	}
	//return false;
}


//パックマンの壁当たり判定を関数化
function collision(Object) {
	//if (modalFrag === false) { //モーダルが非表示の時
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
	//}
}

//敵の壁当たり判定を関数化
function collision_enemy(Object) {
	//if (modalFrag === false) { //モーダルが非表示の時
	if (Object.move === 0) {
		if (Object.direction === direction.left) {

			var x = Object.x / 32;
			var y = Object.y / 32;
			x--;
			if (map[y][x] != 1) {
				Object.move = 32;
			}
		}

		if (Object.direction === direction.up) {
			var x = Object.x / 32;
			var y = Object.y / 32;
			if (y > 0) {
				y--;
				if (map[y][x] != 1) {
					Object.move = 32;
					console.log("ここは１回通るはず");
				}
			}

		}
		if (Object.direction === direction.right) {
			var x = Object.x / 32;
			var y = Object.y / 32;
			x++;
			if (map[y][x] != 1) {
				Object.move = 32;
			}
		}
		if (Object.direction === direction.down) {
			var x = Object.x / 32;
			var y = Object.y / 32;
			if (y < 30) {
				y++;
				if (map[y][x] != 1) {
					Object.move = 32;
				}
			}
		}
	}
}


let gameover = false;
//敵との当たり判定　第一引数：パックマンオブジェクト　第二引数以降：敵オブジェクト
export function collision_to_enemy(Pacman, ...Object) {
	for (let i = 0; i < arguments.length - 1; i++) {
		if ((Pacman.x === Object[i].x) && (Pacman.y === Object[i].y)) {
			if ((Pacman.janken === janken.pa && Object[i].janken === janken.gu) ||
				(Pacman.janken === janken.gu && Object[i].janken === janken.choki) ||
				(Pacman.janken === janken.choki && Object[i].janken === janken.pa)) {
				gameover = false;
			} else {
				gameover = true;
			}
			return true;
		}
	}
	return false;
}


//パックマンがmoveが0より大きい場合は、4pxずつ移動を続ける
function move(Object) {
	if (modalFrag === false) { //モーダルが非表示の時
		if (Object.move > 0) {
			Object.move -= 4;
			if (key.push === 'left') Object.x -= 4;
			if (key.push === 'up') Object.y -= 4;
			if (key.push === 'right') Object.x += 4;
			if (key.push === 'down') Object.y += 4;
		}
	}
}

//敵のmoveが0より大きい場合は4pxセルずつランダムに移動を続ける
function move_random(Object) {
	if (modalFrag === false) { //モーダルが非表示の時
		if (Object.move > 0) {
			Object.move -= 4;
			if (Object.direction === direction.top) Object.y -= 4;
			if (Object.direction === direction.right) Object.x += 4;
			if (Object.direction === direction.down) Object.y += 4;
			if (Object.direction === direction.left) Object.x -= 4;
		}
	}
}