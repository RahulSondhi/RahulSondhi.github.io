$(function() {
  setPage();
  $(document).foundation();
});

function setPage() {
  console.log("Project Huligan Startup!");
  console.log("\n");
  console.log("Loading jsons:");
  fetchContact();
}

function setHash() {
  var hash = window.location.href.split("#")[1];
  $("#quickMenu>ul>li.active").removeClass("active");
  if (hash != "" && hash != null) {
    $("#" + hash + "Menu").addClass("active");

    switch (hash) {
      case "home":
        $('html,body').animate({
          scrollTop: $("#splash").offset().top
        }, 1000);
        $("#splashMenu").addClass("active");
        break;
      case "bio":
        $('html,body').animate({
          scrollTop: $("#intro").offset().top
        }, 1000);
        $("#introMenu").addClass("active");
        break;
      case "edu":
        $('html,body').animate({
          scrollTop: $("#education").offset().top
        }, 1000);
        $("#educationMenu").addClass("active");
        break;
      case "jobs":
        $('html,body').animate({
          scrollTop: $("#resume").offset().top
        }, 1000);
        $("#resumeMenu").addClass("active");
        break;
      case "proj":
        $('html,body').animate({
          scrollTop: $("#projects").offset().top
        }, 1000);
        $("#projectsMenu").addClass("active");
        break;
      case "con":
        $('html,body').animate({
          scrollTop: $("#contact").offset().top
        }, 1000);
        $("#contactMenu").addClass("active");
        break;
      default:
        $('html,body').animate({
          scrollTop: $("#splash").offset().top
        }, 1000);
        $("#splashMenu").addClass("active");
        break;
    }

  }
}

function setPageBG() {
  setSky();
  $('#bottom').append('<object type="image/svg+xml" data="media/landscape2.svg" id="helpmysoul" class="terrain"></object>');
}

function setSky() {
  $('.penguinParachute').append('<object type="image/svg+xml" data="media/penguinParachute.svg"></object>');
  $('.penguinAstro').append('<object type="image/svg+xml" data="media/penguinAtro.svg"></object>');
  $('.cloud').append('<object type="image/svg+xml" data="media/cloud.svg"></object>');
  $('.penguinSchool').append('<object type="image/svg+xml" data="media/penguinWork.svg"></object>');
  $('.penguinWork').append('<object type="image/svg+xml" data="media/penguinWork.svg"></object>');
}

function pageConfig() {
  console.log("Loading Page:");
  setTyped();
  setPageBG();
  console.log("\n");
  console.log("Setting Hashes:");
  setHash();
  $(window).bind('hashchange', function(e) {
    setHash();
  });
}

function setTyped() {

  var type = new Typed("#typed", {
    // Change to edit type effect
    strings: ["Cooking Enthusiast", "Computer Science Student", "Project Manager", "Full Stack Developer", "MBA Graduate Student", "kidOYO Mentor", "OYOClass Intern", "SBUHacks Co-Founder", "Hooligan", "SBCS President", "Unexplainably Energetic", "Fusion of Tech God and Businessman", "Penguin Lover", "Entrepreneur"],
    typeSpeed: 150,
    backDelay: 1500,
    loop: !0,
    resetCallback: function() {
      setTyped()
    }
  });

  console.log("Typed Setup");
}
