
var theDojo = [];


var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
    }
    return result;
}

function howMany(i, j, element) {
    console.log({i, j});
    if(theDojo[i][j]>0){
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    }
    var sum = 0;
    for(var k=i-1; k <= i+1; k++){
        for(var l=j-1; l <= j+1; l++){
            if(theDojo[k] == undefined || theDojo[k][l] == undefined){
                sum+=0;
            }
            else if(k==i && l==j){
                sum+=0;
            }
            else{
                sum+=theDojo[k][l];
            }
        }
    }
    element.innerText = sum;
}




function buildDojo(sideLength, ninjas){
    for(var i=0; i<sideLength; i++){
        theDojo.push([]);
        for(var j=0; j<sideLength; j++){
            theDojo[i].push(0);
        }
    }
    for(var k=0; k<ninjas; k++){
        randomNinja(sideLength);
    }
}

function randomNinja(sideLength){
    var randomX = Math.floor(Math.random()*sideLength);
    var randomY = Math.floor(Math.random()*sideLength);
    console.log("x "+randomX);
    console.log("y "+randomY);
    if(theDojo[randomY][randomX] == 0){
        theDojo[randomY][randomX] = 1;
    }
    else{
        randomNinja();
    }
}
 
buildDojo(10, 10);
console.log(theDojo);

dojoDiv.innerHTML = render(theDojo);  

