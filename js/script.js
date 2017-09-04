$(function () {

  $("#menuButton").on("click",function(){
    openMenu();
  });

  $("#menuContainer").mouseleave(function(){
    closeMenu();
  });

  $("#contactButton").on("click",function(){
    openContact();
  });

  $("#logo").on("click",function(){
    setStage(0);
  });

  setSky();
  setMenu();
});

options = ["About Me","Experience","Education","Volunteering","Skills","Awards","Projects","Contact Me"];

function openMenu(){
  $("#menuButtonContainer").css("visibility","hidden");
  $(".menuOption").css("visibility","visible");
}

function openContact(){
  setStage(options.length-1);
}

function closeMenu(){
  $(".menuOption").css("visibility","hidden");
  $("#menuButtonContainer").css("visibility","visible");
}

function setStage(index){
  console.log(index);
}

function setSky(){
  var time = new Date();
  console.log(time.getHours());
  if( time.getHours() > 19 ) {
    $(".screen").css("background-color","#000");
    $("body").css("background-color","#505050");
  }else{
    $(".screen").css("background-color","#87cefa");
    $("body").css("background-color","#000");
  }
}

function setMenu(){
  for(var i = 0; i < options.length-1; i++){
    var divToPush = $("<div></div>");
    divToPush.attr("id", "option"+ i);
    divToPush.attr("class", "menuOption button");
    divToPush.html("<div class='menuText'>"+options[i]+"</div>");
    divToPush.attr("onclick", "setStage("+i+")");
    $("#menuContainer").append(divToPush);
  }
  $(".menuOption").css("visibility","hidden");
}
