// let system;
let systems = [];

let g; // gravity
let w; //wind

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  w = createVector(0.09, -0.09);
}

function draw() {
  background(51);

  for(let s of systems){
    s.addParticle();
    s.applyGravity(g);
    // s.applyForce(w);
    s.run();
    if(mouseIsPressed){
      s.applyForce(w);
    }
  }

}

function mouseClicked(){
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);

  systems.push(system);
}