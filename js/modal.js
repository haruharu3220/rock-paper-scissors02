let rule_page = 1;


//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie('access')
if (!access) {
  flag = true;
  $.cookie('access', false);
} else {
  flag = false
}



// ボタンがクリックされた時
//buttonOpen.addEventListener('click', modalOpen);
function main2() {
 console.log("rule_page ==" + rule_page);

 if (/*access != 0 &&*/ rule_page == 1) {
  //alert("aaa");
  rules01.style.display = 'block';

}
if(rule_page == 2) {
  //function modalOpen() {
  //console.log("aaa");
  //alert("bbb");
  rules01.style.display = 'none';
  //rules02.style.display = 'block';
}

  if(clearFlig !== 0) {
    easyModal.style.display = 'block';
  }

  requestAnimationFrame(main2);
}
addEventListener('load', main2(), false);


addEventListener('keydown', nextPage);
//addEventListener('keyup', nextPage);

function nextPage(e) {
  if (e.keyCode === 13) {
    rule_page++
  }
}



if(rule_page == 2) {
  //function modalOpen() {
  //console.log("aaa");
  //alert("bbb");
  rules01.style.display = 'none';
  //rules02.style.display = 'block';
}
else if(rule_page == 3) {
  rules02.style.display = 'none';
  //rules03.style.display = 'block';
}
else if (rule_page == 4) {
  //function modalOpen() {
  //console.log("aaa");
  rules03.style.display = 'none';
  //rules04.style.display = 'block';
}
else if (rule_page >= 5) {
 // rules04.style.display = 'block';
}

//参考サイト
//https://tcd-theme.com/2021/08/javascript-modalwindow.html
//https://coco-factory.jp/ugokuweb/move01/9-6-1/