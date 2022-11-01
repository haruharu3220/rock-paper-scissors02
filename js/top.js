// $(".start").on("click",function(){

//     //https://maou.audio/
//     $("#yes_audio").get(0).play();
//     setTimeout(function(){
//         window.location.href = "game.html";
//         }, 700);
// });


// $(".no").on("click",function(){

//     $("#yes_audio").get(0).play();
//     setTimeout(function(){
//     window.location.href = "game.html";
//     }, 700);
// });

var selecter = 0;

addEventListener('keypress', select);

function select(e) {
  	if (e.keyCode === 13) {
		
        selecter++;  
        console.log(selecter);
        if(selecter===1){
            $("#start a").css("background","red");
            $("#select a").css("background","gray");
            $("#setting a").css("background","gray");
        }

        if(selecter===2){
            $("#start a").css("background","gray");
            $("#select a").css("background","red");
            $("#setting a").css("background","gray");
        }

        if(selecter===3){
            $("#start a").css("background","gray");
            $("#select a").css("background","gray");
            $("#setting a").css("background","red");
        }

        
	}  
		return false;
}


function plus(e) {
    if (e.keyCode === 13) {
      
      selecter++;  
      console.log(selecter);
      if(selecter===1){
          $("#start a").css("background","red");
          $("#select a").css("background","gray");
          $("#setting a").css("background","gray");
      }

      if(selecter===2){
          $("#start a").css("background","gray");
          $("#select a").css("background","red");
          $("#setting a").css("background","gray");
      }

      if(selecter===3){
          $("#start a").css("background","gray");
          $("#select a").css("background","gray");
          $("#setting a").css("background","red");
      }

      
  }  
      return false;
}

function minus(e) {
    if (e.keyCode === 13) {
      
      selecter++;  
      console.log(selecter);
      if(selecter===1){
          $("#start a").css("background","red");
          $("#select a").css("background","gray");
          $("#setting a").css("background","gray");
      }

      if(selecter===2){
          $("#start a").css("background","gray");
          $("#select a").css("background","red");
          $("#setting a").css("background","gray");
      }

      if(selecter===3){
          $("#start a").css("background","gray");
          $("#select a").css("background","gray");
          $("#setting a").css("background","red");
      }

      
  }  
      return false;
}




