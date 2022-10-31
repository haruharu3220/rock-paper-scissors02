//canvasの設定（せってい）
var canvas = document.getElementById('canvas');
canvas.width = 640;	//canvasの横幅（よこはば）
canvas.height = 640;	//canvasの縦幅（たてはば）

//コンテキストを取得（しゅとく）
var ctx = canvas.getContext('2d');

//x=0, y=0 の位置（いち）に縦横（たてよこ）30pxの正方形（せいほうけい）を描く
ctx.fillRect(0, 0, 30, 30);