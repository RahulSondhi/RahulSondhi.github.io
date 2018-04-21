$(function() {
  startEmUp();
});

function startEmUp(){
  window.location.hash = "about";
  setSky();
  setNavbar();
  reloadUpdate();
}

function reloadUpdate(){
  if(window.location.hash == "" || window.location.hash == "#"){
    hideAllPages();
  }else{
    updateUrl()
  }
}

function hideAllPages(){
  //************************************************//
  $("#contentPanelAbout").removeClass("hidden");
  $("#contentPanelResume").removeClass("hidden");
  $("#contentPanelProjects").removeClass("hidden");
  $("#contentPanelContact").removeClass("hidden");
  //***********************************************//
  $("#contentPanelAbout").addClass("hidden");
  $("#contentPanelResume").addClass("hidden");
  $("#contentPanelProjects").addClass("hidden");
  $("#contentPanelContact").addClass("hidden");
  //*********************************************//
}

function setNavbar(){
  $("#navbarAboutMe").click(function(){
    window.location.hash = "about";
    updateUrl();
  });
  $("#navbarResume").click(function(){
    window.location.hash = "resume";
    updateUrl();
  });
  $("#navbarProjects").click(function(){
    window.location.hash = "projects";
    updateUrl();
  });
  $("#navbarContactMe").click(function(){
    window.location.hash = "contact";
    updateUrl();
  });
}

function updateUrl(){
  var hash = window.location.hash;
  var parse = hash.split("-");
  hideAllPages();
  switch(parse[0]){
    case "#contact":
      $("#contentPanelContact").removeClass("hidden");
      break;
    case "#projects":
      $("#contentPanelProjects").removeClass("hidden");
      break;
    case "#resume":
      $("#contentPanelResume").removeClass("hidden")
      break;
    case "#about":
      $("#contentPanelAbout").removeClass("hidden");
      break;
    default: break;
  }
}

function setSky() {
  $("#content").addClass("sky-gradient-"+new Date().getHours());
  window.setTimeout(function() {
      setSky();
  }, 6000);
}
