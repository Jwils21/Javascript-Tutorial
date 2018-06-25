"option strict"

var theNumber = 0;
var inputctrl = null;

function loaded() {
    //capture the input box
    inputctrl = document.getElementById("value");
    //store number to 0
    display();
    inputctrl.style.textAlign="center";
}

//inputctrl.value = theNumber;

function add() {
    theNumber++;
    display();
}

function sub() {
    theNumber--;
    display();
}

function display(){
    //store the new number value
    inputctrl.value = theNumber;
    //figure out whether the number is even or odd
    var isEven    
    ((inputctrl.value%2)==0) ? isEven = true : isEven = false;

    //color the number accordingly
    if (isEven) {
        inputctrl.style.color = "red";
    } else {
        inputctrl.style.color = "black";
    }
    //bold if divisible by 3
    var isDiv3 = ((inputctrl.value%3)==0);
    inputctrl.style.fontWeight = (isDiv3) ? "bold": "normal";
    //italicize if divisible by 7
    var isDiv7 = ((inputctrl.value%7)==0);
    inputctrl.style.fontStyle = (isDiv7) ? "italic": "normal";

}
