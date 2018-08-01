var animating = false;
var userScroll = false;
var currentState = "";
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

  $(window).on("scroll",function(e){
    scrollDivSet($(window).scrollTop());
  })

  setPageBG();
});

function setPageBG(){
  setSky();
}

function setSky() {
  var currentSky = "sky-gradient-"+new Date().getHours();
  $("#terrain").addClass(currentSky);
  window.setTimeout(function() {
      setSky();
  }, 6000);
}

function pageConfig() {
    console.log("Hey We All Loaded Up Now! Have Fun!");
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

  if(userScroll){
    userScroll = false;
  }else{
    settingScroll(section);
  }
}

function settingHash(section) {
  if(currentState != section){
    switch (section) {
      case "contact":
        window.location.hash = "contact";
        console.log("Here's how you can contact me! Hit me up anytime!");
      break;
      case "projects":
        window.location.hash = "projects";
        console.log("These are all my projects, I've both worked on and or contributed hugely too. Have fun there are links and descriptions!");
      break;
      case "resume":
        window.location.hash = "resume";
        console.log("This is my experiences working so far! As I continue on with life, I'll update it!");
      break;
      case "about":
        window.location.hash = "about";
        console.log("Here we are with the about section. This is where I answer questions, I've been asked a million times. -_- Please dont ask me them again!");
      break;
      case "home":
        window.location.hash = "home";
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
      window.scrollTo(0,offset)
}

function scrollDivSet(scroll){
  userScroll = true;
  console.log(scroll,$(window).height()/2 - $(window).scrollTop())
  if(scroll > $("#contentPanelProjects").offset().top){
    settingHash("projects");
  }else if(scroll > $("#contentPanelResume").offset().top){
    settingHash("resume");
  }else if(scroll > $("#contentPanelAbout").offset().top){
    settingHash("about");
  }else if(scroll > 0){
    settingHash("home");
  }
}
