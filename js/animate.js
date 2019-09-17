var shinyBois;
var smokeyBois;
var heartyBois;

window.onload = function(){
  startDePretty();
}

function startDePretty(){
  console.log("\n");
  console.log("Look at that landscape!");
  startDeHeart();
  startDeSmoke();
}

function startDeHeart(){
  heartyBois = document.getElementById("layer13").childNodes;
  heartyBois.forEach(function(e){
    makeEmShine(e);
  })
}

function startDeSmoke(){
  smokeyBois = document.getElementById("layer12").childNodes;
  smokeyBois.forEach(function(e){
    makeEmShine(e);
  })
}

function makeEmShine(e){
  if(e.tagName == "path"){
    e.setAttribute("opacity",0.1+Math.random()*0.85);
    setTimeout(function(){
      e.setAttribute("opacity",0.1+Math.random()*0.85);
      makeEmShine(e);
    }, 200+getRandomInt(500));
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
