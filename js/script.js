$(function() {
  startEmUp();
});

function startEmUp(){
  window.location.hash = "about";
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
  $("#navbarAboutMe").removeClass("selectedNavbar");
  $("#navbarResume").removeClass("selectedNavbar");
  $("#navbarProjects").removeClass("selectedNavbar");
  $("#navbarContactMe").removeClass("selectedNavbar");
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
      $("#navbarContactMe").addClass("selectedNavbar");
      $("#contentPanelContact").removeClass("hidden");
      break;
    case "#projects":
      $("#navbarProjects").addClass("selectedNavbar");
      $("#contentPanelProjects").removeClass("hidden");
      break;
    case "#resume":
      $("#navbarResume").addClass("selectedNavbar");
      $("#contentPanelResume").removeClass("hidden")
      break;
    case "#about":
      $("#navbarAboutMe").addClass("selectedNavbar");
      $("#contentPanelAbout").removeClass("hidden");
      break;
    default: break;
  }
}
