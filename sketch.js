var thief
var lazer1
var lazer2
var barrier


function preload(){
  Bg = loadImage("Background.GIF")
  thief1 = loadImage("thief.png")
  star1 = loadImage("Star.webp")
  guard = loadImage("black.png")
}


function setup() {
  createCanvas(1200,6000);

  thief = createSprite(1100,5880,30,30)
  thief.addImage(thief1)
  thief.scale = 0.1

  lazer1 = createSprite(400,5600,800,5)
  lazer1.velocityY = 2
  lazer1.shapeColor='red'

  lazer2 = createSprite(800,5300,800,5)
  lazer2.velocityY = -2
  lazer2.shapeColor='red'

  barrier = createSprite(100,5100,2400,5)
  barrier.visible = false

  barrier2 = createSprite(100,5700,2400,5)
  barrier2.visible = false

  end1 = createSprite(600,5000,250,50)

  black1 = createSprite(100,4100,30,30)
  black1.addImage(guard)
  black1.velocityX = 6
  black1.scale = 0.3

 

 barrier3 = createSprite(5,4500,5,1000)

 barrier4 = createSprite(1195,4500,5,1000)

 black2 = createSprite(1100,4600,30,30)
 black2.addImage(guard)
 black2.velocityX = -6
 black2.scale = 0.3

 end2 = createSprite(600,3800,250,50)


lazer3 = createSprite(500,3280,5,1000)
lazer3.shapeColor='red'


lazer3.velocityY = 7


lazer4 = createSprite(650,3285,5,1000)
lazer4.shapeColor='red'

lazer5 = createSprite(400,2200,800,5)
lazer5.shapeColor = 'red'
lazer5.velocityX = 7


lazer6 = createSprite(800,3000,800,5)
lazer6.shapeColor = 'red'
lazer6.velocityX = -7


lazer4.velocityY = 7

barrier5 = createSprite(600,3600,1000,5)
barrier6= createSprite(600,2000,1000,5)
barrier7 = createSprite(5,2900,5,2000)
barrier8 = createSprite(1195,2900,5,2000)





  

 


  
}

function draw() {
  background(Bg);  

  



  lazer1.bounceOff(barrier)
  lazer2.bounceOff(barrier)
  lazer2.bounceOff(barrier2)
  lazer1.bounceOff(barrier2)
  black1.bounceOff(barrier3)
  black1.bounceOff(barrier4)
  black2.bounceOff(barrier3)
  black2.bounceOff(barrier4)
  lazer3.bounceOff(barrier5)
  lazer3.bounceOff(barrier6)
  lazer4.bounceOff(barrier5)
  lazer4.bounceOff(barrier6)
  lazer5.bounceOff(barrier7)
  lazer5.bounceOff(barrier8)
  lazer5.bounceOff(barrier7)
  lazer6.bounceOff(barrier8)
  lazer6.bounceOff(barrier7)

 

  if(end1.isTouching(thief)){
    noStroke();
    textSize(35)
    fill("red")
    text("Congradulations on crossing the first level.That was easy wasn't it." , 100, 4700)
    text("Best of luck for the rest of the rounds",300,4760)
  }

  if(keyDown("w")){
    thief.y = thief.y-5
  
  }

  if(keyDown("s")){
    thief.y = thief.y+5
  }

  if(keyDown("a")){
    thief.x = thief.x-5
  }

  
  if(keyDown("d")){
    thief.x = thief.x+5
  }

 






  drawSprites();

  noStroke();
  textSize(35)
  fill("white")
  text("Start" , 600, 5940)
}