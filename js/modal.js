
// const buttonOpen = document.getElementById('modalOpen');
// const modal = document.getElementById('easyModal');
// const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
//buttonOpen.addEventListener('click', modalOpen);
function main2() {
  if (clearFlig !== 0) {
    //function modalOpen() {
    clearModal.style.display = 'block';
    //}
  }
  requestAnimationFrame(main2);
}
  addEventListener('load', main2(), false);
  // バツ印がクリックされた時
  //buttonClose.addEventListener('click', modalClose);
  function modalClose() {
    modal.style.display = 'none';
  }

  // モーダルコンテンツ以外がクリックされた時
  //addEventListener('click', outsideClose);
  function outsideClose(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
