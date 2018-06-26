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
    url: "https://api.github.com/users/RahulSondhi"
  }).done(function(user) {
    console.log("Github User Loaded!");
    $.ajax({
      url: "https://api.github.com/users/RahulSondhi/repos"
    }).done(function(data) {
      console.log("Github Projects Loaded!");
      setProjects(data,user);
      fetchQuestions();
    });
  });

}

function setProjects(projects,user){

  var gitContainer = $("<div></div>");
  gitContainer.attr("id","projectGit");

  var userWindow = $("<div></div>");
  userWindow.attr("id","userContainer");

  var userWindowImg = $("<img></img>");
  userWindowImg.attr("src",user.avatar_url);
  userWindowImg.attr("class","gitIcon");

  var userWindowTitle = $("<div></div>");
  userWindowTitle.attr("class","gitTitle");
  userWindowTitle.html(user.login);

  var userWindowBio = $("<div></div>");
  userWindowBio.attr("class","gitBio");
  userWindowBio.html(user.bio);

  userWindow.append(userWindowImg);
  userWindow.append(userWindowTitle);
  userWindow.append(userWindowBio);

  $("#contentPanelProjects").append(userWindow);
  $("#contentPanelProjects").append(gitContainer);

  for(var i=0; i < projects.length; i++){
    var projectDiv = $("<div></div>");
    projectDiv.attr("class","projectContainer");
    projectDiv.attr("onclick","{window.open('"+projects[i].html_url+"','_blank');}")

    var projectDivTitle = $("<div></div>");
    projectDivTitle.attr("class","projectTitle");
    projectDivTitle.html(projects[i].name);

    var projectDivDescription = $("<div></div>");
    projectDivDescription.attr("class","projectDescription");
    projectDivDescription.html(projects[i].description);

    var projectDivLanguage = $("<div></div>");
    projectDivLanguage.attr("class","projectLanguage");
    projectDivLanguage.html(projects[i].language);

    projectDiv.append(projectDivTitle);
    projectDiv.append(projectDivDescription);
    projectDiv.append(projectDivLanguage);

    $("#projectGit").append(projectDiv);
  }
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
    setResume(data);
    pageConfig();
  });

}

function setResume(data){
  console.log(data);
  var jobs = data.jobs;
  var schools = data.education;

  var educationHolder = $("<div></div>");
  educationHolder.attr("class","educationHolder");


  var jobHolder = $("<div></div>");
  jobHolder.attr("class","jobHolder");

  for(var i = 0;i<jobs.length;i++){
    var experience = $("<div></div>");
    experience.attr("class","jobContainer");

    var experienceTitle = $("<div></div>");
    experienceTitle.attr("class","jobTitle");
    experienceTitle.html(jobs[i].title);

    var experienceCompany = $("<div></div>");
    experienceCompany.attr("class","jobCompany");
    experienceCompany.html(jobs[i].company);

    var experiencePhoto = $("<img></img>");
    experiencePhoto.attr("class","jobPhoto");
    experiencePhoto.attr("src",jobs[i].img);

    var experienceDate = $("<div></div>");
    experienceDate.attr("class","jobDate");
    experienceDate.html(jobs[i].startDate + " - " + jobs[i].endDate);

    var experienceDescription = $("<div></div>");
    experienceDescription.attr("class","jobDescription");
    for( var x = 0; x < jobs[i].description.length; x++){
      experienceDescription.append("- "+jobs[i].description[x]+"<br>");
    }

    var experienceTop = $("<div></div>");
    experienceTop.attr("class","jobTop");

    var experienceTopLeft = $("<div></div>");
    experienceTopLeft.attr("class","jobTopLeft");

    experienceTopLeft.append(experienceTitle);
    experienceTopLeft.append(experienceCompany);
    experienceTopLeft.append(experienceDate);

    experienceTop.append(experienceTopLeft);
    experienceTop.append(experiencePhoto);

    experience.append(experienceTop);
    experience.append(experienceDescription);

    jobHolder.append(experience);
  }

  ////////////////////////////////////////////////////////////////////

  for(var i = 0;i<schools.length;i++){
    var experience = $("<div></div>");
    experience.attr("class","schoolContainer");

    var experienceTitle = $("<div></div>");
    experienceTitle.attr("class","schoolSchool");
    experienceTitle.html(schools[i].school);

    var experienceMinor = $("<div></div>");
    experienceMinor.attr("class","schoolMinor");
    experienceMinor.html(schools[i].minor);

    var experienceCompany = $("<div></div>");
    experienceCompany.attr("class","schoolDegree");
    experienceCompany.html(schools[i].degree);

    var experiencePhoto = $("<img></img>");
    experiencePhoto.attr("class","schoolPhoto");
    experiencePhoto.attr("src",schools[i].img);

    var experienceDate = $("<div></div>");
    experienceDate.attr("class","schoolDate");
    experienceDate.html(schools[i].startDate + " - " + schools[i].endDate);

    var experienceDescription = $("<div></div>");
    experienceDescription.attr("class","schoolActivities");
    experienceDescription.append("<u>Activities</u><br>");

    for( var x = 0; x < schools[i].activities.length; x++){
      experienceDescription.append("- "+schools[i].activities[x]+"<br>");
    }

    var experienceTop = $("<div></div>");
    experienceTop.attr("class","schoolTop");

    var experienceTopLeft = $("<div></div>");
    experienceTopLeft.attr("class","schoolTopLeft");

    experienceTopLeft.append(experienceTitle);
    experienceTopLeft.append(experienceCompany);
    experienceTopLeft.append(experienceMinor);
    experienceTopLeft.append(experienceDate);

    experienceTop.append(experienceTopLeft);
    experienceTop.append(experiencePhoto);

    experience.append(experienceTop);
    experience.append(experienceDescription);

    educationHolder.append(experience);
  }

  $("#contentPanelResume").append(educationHolder);
  $("#contentPanelResume").append(jobHolder);
}
