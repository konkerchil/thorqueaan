class Walker{
  constructor(x, y, m, g){
    this.pos = createVector(x, y);
   this.vel = createVector(0, 0);
    this.vel.mult(random(3));
    this.col = 200;
    this.inc = 0.1;
    this.acc = createVector(0,0);
    this.mass = m;
    //r stands for radius
    this.r = sqrt(this.mass) * 10;

    this.angle = 0;
    this.angleV = 0.1;
    this.angleA = 0.01;
  }

  applyForce(force){
      let f = p5.Vector.div(force, this.mass);
      this.acc.add(f);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.angleA = this.acc.x / 40.0;

    this.angleV += this.angleA;
    this.angle += this.angleV;

    this.acc.set(0, 0);
  } 

  gravWalker(location){
    this.acc = p5.Vector.sub(location, this.pos)
  }

  show(){
    stroke(255);
    strokeWeight(2 );
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(0)
    line(0, 0, this.r, 0);
    stroke(2)
    fill("brown");
    ellipse(0, 0, this.r * 2 );
    pop();
  }

  walkerCheck(){
    //if walker goes of screen
 if (this.pos.x > width){
    this.pos.x = 0;
  } if(this.pos.x < 0){
    this.pos.x = width;
  } if(this.pos.y > height){
    this.pos.y = 0;
  } if(this.pos.y < 0){
    this.pos.y = height;
  } 
}

  bounce(){
  //checks for bounce 
    if (this.pos.x + this.r > width) {
      this.pos.x  = width - this.r;
      this.vel.x *= -1;
    } if (this.pos.x - this.r < 0) {
      this.pos.x =  this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y + this.r >height) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } if (this.pos.y - this.r < 0) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

  perlinAcc(){
    var yoff = 0;
    for(var y = 0; y < height; y++){
     var xoff = 0;
      for(var x = 0; x < width; x++){
        var index = (x + y * width) * 4;
        var r = noise(xoff, yoff) * this.col;
        xoff += this.inc;
      }
      yoff += this.inc;
      }

      //this.acc = createVector(index);
    this.acc.setMag(0.1);
  }


  friction(){
  let diff = height - (this.pos.y + this.r);
  if(magmin.pos.x + minF > this.pos.x && magmin.pos.x - minF < this.pos.x &&
    magmin.pos.y + minF > this.pos.y && magmin.pos.y - minF < this.pos.y ){
  //  console.log('friction');
  let friction = this.vel.copy();
  friction.normalize();
  friction.mult(-1);

  let normal = this.mass;
  friction.setMag(mu * normal);
  this.applyForce(friction);
    }
  }

  drag(){
    //direction of drag 
    //Fd = -1/2p^2 AC dv^
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);
    
    let co = this.r * 2 * 0.005;
    let speedSq = this.vel.magSq();
    drag.setMag(co * speedSq);

    this.applyForce(drag);
  }

}