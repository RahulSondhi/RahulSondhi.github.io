var shinyBois;
var smokeyBois;
var heartyBois;

window.onload = function(){
  startDePretty();
}

function startDePretty(){
  console.log("\n");
  console.log("Look at that landscape!");
  startDeShine();
  startDeHeart();
  startDeSmoke();
}

function startDeHeart(){
  heartyBois = document.getElementById("layer13").childNodes;
  heartyBois.forEach(function(e){
    makeEmShine(e,0.75);
  })
}

function startDeSmoke(){
  smokeyBois = document.getElementById("layer12").childNodes;
  smokeyBois.forEach(function(e){
    makeEmShine(e,0.75);
  })
}

function startDeShine(){
  shinyBois = document.getElementById("layer9").childNodes;
  shinyBois.forEach(function(e){
    makeEmShine(e,1);
  })
}

function makeEmShine(e,multi){
  if(e.tagName == "path"){
    var time = 200+getRandomInt(1000);
    e.setAttribute("opacity",Math.random()*multi);
    setTimeout(function(){
      e.setAttribute("opacity",Math.random()*multi);
      makeEmShine(e,multi);
    }, time);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
