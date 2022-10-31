//https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
var cursor = document.getElementById("cursor");

// getContext()は、グラフィックを描画するためのコンテキストを取得するためのメソッドです。
// 引数でコンテキストを表す文字列を指定します。
// ブラウザが対応していない文字列を指定した場合、nullが返ります。
//https://syncer.jp/Web/API_Interface/Reference/IDL/HTMLCanvasElement/getContext/#:~:text=getContext()%E3%81%AF%E3%80%81%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%92,%E5%A0%B4%E5%90%88%E3%80%81%20null%20%E3%81%8C%E8%BF%94%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82&text=%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8,%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%92%E6%8F%8F%E7%94%BB%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82


    var ctx_cursor = cursor.getContext("2d");

    var cursor01 =new Object();
    cursor01.firstX = 125;
    cursor01.firstY = 50;

    cursor01.secondX = 100;
    cursor01.secondY = 75;


    cursor01.thirdX = 100;
    cursor01.thirdY = 25;



    ctx_cursor.beginPath();
    ctx_cursor.moveTo(cursor01.firstX, cursor01.firstY); //最初の点の場所
    ctx_cursor.lineTo(cursor01.secondX, cursor01.secondY); //2番目の点の場所
    ctx_cursor.lineTo(cursor01.thirdX, cursor01.thirdY); //3番目の点の場所
    ctx_cursor.closePath();	//三角形の最後の線 closeさせる
    ctx_cursor.strokeStyle = "rgb(0,0,0)"; //枠線の色
    ctx_cursor.stroke();
    ctx_cursor.fillStyle = "white";//塗りつぶしの色
    ctx_cursor.fill();



