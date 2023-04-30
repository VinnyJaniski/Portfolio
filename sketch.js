let xBall = 300;
let yBall = 200;
let diameter = 25
let xballspeedy = 5;
let yballspeedy = 5;
let radius = diameter /2;

//RACKET VARIABLES 

let xRect = 5;
let yRect = 200;
let Rectw = 10;
let Recth = 90;
let collided = false;

//ENEMY VARIABLES
let xRectEnemy = 585;
let yRectEnemy = 150;
let yenemyspeedy;


//SCORE BOARD

let mypoints = 0;
let enemypoints = 0;

// SOUNDTRACKS

let raquetada;
let ponto;
let trilha;

function preload(){
  
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
  
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
background(0);
  showball();
  moveBall();
  ballcollision();
  showrect(xRect,yRect);
  rectmovement();
  rectCollision(xRect,yRect);
  showrect(xRectEnemy,yRectEnemy);
  RectEnemyMovement();
  enemycollide();
  scoring();
  scoreboard();
  BallUnstuck();
  


    

}
function showball(){
  circle(xBall, yBall, diameter);
}
function moveBall(){
  xBall += xballspeedy;
    yBall += yballspeedy;
  
}
function ballcollision(){
  
  
  if (xBall + radius > width || xBall - radius < 0) 
  {xballspeedy *= -1;ponto.play();}
  
    if (yBall + radius> height || yBall - radius < 0)
    {yballspeedy *= -1;}
  }
function showrect(x,y){
  
rect(x,y,Rectw,Recth);
  

  
  
  
  
}
function rectmovement (){
  
  
  if (keyIsDown(UP_ARROW)){yRect -= 10;
                        
                         
}
  
  if (keyIsDown(DOWN_ARROW)){yRect += 10;
                            
}
  
  }
function rectCollision (){
  
  if(xBall - radius < xRect + Rectw && yBall - radius < yRect + Recth && yBall + radius > yRect){xballspeedy *= -1;raquetada.play()}
  
  
}
function enemycollide(){
  
if (xBall + radius > xRectEnemy - Rectw && yBall - radius < yRectEnemy + Recth && yBall > yRectEnemy){xballspeedy *= -1;raquetada.play()}
  
}


function RectEnemyMovement(){
  if(keyIsDown(87)){yRectEnemy -= 10}
  if(keyIsDown(83)){yRectEnemy += 10}
}
function scoreboard(){
  stroke(255)
  textAlign(CENTER)
  textSize(32)
  fill(color(255, 140, 0))
  rect(100,2,90,40)
   fill(255)
  text(mypoints,150,26)
   fill(color(255, 140, 0))
  rect(400,2, 90, 40)
  fill(255)
  text(enemypoints, 450, 26)
  
 

  
  
  
  
  
  
}

function scoring (){
  
  
if(xBall - radius < 0){enemypoints += 1}
  if(xBall + radius > width){mypoints += 1}  
  
  
  
  
  
  
  
  
  
}


function BallUnstuck(){
    
  if (xBall - radius < 0){
    xBall = 23
    }
  if(xBall + radius > width){xball = 577}
}

  
