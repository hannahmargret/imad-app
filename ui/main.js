console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML = "new value";
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
   marginLeft = marginLeft+1;
   img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
  //img.style.marginLeft = "100px";  
};

var counter = 0;
var btn = document.getElementById("counter");

btn.onclick = function(){
  counter = counter + 1;
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
};