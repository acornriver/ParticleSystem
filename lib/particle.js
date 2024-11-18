// A simple Particle class

class Particle {
  constructor(position) {
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(random(-1, 1), random(-1, 0));
      this.position = position.copy();
      this.lifespan = 255;
      this.w = 2;
  }

  run() {
      this.update();
      this.display();
  }

  applyForce(force){
    this.acceleration.add(force);
  }

  bounceFloor(){
        //아래쪽 경계를 넘으면 위로 튕기게 함
        if ((this.position.y+this.w/2) > height) {
            this.position.y = height-this.w/2;
            this.velocity.y = this.velocity.y * -1;
          }
  }


  update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;

      this.acceleration.set(0,0);

      this.bounceFloor();
  }

  display() {
      stroke(200, this.lifespan);
      strokeWeight(2);
      fill(127, this.lifespan);
      ellipse(this.position.x, this.position.y, this.w + this.lifespan /60 , this.w + this.lifespan/60);
  }

  isDead() {
      return this.lifespan < 0;
  }
}











// let Particle = function(position) {

//   };

//   Particle.prototype.run = function() {

//   };

//   // Method to update position
//   Particle.prototype.update = function(){

//   };

//   // Method to display
//   Particle.prototype.display = function() {

//   };

//   // Is the particle still useful?
//   Particle.prototype.isDead = function(){

//   };