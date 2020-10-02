// variables
var wall, car
var speed, weight
//setup function
function setup() {
  createCanvas(800,400);
  wall = createSprite(400, 200, 10, 100);
  car = createSprite(10, 200, 20, 20);
  
  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;
}
// draw
function draw() {
  background(255,255,255);

  if(wall.x - car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
  
    var deformation = (0.5*weight*speed*speed)/22500
    if(deformation > 180) {
      car.shapeColor = "red";
    }
    if (deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    }
    if (deformation < 100) {
      car.shapeColor = "green";
    }
    console.log(deformation)
  }

  drawSprites();
}