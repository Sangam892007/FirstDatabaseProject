var ball,dataBase;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    dataBase = firebase.database();
    dataBase.ref("Ball/Position").on("value",BallPosition)
}
function BallPosition(data){
    ball.x = data.val().x
    ball.y = data.val().y
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dataBase.ref("Ball/Position").update({
        x:ball.x + x,
        y:ball.y + y

    })

}
