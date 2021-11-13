function changeName(elementId){
    var element = document.querySelector(elementId);
    if(element.innerText == "Jane Doe"){
        element.innerText = "G.I. Jane";
    }
    else if(element.innerText == "G.I. Jane"){
        element.innerText = "Jane Doe";
    }
}

function accept(element){
    document.querySelector(element).remove();
    document.querySelector("#request-count").innerText--;
    document.querySelector("#connections-count").innerText++;
}

function deny(element){
    document.querySelector(element).remove();
    document.querySelector("#request-count").innerText--;
}