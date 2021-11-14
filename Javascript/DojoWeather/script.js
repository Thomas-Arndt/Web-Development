function closeCookie(){
    document.querySelector("#cookie").remove();
}

function unitChange(element){
    if(element.value == "celcius"){
        for(var i=1; i<=8; i++){
            var tempId = "#t"+i;
            var fahrenheit = document.querySelector(tempId).innerText;
            var celcius = Math.round((fahrenheit-32)*(5/9));
            document.querySelector(tempId).innerText = celcius;
        }
    }
    else if(element.value == "fahrenheit"){
        for(var i=1; i<=8; i++){
            var tempId = "#t"+i;
            var celcius = document.querySelector(tempId).innerText;
            var fahrenheit = Math.round((celcius*(9/5))+32);
            document.querySelector(tempId).innerText = fahrenheit;
        }
    }
}