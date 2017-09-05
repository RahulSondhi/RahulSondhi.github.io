var options = ["About Me", "Experience", "Education", "Volunteering", "Skills", "Awards", "Projects", "Contact Me"];
var menuAnimation = false;
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

  setStage(index);
  setSky();
  setMenu();
});


function openMenu() {
  if (!menuAnimation) {
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
  setStage(options.length);
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

  if(newIndex <= options.length && newIndex > -1){
    index = newIndex;
  }else{
    index = 0;
  }

  setStage(index);
}

function setStage(index) {
  if(index == 0){
    $("#skyContainer").css("visibility","visible");
    $("#navigationContainer").css("visibility","hidden");
  }else{
    $("#skyContainer").css("visibility","hidden");
    $("#navigationContainer").css("visibility","visible");
  }
  switch (index) {
    case 0:
      $("")
      break;

    case 1:

      break;

    case 2:

      break;

    case 3:

      break;

    case 4:

      break;

    case 5:

      break;

    case 6:

    break;

    case 7:

      break;

    default:
      break;

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
  for (var i = 1; i < options.length; i++) {
    var divToPush = $("<div></div>");
    divToPush.attr("id", "option" + i);
    divToPush.attr("class", "menuOption button");
    divToPush.html("<div class='menuText'>" + options[i-1] + "</div>");
    divToPush.attr("onclick", "setStage(" + i + ")");
    $("#menuContainer").append(divToPush);
  }
  $(".menuOption").css("visibility", "hidden");
}
