
const vport = document.getElementsByClassName('vport')[0];

function setDefaultViewPortValue() {
    vport.innerHTML = "0";
}

function addToViewPort(value) {
    if (vport.innerHTML == "0" && value != "+" && value != "-" && value != "*" && value != "/" && value != "." && value != "%") {
        vport.innerHTML = value;
    } else {
        vport.innerHTML += value;
    }
}
function backspaceViewPort() {
    if (vport.innerHTML == "") {
        setDefaultViewPortValue();
    } else {
        vport.innerHTML = vport.innerHTML.slice(0, -1);
    }
}

function displayCalculation() {
    vport.innerHTML = eval(vport.innerHTML);
}