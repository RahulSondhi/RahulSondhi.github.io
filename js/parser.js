$(function() {
  setPage();
});

function setPage() {
  console.log("Welcome to my console!");
  console.log("Loading jsons:");
  fetchContact();
}

function fetchContact(){

  $.ajax({
    url: "https://rahulsondhi.github.io/json/contact.json",
    error: function(jqXHR, textStatus, errorThrown){  console.log(jqXHR, textStatus, errorThrown);}
  }).done(function(data) {
    console.log("Contacts Loaded!");
    setContact(data)
    fetchProjects();
  });

}

function setContact(contacts){
  var emails = contacts.emails;
  var sites = contacts.sites;
  var socialMedia = contacts.socialMedia;

  for(var i = 0; i < emails.length;i++){
    var email = $("<div></div>");
    email.attr("class","titleContactInfo");
    email.html(emails[i]);

    $("#emails").append(email);
  }

  for(var i = 0; i < sites.length;i++){
    var site = $("<a></a>");
    site.attr("class","titleSiteInfo");
    site.attr("onclick","{ window.open('"+sites[i].link+"','_blank');}");
    site.html(sites[i].title);

    $("#sites").append(site);
  }

  for(var i = 0; i < socialMedia.length;i++){
    var socialLogo = $("<div></div>");
    socialLogo.attr("class","socialLogo");

    var socialLogoImg = $("<img></img>");
    socialLogoImg.attr("src",socialMedia[i].img);
    socialLogoImg.attr("class","socialLogoPic");
    socialLogoImg.attr("onclick","{window.open('"+socialMedia[i].link+"','_blank');}");

    socialLogo.append(socialLogoImg);
    $("#contactLeft").append(socialLogo);
  }
  $("#profileGallery").append($("#contactLeft").html());

}

function fetchProjects() {

  $.ajax({
    url: "https://rahulsondhi.github.io/json/projects.json"
  }).done(function(data) {
    console.log("Projects Loaded!");
    console.log(data);
    fetchQuestions();
  });

}

function fetchQuestions() {

  $.ajax({
    url: "https://rahulsondhi.github.io/json/questions.json"
  }).done(function(data) {
    console.log("Questions Loaded!");
    setQuestion(data)
    fetchResume();
  });

}

function setQuestion(questions){
  var questionsToAdd = questions.questions;
  for(var i=0; i < 6; i++){
    var questionDiv = $("<div></div>");
    questionDiv.attr("class","question");
    var questionDivText = $("<div></div>");
    questionDivText.attr("class","questionText");
    questionDivText.html(questionsToAdd[i].questionText);
    var questionDivAnswer = $("<div></div>");
    questionDivAnswer.attr("class","questionAnswer");
    questionDivAnswer.html(questionsToAdd[i].questionAnswer);
    questionDiv.append(questionDivText);
    questionDiv.append("<hr>");
    questionDiv.append(questionDivAnswer);
    if(i<3){
      $("#aboutMeLeft").append(questionDiv);
    }else{
      $("#aboutMeRight").append(questionDiv);
    }
  }
}

function fetchResume() {

  $.ajax({
    url: "https://rahulsondhi.github.io/json/resume.json"
  }).done(function(data) {
    console.log("Resume Loaded!");
    console.log(data);
    pageConfig();
  });

}
