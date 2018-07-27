
var shinyBois = document.getElementById("layer9").childNodes;
var shinyBoisTwink = document.getElementById("layer10").childNodes;

// shinyBois.forEach(function(e){
//   makeEmShine(e);
// })

function makeEmShine(e){
  if(e.tagName == "path"){
    var time = 200+getRandomInt(100);

    e.setAttribute("opacity",0.3);
    setTimeout(function () {
      e.setAttribute("opacity",1);
      makeEmShine(e);
    }, time);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
