var animating = false;

$(function() {

  $(window).on("unload", function(e) {
    updateUrl();
  });

  $(window).on('hashchange', function() {
    updateUrl();
  });

  $(document).keydown(function(e) {
    switch (e.which) {

      case 38: // up
        break;

      case 40: // down
        $("#goingDown").click();
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  setPageBG();
});

function setPageBG(){
  setSky();

$('#helpmysoul')[0].addEventListener('load', function() {
  var svgToAdd = $("#helpmysoul")[0];
  var gosh = $(svgToAdd).html();

  console.log(gosh);
}, true);

}

function setSky() {
  var currentSky = "sky-gradient-"+new Date().getHours();
  $("#terrain").addClass(currentSky);
  window.setTimeout(function() {
      setSky();
  }, 6000);
}

function pageConfig() {
    setNavbar();
    if (window.location.hash == "" || window.location.hash == "#") {
      window.location.hash = "home";
    } else {
      updateUrl();
    }
}

function hideAllPages() {
  $("#navbarHome").removeClass("selectedNavbar");
  $("#navbarAbout").removeClass("selectedNavbar");
  $("#navbarResume").removeClass("selectedNavbar");
  $("#navbarProjects").removeClass("selectedNavbar");
  $("#navbarContactMe").removeClass("selectedNavbar");
}

function setNavbar() {
  $("#navbarHome").click(function() {
    settingHash("home");
  });
  $("#navbarResume").click(function() {
    settingHash("resume");
  });
  $("#navbarAbout").click(function() {
    settingHash("about");
  });
  $("#navbarProjects").click(function() {
    settingHash("projects");
  });
  $("#navbarContactMe").click(function() {
    settingHash("contact");
  });
}

function updateUrl() {
  var hash = window.location.hash;
  var parse = hash.split("-");
  var time = 3000;
  hideAllPages();
  switch (parse[0]) {

    case "#contact":
      $("#navbarContactMe").addClass("selectedNavbar");
      break;

    case "#projects":
      $("#navbarProjects").addClass("selectedNavbar");
      break;

    case "#resume":
      $("#navbarResume").addClass("selectedNavbar");
      break;

    case "#about":
      $("#navbarAbout").addClass("selectedNavbar");
      break;

    case "#home":
      $("#navbarHome").addClass("selectedNavbar");
      break;
  }
}

function settingHash(section) {
  switch (section) {
    case "contact":
      window.location.hash = "contact";
      break;
    case "projects":
      window.location.hash = "projects";
      break;
    case "resume":
      window.location.hash = "resume";
      break;
    case "about":
      window.location.hash = "about";
      break;
    case "home":
      window.location.hash = "home";
      break;
  }
}
