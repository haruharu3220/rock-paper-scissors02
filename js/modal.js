// import {clearFlig} from  './map.js';
// import {collision_to_enemy} from  './map.js';

let rule_page = 1;

//trueの時はモーダル表示中 falseの時はモーダル非表示
export let modalFrag = false;


// ボタンがクリックされた時
//buttonOpen.addEventListener('click', modalOpen);
function main2() {
  //console.log("rule_page ==" + rule_page);

  if (rule_page == 1) {
    rules01.style.display = 'block';
    modalFrag = true;

  }
  if (rule_page == 2) {
    rules01.style.display = 'none';
    rules02.style.display = 'block';
    modalFrag = true;
  }
  if (rule_page == 3) {
    rules02.style.display = 'none';
    rules03.style.display = 'block';
    modalFrag = true;
  }

  if (rule_page == 4) {
    rules03.style.display = 'none';
    rules04.style.display = 'block';
    modalFrag = true;
  }


  if (rule_page == 5) {
    rules04.style.display = 'none';
    modalFrag = false;
  }

  if (rule_page == 6) {
    clearModal.style.display = 'none';
    location.href = "end.html";
    modalFrag = false;
  }


//ゲームクリアなら
  // if (clearFlig) {
  //   clearModal.style.display = 'block';
  //   modalFrag = true;
  // }

  // //敵と当たったとき
  // if (collision_to_enemy(pacman, enemy_gu, enemy_choki, enemy_pa)) {
  //   if (gameover) {
  //     gameOver.style.display = 'block';
  //     modalFrag = true;
  //   }
  // }



  requestAnimationFrame(main2);
}
addEventListener('load', main2(), false);


addEventListener('keydown', nextPage);
//addEventListener('keyup', nextPage);

function nextPage(e) {
  if (e.keyCode === 13) //エンターキーが押されたとき
  {
    rule_page++
  }
}

//参考サイト
//https://tcd-theme.com/2021/08/javascript-modalwindow.html
//https://coco-factory.jp/ugokuweb/move01/9-6-1/