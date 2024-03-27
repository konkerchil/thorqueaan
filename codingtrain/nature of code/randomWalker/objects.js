class MagMin{
    constructor(x, y){
        this.pos = createVector(x, y);
    }

    show(){
    square(this.pos.x, this.pos.y, 15);
    }

    magnetic(walker){    
    walker.acc = p5.Vector.sub(this.pos, walker.pos)
    }
}

class Attractor{
   constructor(x, y, m){
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  show(){
    fill(255);
    fill("brown")
    ellipse(this.pos.x, this.pos.y, this.r);
 }

 attract(walker){
 let force = p5.Vector.sub(this.pos, walker.pos);
 let distanceSq = constrain(force.magSq(), 500, 2500);
 let g = 80;

 let strength = g * (this.mass * walker.mass) / distanceSq;
 force.setMag(strength);
 walker.applyForce(force);
 }

}