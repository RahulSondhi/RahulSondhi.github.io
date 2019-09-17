var baseUrl = window.location.href.split("#")[0];

function fetchContact() {

  $.ajax({
    url: "" + baseUrl + "json/contact.json",
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    }
  }).done(function(data) {
    console.log("Contacts Loaded!");
    setContact(data)
    fetchQuestions();
  });

}


function setContact(contacts) {
  var socialMedia = contacts.socialMedia;

  var leftBlocker = $("<div></div>");
  leftBlocker.attr("class", "medium-2 large-4 cell center");
  $("#contact").append(leftBlocker);

  for (var i = 0; i < socialMedia.length; i++) {

    var socialLogoImg = $("<img></img>");
    socialLogoImg.attr("src", socialMedia[i].img);
    socialLogoImg.attr("class", "socialLogoPic medium-2 large-1 cell center");
    socialLogoImg.attr("onclick", "{window.open('" + socialMedia[i].link + "','_blank');}");

    $("#contact").append(socialLogoImg);
  }

}

function fetchQuestions() {

  $.ajax({
    url: "" + baseUrl + "json/questions.json"
  }).done(function(data) {
    console.log("Questions Loaded!");
    setQuestion(data)
    fetchResume();
  });

}

function setQuestion(questions) {

  var bioDiv = $("<div></div>");
  bioDiv.attr("class", "align-self-middle medium-6 large-8 cell center bio");
  bioDiv.html(questions.bio);
  $("#intro").append(bioDiv);

  var questionsToAdd = questions.questions;
  for (var i = 0; i < 6; i++) {
    var questionDiv = $("<div></div>");
    questionDiv.attr("class", "medium-6 large-4 cell center question");
    var questionDivText = $("<div></div>");
    questionDivText.attr("class", "questionText");
    questionDivText.html(questionsToAdd[i].questionText);
    var questionDivAnswer = $("<div></div>");
    questionDivAnswer.attr("class", "questionAnswer");
    questionDivAnswer.html(questionsToAdd[i].questionAnswer);
    questionDiv.append(questionDivText);
    questionDiv.append("<hr>");
    questionDiv.append(questionDivAnswer);
    $("#question").append(questionDiv);
  }
}

function fetchResume() {

  $.ajax({
    url: "" + baseUrl + "json/resume.json"
  }).done(function(data) {
    console.log("Resume Loaded!");
    setResume(data);
    fetchProjects();
  });

}

function setResume(data) {
  var jobs = data.jobs;
  var schools = data.education;

  setJobs(jobs);
  setSchools(schools);

}

function setSchools(schools) {
  for (var i = 0; i < schools.length; i++) {
    var school = $("<div></div>");
    school.attr("class", "school medium-12 large-12 cell grid-x grid-padding-x grid-margin-y");

    var schoolTitle = $("<span></span>");
    schoolTitle.attr("class", "schoolSchool");
    schoolTitle.html(schools[i].school);

    var schoolMinor = $("<span></span>");
    schoolMinor.attr("class", "schoolMinor");
    schoolMinor.html(schools[i].minor);

    var schoolDegree = $("<span></span>");
    schoolDegree.attr("class", "schoolDegree");
    schoolDegree.html(schools[i].degree);

    var schoolDate = $("<span></span>");
    schoolDate.attr("class", "schoolDate");
    schoolDate.html(schools[i].startDate + " - " + schools[i].endDate);

    var schoolDescription = $("<div></div>");
    schoolDescription.attr("class", "schoolDescription medium-12 large-12 cell");
    if (schoolMinor.html() == "") {
      schoolDescription.html(schoolTitle.html() + "<br>" + schoolDegree.html() + "<br>" + schoolDate.html() + "<br>");
    } else {
      schoolDescription.html(schoolTitle.html() + "<br>" + schoolDegree.html() + "<br>" + schoolMinor.html() + "<br>" + schoolDate.html() + "<br>");
    }

    var schoolActivities = $("<div></div>");
    schoolActivities.attr("class", "schoolActivities medium-12 large-12 cell");
    schoolActivities.append("<u>Activities</u><br>");

    for (var x = 0; x < schools[i].activities.length; x++) {
      schoolActivities.append("- " + schools[i].activities[x] + "<br>");
    }

    var schoolPhoto = $("<img></img>");
    schoolPhoto.attr("class", "schoolPhoto medium-3 large-3 cell");
    schoolPhoto.attr("src", schools[i].img);

    var schoolTopLeft = $("<div></div>");
    schoolTopLeft.attr("class", "medium-9 large-9 cell grid-x grid-padding-x align-middle");

    schoolTopLeft.append(schoolDescription);
    schoolTopLeft.append(schoolActivities);

    school.append(schoolPhoto);
    school.append(schoolTopLeft);


    $("#education").append(school);
  }
}

function setJobs(jobs) {
  for (var i = 0; i < jobs.length; i++) {
    var experience = $("<div></div>");
    experience.attr("class", "job medium-12 large-12 cell grid-x grid-padding-x");

    var experienceTitle = $("<div></div>");
    experienceTitle.attr("class", "jobTitle");
    experienceTitle.html(jobs[i].title);

    var experienceCompany = $("<div></div>");
    experienceCompany.attr("class", "jobCompany");
    experienceCompany.html(jobs[i].company);

    var experienceDate = $("<div></div>");
    experienceDate.attr("class", "jobDate");
    experienceDate.html(jobs[i].startDate + " - " + jobs[i].endDate);

    var experienceDescription = $("<div></div>");
    experienceDescription.attr("class", "jobDescription medium-12 large-12 cell");
    experienceDescription.html(experienceTitle.html() + "<br>" + experienceCompany.html() + "<br>" + experienceDate.html());


    var experienceActivities = $("<div></div>");
    experienceActivities.attr("class", "jobActivities medium-12 large-12 cell");
    experienceActivities.append("<u>Description</u><br>");

    for (var x = 0; x < jobs[i].description.length; x++) {
      experienceActivities.append("- " + jobs[i].description[x] + "<br>");
    }

    var experiencePhoto = $("<img></img>");
    experiencePhoto.attr("class", "jobPhoto medium-3 large-3 cell");
    experiencePhoto.attr("src", jobs[i].img);

    var experienceTopLeft = $("<div></div>");
    experienceTopLeft.attr("class", "medium-9 large-9 cell grid-x grid-padding-x align-middle");

    experienceTopLeft.append(experienceDescription);
    experienceTopLeft.append(experienceActivities);

    experience.append(experiencePhoto);
    experience.append(experienceTopLeft);

    $("#resume").append(experience);
  }
}

function fetchProjects() {

  $.ajax({
    url: "" + baseUrl + "json/projects.json"
  }).done(function(projects) {
    console.log("Github Projects Loaded!");
    setProjects(projects);
    pageConfig();
  });

}


function setProjects(projects) {


  var userWindow = $("<div></div>");
  userWindow.attr("id", "userContainer");
  userWindow.attr("class", "medium-12 large-12 cell center grid-x grid-padding-x align-middle");

  var userWindowImg = $("<img></img>");
  userWindowImg.attr("src", "media/digiHul.png");
  userWindowImg.attr("class", "medium-4 medium-offset-4 large-4 large-offset-4 cell gitIcon");

  var userWindowBuffer = $("<div></div>");
  userWindowBuffer.attr("class", "medium-3 large-4 cell");

  var userWindowTitle = $("<div></div>");
  userWindowTitle.attr("class", "medium-4 medium-offset-4 large-4 large-offset-4 cell gitTitle");
  userWindowTitle.html("RahulSondhi");

  userWindow.append(userWindowImg);
  userWindow.append(userWindowBuffer);
  userWindow.append(userWindowTitle);

  $("#projects").append(userWindow);

  for (var i = 0; i < projects.length; i++) {
    var projectDiv = $("<div></div>");
    projectDiv.attr("class", "projectContainer medium-6 large-4 cell");
    projectDiv.attr("onclick", "{window.open('" + projects[i].html_url + "','_blank');}")

    var projectDivTitle = $("<div></div>");
    projectDivTitle.attr("class", "projectTitle");
    projectDivTitle.html(projects[i].name);

    var projectDivDescription = $("<div></div>");
    projectDivDescription.attr("class", "projectDescription");
    if (projects[i].description != null) {
      projectDivDescription.html(projects[i].description);
    } else {
      projectDivDescription.html("No Description Available");
    }
    var projectDivLanguage = $("<div></div>");
    projectDivLanguage.attr("class", "projectLanguage");
    if (projects[i].language != null) {
      projectDivLanguage.html("<u>Language(s):</u> " + projects[i].language);
    } else {
      projectDivLanguage.html("<u>Language(s):</u> Unavailable");
    }
    projectDiv.append(projectDivTitle);
    projectDiv.append(projectDivLanguage);
    projectDiv.append(projectDivDescription);

    $("#projects").append(projectDiv);
  }
}
