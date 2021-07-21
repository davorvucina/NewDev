var newParent2 = document.getElementById('timmer2');
var myScrollFunc = function () {
var y = window.scrollY;
if (y >= 0 && y < 34800) {
newParent2.className = "topMenu show-t";
} else {
newParent2.className = "topMenu hide";
}
};
window.addEventListener("scroll", myScrollFunc);    


var example = ['Hurry up! Only 9 pices left', '468 users are currently watching this product', '265 pieces sold in the last 24 hours', 'Hurry up! Only 8 pices left', '442 users are currently watching this product', '266 pieces sold in the last 24 hours', 'Hurry up! Only 8 pices left', '491 users are currently watching this product', '266 pieces sold in the last 24 hours', 'Hurry up! Only 8 pices left', '484 users are currently watching this product', '266 pieces sold in the last 24 hours'];

textSequence(0);
function textSequence(i) {

if (example.length > i) {
setTimeout(function() {
document.getElementById("sequence").innerHTML = example[i];
textSequence(++i);
}, 3000); // 1 second (in milliseconds)

} else if (example.length == i) { // Loop
textSequence(0);
}

}