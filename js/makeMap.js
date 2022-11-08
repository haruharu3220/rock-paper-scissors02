// import { modalFrag } from './modal.js';

let makeMapArea = document.getElementById('makeMapArea');
makeMapArea.width = 896;	//canvasの横幅
makeMapArea.height = 960;	//canvasの縦幅

let makeMapItem = document.getElementById('makeMapItem');
makeMapItem.width = 50;	//canvasの横幅
makeMapItem.height = 650;	//canvasの縦幅



const min = 0;
const max = 100;
let directionChange = 0;
let directionNow = 0;

//コンテキストを取得
var make_map = makeMapArea.getContext('2d');
var Item_area = makeMapItem.getContext('2d');

//ジャンケンのENUM
let janken = {
    defalt: 0,
    gu: -2,
    choki: -3,
    pa: -4,
};

let direction = {
    top: 1,
    right: 2,
    down: 3,
    left: 4
};

let pacmanType ={
default:10,
gu:11,
choki: 12,
pa: 13,
};

let enemyType ={
    gu:21,
    choki: 22,
    pa: 23,
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



//アイテムのImageオブジェクトを作る
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

//パックマンのImageオブジェクトを作る
var pacman_default = new Image();
pacman_default.src = 'img/pacman.png';

//パックマン(グー)のImageオブジェクトを作る
var pacman_gu = new Image();
pacman_gu.src = 'img/pacman_gu.png';

//パックマン(チョキ)のImageオブジェクトを作る
var pacman_choki = new Image();
pacman_choki.src = 'img/pacman_choki.png';

//パックマン（パー）のImageオブジェクトを作る
var pacman_pa = new Image();
pacman_pa.src = 'img/pacman_pa.png';

//モンスター(グー)のImageオブジェクトを作る
var monster_gu = new Image();
monster_gu.src = 'img/blue.png';

//モンスター(チョキ)のImageオブジェクトを作る
var monster_choki = new Image();
monster_choki.src = 'img/red.png';

//モンスター（パー）のImageオブジェクトを作る
var monster_pa = new Image();
monster_pa.src = 'img/green.png';


//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//クリア判定フラグ
let clearFlig = false;

//マップの作成
let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let item = [0, -1, 1, pacmanType.default, enemyType.gu,enemyType.choki, enemyType.pa,janken.gu, janken.choki, janken.pa]


let itemCount = 0; //残アイテムの数をカウント
let itemCountBuff = 0; //残アイテムの数をカウント



for (var y = 0; y < map.length; y++) {
    for (var x = 0; x < map[y].length; x++) {
        if (map[y][x] === -1) {
            itemCount++;
        }
    }
}
console.log("アイテム数は" + itemCount);
console.log("item.length" + item.length);

//メインループ
function main() {
    let remainItemCount = 0;

    //アイテム格納領域の作成
    for (var i = 0; i < item.length; i++) {
        if (item[i] === 0) Item_area.drawImage(aisle_pacman, 0, 50 * i, 50, 50);
        if (item[i] === -1) Item_area.drawImage(point, 0, 50 * i, 50, 50);
        if (item[i] === 1) Item_area.drawImage(aisle, 0, 50 * i, 50, 50);
        if (item[i] === pacmanType.default) Item_area.drawImage(pacman_default, 0, 50 * i, 50, 50);
        if (item[i] === enemyType.gu) Item_area.drawImage(monster_gu, 0, 50 * i, 50, 50);
        if (item[i] === enemyType.choki) Item_area.drawImage(monster_choki, 0, 50 * i, 50, 50);
        if (item[i] === enemyType.pa) Item_area.drawImage(monster_pa, 0, 50 * i, 50, 50);
        if (item[i] === 7) Item_area.drawImage(aisle_pacman, 0, 50 * i, 50, 50);
        if (item[i] === 8) Item_area.drawImage(aisle_pacman, 0, 50 * i, 50, 50);
        if (item[i] === 9) Item_area.drawImage(gu, 0, 50 * i, 50, 50);
        if (item[i] === janken.gu) Item_area.drawImage(gu, 0, 50 * i, 50, 50);
        if (item[i] === janken.choki) Item_area.drawImage(choki, 0, 50 * i, 50, 50);
        if (item[i] === janken.pa) Item_area.drawImage(pa, 0, 50 * i, 50, 50);
    }

    // 線の色
    Item_area.strokeStyle = "white";
    // パスの開始
    Item_area.beginPath();

    for (let i = 0; i < makeMapItem.height / 50; i++) {
        Item_area.moveTo(0, 50 * i);
        Item_area.lineTo(makeMapItem.width, 50 * i);
    }

    // 描画
    Item_area.stroke();



    //マップの作成
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {

            if (map[y][x] === 0) { // アイテム無し通路
                make_map.drawImage(aisle_pacman, 32 * x, 32 * y);
            }
            else if (map[y][x] === -1) { //ポイント有り通路)
                //else if (map[y][x] === -1 ) { //ポイント有り通路)
                make_map.drawImage(point, 32 * x, 32 * y);
                remainItemCount++;
            }
            //console.log("map[y][x]="+ map[y][x]);
            else if (map[y][x] === 1) { //壁
                make_map.drawImage(aisle, 32 * x, 32 * y);
            }
            else if (map[y][x] === janken.gu) { //グーアイテム
                make_map.drawImage(gu, 32 * x, 32 * y, 32, 32);
            }
            else if (map[y][x] === janken.choki) { //チョキアイテム
                make_map.drawImage(choki, 32 * x, 32 * y, 32, 32);
            }
            else if (map[y][x] === janken.pa) { //パーアイテム
                make_map.drawImage(pa, 32 * x, 32 * y, 32, 32);
            }
            else if (map[y][x] === pacmanType.default) { //パーアイテム
                make_map.drawImage(pacman_default, 32 * x, 32 * y, 32, 32);
            }

            else if (map[y][x] === enemyType.gu) { //パーアイテム
                make_map.drawImage(monster_gu, 32 * x, 32 * y, 32, 32);
            }

            else if (map[y][x] === enemyType.choki) { //パーアイテム
                make_map.drawImage(monster_choki, 32 * x, 32 * y, 32, 32);
            }

            else if (map[y][x] === enemyType.pa) { //パーアイテム
                make_map.drawImage(monster_pa, 32 * x, 32 * y, 32, 32);
            }


            else { //デバッグ用コード　動作確認のためアイテムの数を減らす
                make_map.drawImage(pacman_default, 32 * x, 32 * y);
            }
        }
    }


    // 線の色
    make_map.strokeStyle = "white";
    // パスの開始
    make_map.beginPath();
    // make_map.moveTo(0, 32);
    // make_map.lineTo(makeMapArea.width, 32);

    for (let i = 0; i < makeMapArea.height / 32; i++) {
        make_map.moveTo(0, 32 * i);
        make_map.lineTo(makeMapArea.width, 32 * i);
    }

    for (let i = 0; i < makeMapArea.width / 32; i++) {
        make_map.moveTo(32 * i, 0);
        make_map.lineTo(32 * i, makeMapArea.height);
    }


    // 描画
    make_map.stroke();




    //残アイテムが0判定（クリア判定）
    //main 関数が無限ループしているからその中でクリア判定を実施し
    //クリアなら１回だけ通知を上げるところが難しかった
    if (remainItemCount === 0 && !clearFlig) {
        clearFlig = true;
        //console.log("A");
        // if (clearFlig) {
        // 	console.log("クリア");
        // 	clearModal.style.display = 'block';
        // 	modalFrag = true;
        // }
    }

    //敵を表示
    make_map.drawImage(enemy_gu.img, enemy_gu.x, enemy_gu.y, 32, 32); //グーの敵　＝青
    make_map.drawImage(enemy_choki.img, enemy_choki.x, enemy_choki.y, 32, 32); //チョキの敵　＝赤
    make_map.drawImage(enemy_pa.img, enemy_pa.x, enemy_pa.y, 32, 32); //パーの敵　＝緑

    //パックマンを表示
    //グーチョキパーに適したパックマンを表示
    if (pacman.janken === janken.gu) {
        make_map.drawImage(pacman.img_gu, pacman.x, pacman.y,); //パックマン
    } else if (pacman.janken === janken.choki) {
        make_map.drawImage(pacman.img_choki, pacman.x, pacman.y,); //パックマン
    } else if (pacman.janken === janken.pa) {
        make_map.drawImage(pacman.img_pa, pacman.x, pacman.y,); //パックマン
    } else {
        make_map.drawImage(pacman.img_default, pacman.x, pacman.y,); //パックマン
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
        // 	if (collision_to_enemy(pacman, enemy_gu, enemy_choki, enemy_pa)) {
        // 		if (gameover) {
        // 			gameOver.style.display = 'block';
        // 			modalFrag = true;
        // 		}
        // 	}

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
    //if (modalFrag === false) { //モーダルが非表示の時
    if (Object.move > 0) {
        Object.move -= 4;
        if (key.push === 'left') Object.x -= 4;
        if (key.push === 'up') Object.y -= 4;
        if (key.push === 'right') Object.x += 4;
        if (key.push === 'down') Object.y += 4;
    }
    //}
}

//敵のmoveが0より大きい場合は4pxセルずつランダムに移動を続ける
function move_random(Object) {
    //if (modalFrag === false) { //モーダルが非表示の時
    if (Object.move > 0) {
        Object.move -= 4;
        if (Object.direction === direction.top) Object.y -= 4;
        if (Object.direction === direction.right) Object.x += 4;
        if (Object.direction === direction.down) Object.y += 4;
        if (Object.direction === direction.left) Object.x -= 4;
    }
    //}
}

let makeMapAreaX=0; //クリックしたX座標
let makeMapAreaY=0; //クリックしたY座標

let mapItemX=0; //クリックしたX座標
let mapItemY=0; //クリックしたY座標

$("#makeMapItem").on("click", function (e) {
    // var mousePos = getMousePosition(Item_area, evt);
    // console.log("aaa" + mousePos.x);
    // console.log("aaa" + mousePos.y);
    // クリック位置の座標計算（canvasの左上を基準。-2ずつしているのはborderの分）
    var rect = e.target.getBoundingClientRect();
    mapItemX = e.clientX - Math.floor(rect.left) - 2;
    mapItemY = e.clientY - Math.floor(rect.top) - 2;
    console.log( mapItemX,~~(mapItemY/50) );
}); 

$("#makeMapArea").on("click", function (e) {
    // var mousePos = getMousePosition(Item_area, evt);
    // console.log("aaa" + mousePos.x);
    // console.log("aaa" + mousePos.y);
    // クリック位置の座標計算（canvasの左上を基準。-2ずつしているのはborderの分）
    var rect = e.target.getBoundingClientRect();
    makeMapAreaX = e.clientX - Math.floor(rect.left) - 2;
    makeMapAreaY = e.clientY - Math.floor(rect.top) - 2;
    //console.log( makeMapAreaX,makeMapAreaY );

    //console.log( map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)]);
    console.log( "map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] =="+map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)]);

    //map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] == 5;
    map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] = item[~~(mapItemY/50)];
    console.log( "map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] =="+map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)]);

}); 
