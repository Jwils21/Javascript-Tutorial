"option strict"

function subtract() {
    var op1ctrl = document.getElementById("op1");
    var op2ctrl = document.getElementById("op2");
    var op1value = op1ctrl.value;
    var op2value = op2ctrl.value;
    var labelCtrl = document.getElementById("answer");
    labelCtrl.textContent = Number(op1value) - Number(op2value);
}

function add() {
    var op1ctrl = document.getElementById("op1");
    var op2ctrl = document.getElementById("op2");
    var op1value = op1ctrl.value;
    var op2value = op2ctrl.value;
    var labelCtrl = document.getElementById("answer");
    labelCtrl.textContent = Number(op1value) + Number(op2value);
}

function clicked() {
    // gets access to the input box
    var inputCtrl = document.getElementById("thetext");
    //gets the value the user typed in
    var inputValue = inputCtrl.value;
    //gets access to the label
    var labelCtrl = document.getElementById("thelabel")
    //puts the value into the label
    labelCtrl.textContent = inputValue;

}