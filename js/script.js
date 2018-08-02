var compScroll = false;
var userScroll = false;
var currentState = "";
var lastclick = 0;

$(function() {

  $("#stage").on("click", function() {
    if (lastclick + 15 < Math.floor(Date.now() / 1000)) {
      lastclick = Math.floor(Date.now() / 1000);
      console.log("\n");
      console.log("Seems the lights are a bit weird...");
      $('#helpmysoul').html('<object type="image/svg+xml" data="media/landscape.svg" id="helpmysoul" class="terrain"></object>');
    }
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

  $(window).on("unload", function(e) {
    updateUrl();
  });

  $(window).on('hashchange', function() {
    updateUrl();
  });

  $(window).on("scroll", function(e) {
    if (!compScroll) {
      scrollDivSet($(window).scrollTop());
    } else {
      compScroll = false
    }
  });
});

function setPageBG() {
  setSky();
  $('#terrain').html('<object type="image/svg+xml" data="media/landscape.svg" id="helpmysoul" class="terrain"></object>');
}

function setSky() {
  var currentSky = "sky-gradient-" + new Date().getHours();
  $("#terrain").addClass(currentSky);
  window.setTimeout(function() {
    setSky();
  }, 6000);
}

function pageConfig() {
  console.log("\n");
  console.log("Hey We All Loaded Up Now! Have Fun!");
  setNavbar();
  setTyped();
  if (window.location.hash == "" || window.location.hash == "#") {
    window.location.hash = "home";
  } else {
    updateUrl();
  }
  setPageBG();
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
  var section = parse[0].substring(1);
  switch (section) {

    case "contact":
      $("#navbarContactMe").addClass("selectedNavbar");
      break;

    case "projects":
      $("#navbarProjects").addClass("selectedNavbar");
      break;

    case "resume":
      $("#navbarResume").addClass("selectedNavbar");
      break;

    case "about":
      $("#navbarAbout").addClass("selectedNavbar");
      break;

    case "home":
      $("#navbarHome").addClass("selectedNavbar");
      break;
  }

  if (userScroll) {
    userScroll = false;
  } else {
    settingScroll(section);
  }
}

function settingHash(section) {
  if (currentState != section) {
    switch (section) {
      case "contact":
        window.location.hash = "contact";
        console.log("\n");
        console.log("Here's how you can contact me! Hit me up anytime!");
        break;
      case "projects":
        window.location.hash = "projects";
        console.log("\n");
        console.log("These are all my projects, I've both worked on and or contributed hugely too. Have fun there are links and descriptions!");
        break;
      case "resume":
        window.location.hash = "resume";
        console.log("\n");
        console.log("This is my experiences working so far! As I continue on with life, I'll update it!");
        break;
      case "about":
        window.location.hash = "about";
        console.log("\n");
        console.log("Here we are with the about section. This is where I answer questions, I've been asked a million times. -_- Please dont ask me them again!");
        break;
      case "home":
        window.location.hash = "home";
        console.log("\n");
        console.log("So this is the splash page with a little TLDR of me!");
        break;
    }
    currentState = section;
  }
}

function settingScroll(section) {
  var offset = 0;
  switch (section) {
    case "contact":
      offset = $("#contentPanelContact").offset().top;
      break;
    case "projects":
      offset = $("#contentPanelProjects").offset().top;
      break;
    case "resume":
      offset = $("#contentPanelResume").offset().top;
      break;
    case "about":
      offset = $("#contentPanelAbout").offset().top;
      break;
    case "home":
      offset = $("#contentPanelHome").offset().top;
      break;
  }

  compScroll = true;
  window.scrollTo(0, offset - 100);
}

function scrollDivSet(scroll) {
  userScroll = true;
  scroll += 250;
  // console.log(scroll,$(window).scrollTop())

  if (scroll <= $("#contentPanelAbout").offset().top) {
    settingHash("home");

  } else if (scroll <= $("#contentPanelResume").offset().top) {
    // console.log("About:",$("#contentPanelAbout").offset().top)
    settingHash("about");

  } else if (scroll <= $("#contentPanelProjects").offset().top) {
    // console.log("Resume:",$("#contentPanelResume").offset().top)
    settingHash("resume");

  } else if (scroll <= $("#contentPanelContact").offset().top - $("#contentPanelContact").height() * 0.825) {
    // console.log("Projects:",$("#contentPanelProjects").offset().top)
    settingHash("projects");
  } else {
    // console.log("Contact:",$("#contentPanelContact").offset().top)
    settingHash("contact");
  }
}

function setTyped(){

  var type = new Typed("#typed",{
    // Change to edit type effect
    strings: ["Full Stack Developer", "Selfie Master", "kidOYO Mentor","Living Meme","SBUHacks Co-Founder", "Hooligan", "SBCS Vice President", "24/7 Enthusiasm", "Undergrad Student", "Penguin Lover","Entrepreneur"],
    typeSpeed: 90,
    backDelay: 1500,
    loop: !0,
    resetCallback: function() {
      setTyped()
    }
  });

}
