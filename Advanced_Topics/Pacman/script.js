var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,1,2],
    [2,1,2,1,1,1,2,0,1,1,1,1,1,0,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,1,1,2,2,0,2,2,1,1,1,2,1,2,1,2],
    [2,1,2,1,2,2,2,1,2,0,0,0,2,1,2,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,2,0,0,0,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,1,2,2,0,2,2,1,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
    [2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

var playerOne = {
    x: 7,
    y: 3,
    score: 0,
    active: 1
};

var playerTwo = {
    x: 13,
    y: 3,
    score: 0,
    active: 1
}

var ghosts = [
    {x: 9, y: 5}
];

var delta = 0;

function drawWorld(){
    var content = '';
    for(var i=0; i<world.length; i++){
        content += "<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2){
                content += "<div class='wall grid'></div>";
            }
            else if(world[i][j] == 0){
                content += "<div class='empty grid'></div>";
            }
            else if(world[i][j] == 1){
                content += "<div class='dot'></div>";
            }
            else if(world[i][j] == 3){
                content += "<div class='cherry grid'></div>";
            }
        }
        content += "</div>";
    }
    document.getElementById("world").innerHTML = content;
}

function drawPlayerOne(){
    if(playerOne.active == 1){
        document.getElementById("playerOne").style.top = playerOne.y*20+"px";
        document.getElementById("playerOne").style.left = playerOne.x*20+"px";
    }
}

function drawPlayerTwo(){
    if(playerTwo.active == 1){
        document.getElementById("playerTwo").style.top = playerTwo.y*20+"px";
        document.getElementById("playerTwo").style.left = playerTwo.x*20+"px";
    }
}

function drawGhosts(){
    for(var i=0; i<ghosts.length; i++){
        var ghostId = "ghost"+i;
        document.getElementById(ghostId).style.top = ghosts[i].y*20+"px";
        document.getElementById(ghostId).style.left = ghosts[i].x*20+"px";
    }
}

function moveGhosts(i){
    var randomDirection = Math.ceil(Math.random()*4);
    if(randomDirection == 1){
        if(world[ghosts[i].y-1][ghosts[i].x] == 2){
            moveGhosts(i);
        }
        else{
            ghosts[i].y--;
        }
    }
    else if(randomDirection == 2){
        if(world[ghosts[i].y][ghosts[i].x+1] == 2){
            moveGhosts(i);
        }
        else{
            ghosts[i].x++;
        }
    }
    else if(randomDirection == 3){
        if(world[ghosts[i].y+1][ghosts[i].x] == 2){
            moveGhosts(i);
        }
        else{
            ghosts[i].y++;
        }
    }
    else if(randomDirection == 4){
        if(world[ghosts[i].y][ghosts[i].x-1] == 2){
            moveGhosts(i);
        }
        else{
            ghosts[i].x--;
        }
    }
}


function checkCollision(){
    for(var i=0; i< ghosts.length; i++){
        if((ghosts[i].x == playerOne.x)&&(ghosts[i].y == playerOne.y)){
            document.getElementById("playerOne").remove();
            playerOne.active = 0;
            playerOne.x = 0;
            playerOne.y = 0;
        }
        if((ghosts[i].x == playerTwo.x)&&(ghosts[i].y == playerTwo.y)){
            document.getElementById("playerTwo").remove();
            playerTwo.active = 0;
            playerTwo.x = 0;
            playerTwo.y = 0;
        }
    }
}

function updateScore(){
    document.getElementById("scoreOne").innerHTML = playerOne.score;
    document.getElementById("scoreTwo").innerHTML = playerTwo.score;
}


document.onkeydown = function(e){
    // console.log(e.key);
    if(playerOne.active == 1){
        if(e.key == "a"){
            if(world[playerOne.y][playerOne.x-1] != 2){
                playerOne.x--;
            }
            document.getElementById("playerOne").style.transform = "rotate(180deg)";
        }
        if(e.key == "d"){
            if(world[playerOne.y][playerOne.x+1] != 2){
                playerOne.x++;
            }
            document.getElementById("playerOne").style.transform = "rotate(0deg)";
        }
        if(e.key == "w"){
            if(world[playerOne.y-1][playerOne.x] != 2){
                playerOne.y--;
            }
            document.getElementById("playerOne").style.transform = "rotate(270deg)";
        }
        if(e.key == "s"){
            if(world[playerOne.y+1][playerOne.x] != 2){
                playerOne.y++;
            }
            document.getElementById("playerOne").style.transform = "rotate(90deg)";
        }
    }

    if(playerTwo.active == 1){
        if(e.key == "ArrowLeft"){
            if(world[playerTwo.y][playerTwo.x-1] != 2){
                playerTwo.x--;
            }
            document.getElementById("playerTwo").style.transform = "rotate(180deg)";
        }
        if(e.key == "ArrowRight"){
            if(world[playerTwo.y][playerTwo.x+1] != 2){
                playerTwo.x++;
            }
            document.getElementById("playerTwo").style.transform = "rotate(0deg)";
        }
        if(e.key == "ArrowUp"){
            if(world[playerTwo.y-1][playerTwo.x] != 2){
                playerTwo.y--;
            }
            document.getElementById("playerTwo").style.transform = "rotate(270deg)";
        }
        if(e.key == "ArrowDown"){
            if(world[playerTwo.y+1][playerTwo.x] != 2){
                playerTwo.y++;
            }
            document.getElementById("playerTwo").style.transform = "rotate(90deg)";
        }
    }

    
    if(world[playerOne.y][playerOne.x] == 1){
        world[playerOne.y][playerOne.x] = 0;
        playerOne.score += 10;
    }
    if(world[playerOne.y][playerOne.x] == 3){
        world[playerOne.y][playerOne.x] = 0;
        playerOne.score += 50;
    }
    if(world[playerTwo.y][playerTwo.x] == 1){
        world[playerTwo.y][playerTwo.x] = 0;
        playerTwo.score += 10;
    }
    if(world[playerTwo.y][playerTwo.x] == 3){
        world[playerTwo.y][playerTwo.x] = 0;
        playerTwo.score += 50;
    }

    var prizeChance = Math.random()*100;
    if(prizeChance <= 2){
        world[8][10] = 3;
    }

    drawWorld();
    checkCollision();
    for(var i=0; i<ghosts.length; i++){
        moveGhosts(i);
    }
    drawGhosts();
    checkCollision();
    
    drawPlayerOne();
    drawPlayerTwo();

    

    updateScore();
}

drawWorld();
drawPlayerOne();
drawPlayerTwo();
drawGhosts();