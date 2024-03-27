//random walker idea: animal searching for food.
let walkers = [];
let magmin;
let mu = 0.1;
let minF = 50;
let hoogte = 0;
let attractor;

function setup() {
  createCanvas(800 , 600);
  for(i = 0; i < 10; i++){
    walkers[i] = new Walker(random(width), hoogte, random(1, 8),);
  }

  magmin = new MagMin(200, 400);
  attractor = new Attractor(width / 2, height / 2, 5);

}

function draw() {
  background("pink");
  attractor.show();

  let windR = createVector(0.1, 0);
  let windL = createVector(-0.5, 0);

 let gravityDown = createVector(0, 0.2);
  let gravityUp = createVector(0, -0.2);
  let gravityAll = createVector(0, 0.2);



  for (let walker of walkers){
  walker.friction();
  let weightDown = p5.Vector.mult(gravityDown, walker.mass);
  walker.applyForce(weightDown);
  walker.applyForce(windR);

  attractor.attract(walker);

  walker.bounce();
  walker.update();
  walker.show();

  walker.vel.limit(10);
  walker.acc.setMag(0.2);
  }
}
