// import { modalFrag } from './modal.js';

let makeMapArea = document.getElementById('makeMapArea');
makeMapArea.width = 896;	//canvasの横幅
makeMapArea.height = 960;	//canvasの縦幅

let makeMapItem = document.getElementById('makeMapItem');
makeMapItem.width = 50;	//canvasの横幅
makeMapItem.height = 500;	//canvasの縦幅



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

let pacmanType = {
    default: 10,
    gu: 11,
    choki: 12,
    pa: 13,
};

let enemyType = {
    gu: 21,
    choki: 22,
    pa: 23,
};


let pacmanCount = 0; //配置したパックマンの数
let enemy_guCount = 0; //配置したパックマンの数
let enemy_chokiCount = 0; //配置したパックマンの数
let enemy_paCount = 0; //配置したパックマンの数
var madePacman = []; //配置したパックマンオブジェクトの管理用配列
var madeEnemy_gu = []; //配置したパックマンオブジェクトの管理用配列
var madeEnemy_pa = []; //配置したパックマンオブジェクトの管理用配列
var madeEnemy_choki = []; //配置したパックマンオブジェクトの管理用配列

let selectPlay = false; //遊ぶボタンをタップしたかフラグ
let selectReset = false;

//モーダルが表示されているか判定するフラグ
let modalDisplayFrag = false;


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

//ゲームオーバ判定フラグ
let gameover = false;

//残アイテムの数をカウント
let itemCount = 0;


//マップの作成
let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let item = [0, -1, 1, pacmanType.default, enemyType.gu, enemyType.choki, enemyType.pa, janken.gu, janken.choki, janken.pa]


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




    //マップの作成
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {


            if (map[y][x] === 0) { // アイテム無し通路
                make_map.drawImage(aisle_pacman, 32 * x, 32 * y);
            }
            else if (map[y][x] === -1) { //ポイント有り通路)
                make_map.drawImage(point, 32 * x, 32 * y);
                remainItemCount++;
            }

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
            else if (map[y][x] === pacmanType.default) { //デフォルトパックマン
                make_map.drawImage(pacman_default, 32 * x, 32 * y, 32, 32);
            }

            else if (map[y][x] === enemyType.gu) { //敵（グー）
                make_map.drawImage(monster_gu, 32 * x, 32 * y, 32, 32);
            }

            else if (map[y][x] === enemyType.choki) { //敵（チョキ）
                make_map.drawImage(monster_choki, 32 * x, 32 * y, 32, 32);
            }

            else if (map[y][x] === enemyType.pa) { //敵（パー）
                make_map.drawImage(monster_pa, 32 * x, 32 * y, 32, 32);
            }
        }
    }


    //マップ領域に白線を引く
    make_map.strokeStyle = "white";
    make_map.beginPath();   // パスの開始

    //格子の線を格納
    for (let i = 0; i <= makeMapArea.height / 32; i++) {
        make_map.moveTo(0, 32 * i);
        make_map.lineTo(makeMapArea.width, 32 * i);
    }

    for (let i = 0; i <= makeMapArea.width / 32; i++) {
        make_map.moveTo(32 * i, 0);
        make_map.lineTo(32 * i, makeMapArea.height);
    }

    // 描画
    make_map.stroke();


    //アイテム領域に白線を引く
    Item_area.strokeStyle = "white";
    // パスの開始
    Item_area.beginPath();

    for (let i = 0; i <= makeMapItem.height / 50; i++) {
        Item_area.moveTo(0, 50 * i);
        Item_area.lineTo(makeMapItem.width, 50 * i);
    }
    for (let i = 0; i <= makeMapItem.width / 50; i++) {
        Item_area.moveTo(50 * i ,0 );
        Item_area.lineTo(50 * i,makeMapItem.height);
    }
    // 描画
    Item_area.stroke();




    //遊ぶを押したら
    if (selectPlay && !modalDisplayFrag) {

        //パックマンオブジェクトの制御
        for (var i = 0; i < pacmanCount; i++) {
            if (madePacman[i].janken === janken.gu) {
                //パックマンがグーだったらグーになる
                make_map.drawImage(madePacman[i].img_gu, madePacman[i].x, madePacman[i].y,);

            } else if (madePacman[i].janken === janken.choki) {
                //パックマンがチョキだったらチョキになる
                make_map.drawImage(madePacman[i].img_choki, madePacman[i].x, madePacman[i].y,); //パックマン

            } else if (madePacman[i].janken === janken.pa) {
                //パックマンがパーだったらパーになる
                make_map.drawImage(madePacman[i].img_pa, madePacman[i].x, madePacman[i].y,); //パックマン

            } else {
                //パックマンがデフォルトだったらデフォルトになる
                make_map.drawImage(madePacman[i].img_default, madePacman[i].x, madePacman[i].y,); //パックマン
            }
            // アイテムを取ったらそのアイテムに応じた手になる
            itemCatch(madePacman[i]);

            //  Moveが0なら→32の倍数座標にあるので当たり判定を行う
            if (madePacman[i].move === 0) {
                collision(madePacman[i]);
            }
            //　Moveが0以外なら→移動の途中なので移動を続ける
            if (madePacman[i].move > 0) {
                move(madePacman[i]);
            }
        }


        for (var i = 0; i < enemy_guCount; i++) {
            make_map.drawImage(madeEnemy_gu[i].img, madeEnemy_gu[i].x, madeEnemy_gu[i].y,); //敵（グー）

            enemyMove(madeEnemy_gu[i]); //敵をランダムに動かす
            collision_to_enemy(madePacman[0], madeEnemy_gu[i]);
        }

        for (var i = 0; i < enemy_chokiCount; i++) {
            make_map.drawImage(madeEnemy_choki[i].img, madeEnemy_choki[i].x, madeEnemy_choki[i].y,); //敵（グー）
            enemyMove(madeEnemy_choki[i]);//敵をランダムに動かす
            collision_to_enemy(madePacman[0], madeEnemy_choki[i]);
        }

        for (var i = 0; i < enemy_paCount; i++) {
            make_map.drawImage(madeEnemy_pa[i].img, madeEnemy_pa[i].x, madeEnemy_pa[i].y,); //敵（グー）
            enemyMove(madeEnemy_pa[i]);//敵をランダムに動かす
            collision_to_enemy(madePacman[0], madeEnemy_pa[i]);
        }


        //残アイテムが0判定（クリア判定）
        //main 関数が無限ループしているからその中でクリア判定を実施し
        //クリアなら１回だけ通知を上げるところが難しかった
        if (remainItemCount === 0 && !notPointFlag) {
            clearFlig = true;
        }
        if (clearFlig && !modalDisplayFrag) {
            gameclearForMakeMap.style.display = 'block';
            modalDisplayFrag = true;
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

        if (Object.direction === direction.top) {
            var x = Object.x / 32;
            var y = Object.y / 32;
            if (y > 0) {
                y--;
                if (map[y][x] != 1) {
                    Object.move = 32;
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



//敵との当たり判定　第一引数：パックマンオブジェクト　第二引数以降：敵オブジェクト
export function collision_to_enemy(Pacman, Object) {
    for (let i = 0; i < arguments.length - 1; i++) {
        if ((Pacman.x === Object.x) && (Pacman.y === Object.y)) {
            if ((Pacman.janken === janken.pa && Object.janken === janken.gu) ||
                (Pacman.janken === janken.gu && Object.janken === janken.choki) ||
                (Pacman.janken === janken.choki && Object.janken === janken.pa)) {
                gameover = false;

            } else {
                gameover = true;
                console.log("GAMEOVER");

                gameOverForMakeMap.style.display = 'block';
                modalDisplayFrag = true;


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
        if (Object.direction === direction.top) {
            Object.y -= 4;

        }
        else if (Object.direction === direction.right) {
            Object.x += 4;

        }
        else if (Object.direction === direction.down) {
            Object.y += 4;

        }
        else if (Object.direction === direction.left) {
            Object.x -= 4;
        }
    }
    //}
}

let makeMapAreaX = 0; //クリックしたX座標
let makeMapAreaY = 0; //クリックしたY座標

let mapItemX = 0; //クリックしたX座標
let mapItemY = 0; //クリックしたY座標

//アイテム領域をクリックしたとき
$("#makeMapItem").on("click", function (e) {
    // クリック位置の座標計算（canvasの左上を基準。-2ずつしているのはborderの分）
    var rect = e.target.getBoundingClientRect();
    mapItemX = e.clientX - Math.floor(rect.left) - 2;
    mapItemY = e.clientY - Math.floor(rect.top) - 2;
});

//マップ領域をクリックしたとき
$("#makeMapArea").on("click", function (e) {

    // クリック位置の座標計算（canvasの左上を基準。-2ずつしているのはborderの分）
    var rect = e.target.getBoundingClientRect();
    makeMapAreaX = e.clientX - Math.floor(rect.left) - 2;
    makeMapAreaY = e.clientY - Math.floor(rect.top) - 2;

    //console.log("map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] ==" + map[~~(makeMapAreaY / 32)][~~(makeMapAreaX / 32)]);

    //map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] == 5;
    map[~~(makeMapAreaY / 32)][~~(makeMapAreaX / 32)] = item[~~(mapItemY / 50)];
    //console.log("map[~~(makeMapAreaY/32)][~~(makeMapAreaX/32)] ==" + map[~~(makeMapAreaY / 32)][~~(makeMapAreaX / 32)]);

});


//https://shanabrian.com/web/jquery/mouse-position.php


var mouse_push_hold = function () {
    // ここに、マウスボタンを押しっぱなしにしている間に行いたい処理
    if (pushing_flag == 1) {
        // 領域内でマウスボタンを押している場合、この関数を再び呼び出す
        setTimeout(mouse_push_hold, 1);
    }
};

var pushing_flag = 0; // マウスの状態を示すフラグ(1なら領域内でボタンが押されている)

// id(=click_area)の領域内でのマウスの状態を検知
$("#makeMapArea").mousedown(function () {
    // 領域内でマウスボタンを押した時
    pushing_flag = 1;
    setTimeout(mouse_push_hold, 1); // ここで「mouse_push_hold」を指定

    return false;
}).mouseup(function () {
    // 領域内でマウスボタンを離した時
    pushing_flag = 0;
    clearTimeout(mouse_push_hold);  // clearTimeout()の処理を止める
}).mouseleave(function () {
    // マウスカーソルが領域外になった時
    pushing_flag = 2;
    clearTimeout(mouse_push_hold);  // clearTimeout()の処理を止める
}).mouseover(function () {
    // マウスカーソルが領域内になった時
    pushing_flag = 0;
    clearTimeout(mouse_push_hold);  // clearTimeout()の処理を止める
});

//Map領域でドラッグをしたら
$("#makeMapArea").on("mousemove", function (e) {
    if (pushing_flag === 1) {
        if ($("makeMapArea").mousedown) {
            var rect = e.target.getBoundingClientRect();
            makeMapAreaX = e.clientX - Math.floor(rect.left) - 2;
            makeMapAreaY = e.clientY - Math.floor(rect.top) - 2;

            map[~~(makeMapAreaY / 32)][~~(makeMapAreaX / 32)] = item[~~(mapItemY / 50)];
        }
    }
});


$("#selectDoneButton").on("click", function (e) {
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] === pacmanType.default) {
                pacmanCount++;
            }
            if (map[y][x] === -1) {
                itemCount++;
            }
        }
    }

    //フラグを立てる
    if (itemCount === 0 && pacmanCount !== 0) {
        notPointFlag = true;
        notPointModal.style.display = 'block';
        modalDisplayFrag = true;
    }
    if (itemCount !== 0 && pacmanCount === 0) {
        notPacmanFlag = true;
        notPacmanModal.style.display = 'block';
        modalDisplayFrag = true;
    }

    if (itemCount === 0 && pacmanCount === 0) {
        notPacmanFlag = true;
        notPointFlag = true;
        notPacmanPointModal.style.display = 'block';
        modalDisplayFrag = true;
    }
    console.log("selectDoneが押されました");
    selectPlayButton.style.display = 'block';
    changeMakeModeButton.style.display = 'block';
    selectDoneButton.style.display = 'none';
    selectResetButton.style.display = 'none';


});

//リセットボタンを押したら
$("#selectreset").on("click", function (e) {
    console.log("リセットボタンが押されました。");
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            selectReset = true;

            if (x === 0 || y === 0 || x === map[y].length - 1 || y === map.length - 1) {
                map[y][x] = 1;
            } else {
                map[y][x] = 0;
            }

        }
    }

});

//パックマンいないフラグ
let notPacmanFlag = false;
//ポイント置いていないフラグ
let notPointFlag = false;


//遊ぶボタンを押したら
let pacmanSelector = 0;
$("#selectPlayButton").on("click", function (e) {
    //まずパックマンとアイテムを数える



    if (notPointFlag === false && notPacmanFlag === false) {
        selectPlay = true;

        //パックマンと敵の数を数える
        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                //パックマンの数を数える
                if (map[y][x] === pacmanType.default) {
                    madePacman[pacmanSelector] = new Object();
                    madePacman[pacmanSelector].img_default = new Image();
                    madePacman[pacmanSelector].img_default.src = 'img/pacman.png';
                    madePacman[pacmanSelector].img_gu = new Image();
                    madePacman[pacmanSelector].img_gu.src = 'img/pacman_gu.png';
                    madePacman[pacmanSelector].img_choki = new Image();
                    madePacman[pacmanSelector].img_choki.src = 'img/pacman_choki.png';
                    madePacman[pacmanSelector].img_pa = new Image();
                    madePacman[pacmanSelector].img_pa.src = 'img/pacman_pa.png';
                    madePacman[pacmanSelector].janken = janken.defalt;
                    madePacman[pacmanSelector].x = 32 * x;
                    madePacman[pacmanSelector].y = 32 * y;
                    madePacman[pacmanSelector].move = 0;
                    pacmanSelector++;
                    map[y][x] = 0;
                }
                //グーの敵の数を数える
                if (map[y][x] === enemyType.gu) {
                    madeEnemy_gu[enemy_guCount] = new Object();
                    madeEnemy_gu[enemy_guCount].img = new Image();
                    madeEnemy_gu[enemy_guCount].img.src = 'img/blue.png';
                    madeEnemy_gu[enemy_guCount].janken = janken.gu;
                    madeEnemy_gu[enemy_guCount].x = 32 * x;
                    madeEnemy_gu[enemy_guCount].y = 32 * y;
                    madeEnemy_gu[enemy_guCount].move = 0;
                    madeEnemy_gu[enemy_paCount].direction = direction.top;
                    enemy_guCount++;
                    map[y][x] = 0;
                }
                //チョキの敵の数を数える
                if (map[y][x] === enemyType.choki) {
                    madeEnemy_choki[enemy_chokiCount] = new Object();
                    madeEnemy_choki[enemy_chokiCount].img = new Image();
                    madeEnemy_choki[enemy_chokiCount].img.src = 'img/red.png';
                    madeEnemy_choki[enemy_chokiCount].janken = janken.gu;
                    madeEnemy_choki[enemy_chokiCount].x = 32 * x;
                    madeEnemy_choki[enemy_chokiCount].y = 32 * y;
                    madeEnemy_choki[enemy_chokiCount].move = 0;
                    madeEnemy_choki[enemy_chokiCount].direction = direction.top;
                    enemy_chokiCount++;
                    map[y][x] = 0;
                }
                //パーの敵の数を数える
                if (map[y][x] === enemyType.pa) {
                    madeEnemy_pa[enemy_paCount] = new Object();
                    madeEnemy_pa[enemy_paCount].img = new Image();
                    madeEnemy_pa[enemy_paCount].img.src = 'img/green.png';
                    madeEnemy_pa[enemy_paCount].janken = janken.gu;
                    madeEnemy_pa[enemy_paCount].x = 32 * x;
                    madeEnemy_pa[enemy_paCount].y = 32 * y;
                    madeEnemy_pa[enemy_paCount].move = 0;
                    madeEnemy_pa[enemy_paCount].direction = direction.top;
                    enemy_paCount++;
                    map[y][x] = 0;
                }

            }

        }
    }



});

//敵のmoveが0より大きい場合は4pxセルずつランダムに移動を続ける
function itemCatch(Object) {
    if (Object.move === 0 && Object.x % 32 === 0 && Object.y % 32 === 0) {


        if (map[Object.y / 32][Object.x / 32] === janken.gu) {
            //console.log("グー");
            Object.janken = janken.gu;
        } else if (map[Object.y / 32][Object.x / 32] === janken.choki) {
            //console.log("チョキ");
            Object.janken = janken.choki;
        } else if (map[Object.y / 32][Object.x / 32] === janken.pa) {
            //console.log("パー");
            Object.janken = janken.pa;
        }
        map[Object.y / 32][Object.x / 32] = 0;
    }

}

//敵をランダムに動かす関数
function enemyMove(Object) {
    if (Object.move === 0) {
        directionChange = Math.floor(Math.random() * (max - min + 1) + min);
        //40％の確率でそのままの向きに移動
        if (directionChange < 40) {
            //60％の確立で方向転換
        } else if (directionChange > 40 && directionChange < 55) {
            Object.direction = direction.top;
            //console.log("TOP");
        }
        else if (directionChange > 55 && directionChange < 60) {
            Object.direction = direction.right;
            //console.log("Right");
        }
        else if (directionChange > 60 && directionChange < 75) {
            Object.direction = direction.down;
            // console.log("Down");
        }
        else if (directionChange > 75) {

            Object.direction = direction.left;
            // console.log("Left");
        }
        collision_enemy(Object);
        //console.log("directionChange=" + directionChange);
    }
    if (Object.move > 0) {
        move_random(Object);
    }

}
