var num1 = 0;
var num2 = 0;
var operator = null;
var content = 0;
var decimal = false;

function press(value){
    if(content != ""){
        content = document.querySelector("#display").innerText;
    }
    if(content == "0"){
        content = "";
    }
    if(content.length <= 11){
        if(value == "." && decimal == false){
            content += value
            decimal = true;
        }
        else if(value != "."){
            content += value;
        }
    }
    document.querySelector("#display").innerText = content;
}

function setOperator(sign){
    num1 = parseFloat(document.querySelector("#display").innerText);
    operator = sign;
    decimal = false;
    content = "";
}

function calculate(){
    num2 = parseFloat(document.querySelector("#display").innerText);
    if(operator == "/"){
        var result = num1/num2;
    }
    else if(operator == "*"){
        var result = num1*num2;
    }
    else if(operator == "-"){
        var result = num1-num2;
    }
    else if(operator == "+"){
        var result = num1+num2;
    }
    else{
        var result = "error";
    }

    if(result.toString().length>12){
        console.log("test");
        result = result.toExponential(3);
    }
    document.querySelector("#display").innerText = result;
    num1 = result;
    
}

function clr(){
    document.querySelector("#display").innerText = "0";
    num1 = 0;
    num2 = 0;
}

function roundTo(number, place){
    var multiplier = Math.pow(10, place);
    return Math.round(number*multiplier)/multiplier;
}