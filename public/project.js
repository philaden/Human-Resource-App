// get display button
var displaybutton = document.getElementById("record_display_button");

displaybutton.addEventListener('click', function(){
    var http = new XMLHttpRequest ();
    http.open('GET', "http://127.0.0.1:1337/");
    http.onload = function (){
    var employeeData = JSON.parse(http.responseText);
};
http.send();
});




