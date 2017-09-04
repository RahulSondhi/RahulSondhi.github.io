$(function () {
  $("#menuButton").on("click",function(){
    openMenu();
  });

  $("#contactButton").on("click",function(){
    openContact();
  });

});

function openMenu(){
  console.log("Menu");
}

function openContact(){
  console.log("Contact")
}

function closeMenu(){
  console.log("Close Menu");
}

function closeContact(){
  console.log("Close Contact");
}
