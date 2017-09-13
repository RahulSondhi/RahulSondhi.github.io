var options = ["About Me", "Experience", "Education", "Volunteering", "Skills", "Awards", "Projects", "Contact Me"];
var menuAnimation = false;
var animation = false;
var index = 0;

$(function() {

  $("#menuButton").on("click", function() {
    openMenu();
  });

  $("#menuContainer").mouseleave(function() {
    closeMenu();
  });

  $("#contactButton").on("click", function() {
    openContact();
  });

  $("#logo").on("click", function() {
    stageIncrement(1);
  });

  $("#leftArrow").on("click", function() {
    stageIncrement(-1);
  });

  $("#rightArrow").on("click", function() {
    stageIncrement(1);
  });

  setSky();
  setMenu();
});


function openMenu() {
  if (!menuAnimation && !animation) {
    $("#menuButtonContainer").css("visibility", "hidden");
    $(".menuOption").css("visibility", "visible");
    $("#menuContainer").addClass("menuOpen");
    menuAnimation = true;
    window.setTimeout(function() {
      $("#menuContainer").removeClass("menuOpen");
      $("#menuContainer").css("left", "0");
      menuAnimation = false;
    }, 750);
  }
}

function openContact() {
  if(index != 0){
    stageIncrement(0-index);
  }
}

function closeMenu() {
  if (!menuAnimation) {
    $("#menuContainer").addClass("menuClose");
    menuAnimation = true;
    window.setTimeout(function() {
        $("#menuContainer").removeClass("menuClose");
        $("#menuContainer").css("left", "-17%");
        $(".menuOption").css("visibility", "hidden");
        $("#menuButtonContainer").css("visibility", "visible");
        menuAnimation = false;
    }, 750);
  }
}

function stageIncrement(increment){

  var newIndex= index + increment;
if(!animation){
  if(newIndex <= options.length && newIndex > -1){
    index = newIndex;
  }else{
    index = 0;
  }

  setStage(index);
  }
}

function setStage(pageIndex) {
  index = pageIndex;
  if(index == 0){
    $("#navigationContainer").css("visibility","hidden");
    boardAnimateOut();
    window.setTimeout(function() {
      stageAnimate(pageIndex);
    window.setTimeout(function() {
        $("#skyContainer").css("visibility","visible");
      }, 3000);
    },2000);
  }else{
    $("#navigationContainer").css("visibility","hidden");
    $("#skyContainer").css("visibility","hidden");
    boardAnimateOut();
    window.setTimeout(function() {
      stageAnimate(pageIndex);
    window.setTimeout(function() {
        boardAnimateIn(pageIndex);
          window.setTimeout(function() {
            $("#navigationContainer").css("visibility","visible");
        },2000);
      }, 3000);
    },2000);
  }
  console.log(index);
}

function boardAnimateIn(index){
console.log("IN");
animation = true;
window.setTimeout(function() {
    $("#board").addClass("boardSetIn");
    animation = false;
}, 2000);
}

function boardAnimateOut(){
console.log("OUT");
animation = true;
window.setTimeout(function() {
  $("#board").addClass("boardSetOut");
  animation = false;
}, 2000);
}

function stageAnimate(index){
if(!animation){
  animation = true;
  $("#citySkyline").addClass("stage"+index);
  window.setTimeout(function() {
      $("#citySkyline").addClass("stageSet"+index);
      for(var i = 0; i < options.length; i++){
        if(i != index){
          $("#citySkyline").removeClass("stageSet"+i);
        }
      }
      $("#citySkyline").removeClass("stage"+(index));

      if(index == 0){
        $("#citySkyline").removeClass("stageSet8");
      }
      animation = false;
  }, 3000);
}
}

function setSky() {
  var time = new Date();
  $("#stage").addClass("sky-gradient-"+time.getHours());
  if (time.getHours() > 15 || time.getHours() < 8) {
    $("body").css("background-color", "#505050");
  } else {
    $("body").css("background-color", "#000");
  }
  window.setTimeout(function() {
      setSky();
  }, 60000);
}

function setMenu() {
  for (var i = 1; i <= options.length; i++) {
    var divToPush = $("<div></div>");
    divToPush.attr("id", "option" + i);
    divToPush.attr("class", "menuOption button");
    divToPush.html("<div class='menuText'>" + options[i-1] + "</div>");
    divToPush.attr("onclick", "setStage(" + i + ")");
    $("#menuContainer").append(divToPush);
  }
  $(".menuOption").css("visibility", "hidden");
}
