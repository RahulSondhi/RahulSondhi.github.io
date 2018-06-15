function setPage() {
  if (fetchContact()) {
    if (fetchProjects()) {
      if (fetchQuestions()) {
        return fetchResume();
      }
    }
  }
  return false;
}

function fetchContact() {

  $.ajax({
    dataType: "json",
    url: "json/contact.json"
  }).done(function(data) {
    console.log(data);
    return true
  });

}

function fetchProjects() {

  $.ajax({
    dataType: "json",
    url: "json/projects.json"
  }).done(function(data) {
    console.log(data);
    return true
  });

}

function fetchQuestions() {

  $.ajax({
    dataType: "json",
    url: "json/questions.json"
  }).done(function(data) {
    var questions = JSON.parse(data);
    return setQuestion(questions);
  });

}

function setQuestion(questions){
  var questionsToAdd = questions.questions;
  for(var i=0; i < 6; i++){
    var questionDiv = $("<div></div>");
    questionDiv.attr("class","question");
    var questionDivText = $("<div></div>");
    questionDivText.attr("class","questionTest");
    questionDivText.html(questionsToAdd[i].questionText);
    var questionDivAnswer = $("<div></div>");
    questionDivAnswer.attr("class","questionAnswer");
    questionDivAnswer.html(questionsToAdd[i].questionAnswer);
    questionDiv.append(questionDivText);
    questionDiv.append("<hr>");
    questionDiv.append(questionDivAnswer);
    if(i<3){
      $("aboutMeLeft").append(questionDiv);
    }else{
      $("aboutMeRight").append(questionDiv);
    }
  }
}

function fetchResume() {

  $.ajax({
    dataType: "json",
    url: "json/resume.json"
  }).done(function(data) {
    console.log(data);
    return true
  });

}
