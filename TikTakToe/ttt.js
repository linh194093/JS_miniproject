let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let player = ['O', 'X'];

let currentPlayer;
let avaiable = [];

function setup(){
    createCanvas(400, 400); // create a canvas
    frameRate(1);
    currentPlayer = floor(random(player.length));
    for(let j = 0; j < 3; j++){
        for(let i = 0; i < 3; i++){
            avaiable.push([i, j]);
        }
    }
   
}

function nexTurn(){
    let index = floor(random(avaiable.length));
    let spot = avaiable.splice(index, 1)[0];
    board[spot[0]][spot[1]] = player[currentPlayer];
    currentPlayer = (currentPlayer+1) % player.length;
} 

function equals(a, b, c){
    return (a== b && b==c && a==c && a!= '');
}

function checkWinner(){
    let winner = null;


    for(let i = 0; i < 3; i++){
        if(equals(board[i][0], board[i][1], board[i][2])){
            winner = board[i][0];
        }
    }
    for(let i = 0; i < 3; i++){
        if(equals(board[0][i], board[1][i], board[2][i])){
            winner = board[0][i];
        }
    }

    if(equals(board[0][0], board[1][1], board[2][2])){
            winner = board[0][0];
    }
    if(equals(board[0][2], board[1][1], board[2][0])){
        winner = board[2][0];
}
 

    if(winner == null && avaiable.length == 0){
        return 'tie';
    } else{
        return winner;
    }
}



function draw(){
    background(250); // color the background
    let w = width/3;
    let h = height/3;
    line(w, 0, w, height); // line(old x, old y, new x, new y)
    line(w*2, 0, w*2, height);
    line(0, h, width, h);
    line(0, h*2, width, h*2);

    for(let j = 0; j < 3; j++){
        for(let i = 0; i < 3; i++){
            let x = w*j + w/2;
            let y = h*i + w/2;
            let spot = board[i][j];
            textSize(32);
            strokeWeight(4);
            if( spot == player[0]){
                noFill();
                ellipse(x, y, w/2);
            } else if (spot == player[1]){
                let xr = w/4;
                line(x-xr, y-xr, x+xr, y+xr);
                line(x+xr, y-xr, x-xr, y+xr);
            }
        }
    }

    let result = checkWinner();
    if(result != null){
        noLoop();
        console.log(result);
        
    }
    nexTurn();
    
}




