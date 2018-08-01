var shinyBois = document.getElementById("layer9").childNodes;
var shinyBoisTwink = document.getElementById("layer10").childNodes;
var svg = document.getElementById("svg1320");

startDeShine();

function startDeShine(){
  console.log("\n");
  console.log("Lets Turn Those Lights On!");
  shinyBois.forEach(function(e){
    makeEmShine(e);
  })
}

function makeEmShine(e){
  if(e.tagName == "path"){
    var time = 200+getRandomInt(1000);
    e.setAttribute("opacity",Math.random());
    setTimeout(function(){
      e.setAttribute("opacity",Math.random());
      makeEmShine(e);
    }, time);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
