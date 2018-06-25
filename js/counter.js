"option strict"

//var inputctrl = document.getElementById("value");
var theNumber = 0;
//inputctrl.value = theNumber;

function add() {
    var inputctrl = document.getElementById("value");
    theNumber++;
    inputctrl.value = theNumber;
}

function sub() {
    var inputctrl = document.getElementById("value");
    theNumber--;
    inputctrl.value = theNumber;
}

