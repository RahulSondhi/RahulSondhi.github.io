var animating = false;

$(function() {
  startEmUp();

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
});

function startEmUp() {
  setNavbar();
  if (window.location.hash == "" || window.location.hash == "#") {
    window.location.hash = "home";
  } else {
    updateUrl();
  }
}

function hideAllPages() {
  //************************************************//
  $("#contentPanelHome").removeClass("hidden");
  $("#contentPanelResume").removeClass("hidden");
  $("#contentPanelAbout").removeClass("hidden");
  $("#contentPanelProjects").removeClass("hidden");
  $("#contentPanelContact").removeClass("hidden");
  $("#navbarHome").removeClass("selectedNavbar");
  $("#navbarAbout").removeClass("selectedNavbar");
  $("#navbarResume").removeClass("selectedNavbar");
  $("#navbarProjects").removeClass("selectedNavbar");
  $("#navbarContactMe").removeClass("selectedNavbar");
  //***********************************************//
  $("#contentPanelHome").addClass("hidden");
  $("#contentPanelResume").addClass("hidden");
  $("#contentPanelAbout").addClass("hidden");
  $("#contentPanelProjects").addClass("hidden");
  $("#contentPanelContact").addClass("hidden");
  //*********************************************//
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
      $("#contentPanelContact").removeClass("hidden");
      //##################Setting Down Section############\\
      $("#downArrowText").html("Home");
      $("#goingDown").off();
      $("#goingDown").click(function() {
        if (animating == false) {
          settingHash("home");
        }
      });
      break;

    case "#projects":
      $("#navbarProjects").addClass("selectedNavbar");
      $("#contentPanelProjects").removeClass("hidden");
      //##################Setting Down Section############\\
      $("#downArrowText").html("Contact");
      $("#goingDown").off();
      $("#goingDown").click(function() {
        if (animating == false) {
          animating = true;
          $("#contentPanelContact").removeClass("hidden");
          $("#contentPanelProjects").addClass("pageTransition");
          setTimeout(function() {
            $("#contentPanelProjects").removeClass("pageTransition");
            settingHash("contact");
            animating = false;
          }, time);
        }
      });
      break;

    case "#resume":
      $("#navbarResume").addClass("selectedNavbar");
      $("#contentPanelResume").removeClass("hidden");
      //##################Setting Down Section############\\
      $("#downArrowText").html("Projects");
      $("#goingDown").off();
      $("#goingDown").click(function() {
        if (animating == false) {
          animating = true;
          $("#contentPanelProjects").removeClass("hidden");
          $("#contentPanelResume").addClass("pageTransition");
          setTimeout(function() {
            $("#contentPanelResume").removeClass("pageTransition");
            settingHash("projects");
            animating = false;
          }, time);
        }
      });
      break;

    case "#about":
      $("#navbarAbout").addClass("selectedNavbar");
      $("#contentPanelAbout").removeClass("hidden");
      //##################Setting Down Section############\\
      $("#downArrowText").html("Resume");
      $("#goingDown").off();
      $("#goingDown").click(function() {
        if (animating == false) {
          animating = true;
          $("#contentPanelResume").removeClass("hidden");
          $("#contentPanelAbout").addClass("pageTransition");
          setTimeout(function() {
            $("#contentPanelAbout").removeClass("pageTransition");
            settingHash("resume");
            animating = false;
          }, time);
        }
      });
      break;

    case "#home":
      $("#navbarHome").addClass("selectedNavbar");
      $("#contentPanelHome").removeClass("hidden");
      //##################Setting Down Section############\\
      $("#downArrowText").html("About Me");
      $("#goingDown").off();
      $("#goingDown").click(function() {
        if (animating == false) {
          animating = true;
          $("#contentPanelAbout").removeClass("hidden");
          $("#contentPanelHome").addClass("pageTransition");
          setTimeout(function() {
            $("#contentPanelHome").removeClass("pageTransition");
            settingHash("about");
            animating = false;
          }, time);
        }
      });
      break;
  }
}

function settingHash(section) {
  console.log(section)
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
