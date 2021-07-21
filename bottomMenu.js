   
var newParent = document.getElementById('myID');
 var oldParent = document.getElementById('myID2');
 var myScrollFunc = function () {
 var y = window.scrollY;
 if (y >= 700 && y < 8200) {
 newParent.className = "bottomMenu show-b";
 } else {
 newParent.className = "bottomMenu hide";
 }
 };
 window.addEventListener("scroll", myScrollFunc);       
