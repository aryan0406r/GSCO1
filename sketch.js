var car, wall, invisibleWall;
var speed, weight;

function setup() {
  createCanvas(1280, 610);

  speed = random(55, 90);
  weight = random(400, 1500)

  car = createSprite(50, 305, 50, 50);

  wall = createSprite(1210, 305, 60, height / 2);
  wall.shapeColor = rgb(80, 80, 80);

  invisibleWall = createSprite(1200, 305, 60, height / 2);
  invisibleWall.visible = false;
}

function draw() {
  background(0); 

  car.velocityX = speed;

  if (invisibleWall.x - car.x < (car.width + invisibleWall.width) / 2) {
    car.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed) / 22500;

    if (deformation < 100) {
      car.shapeColor = rgb(20, 255, 0);
    } else if (deformation > 100 && deformation < 180) {
      car.shapeColor = rgb(230, 230, 0);
    } else if (deformation > 180) {
      car.shapeColor = rgb(255, 0, 0);
    }
  }

  drawSprites();
}
