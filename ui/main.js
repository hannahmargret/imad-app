//var counter = 0;
var btn = document.getElementById("counter");

btn.onclick = function(){
    
   var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        // Process the server response here.
        if (request.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
            if (request.status === 200) {
                // Perfect!
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            } else {
                // There was a problem with the request.
                // For example, the response may have a 404 (Not Found)
                // or 500 (Internal Server Error) response code.
            }
        } else {
            // Not ready yet.
    }
    
    request.open('GET', 'http://http://hannahmargret.imad.hasura-app.io/counter', true);
    request.send();
};
  //counter = counter + 1;
  //var span = document.getElementById("count");
  //span.innerHTML = counter.toString();
};