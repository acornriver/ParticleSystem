// let system;
let systems = [];

let t = 0; // 노이즈를 위한 시간 변수
let worldWind;

let g; // gravity
let w; //wind

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  w = createVector(0.09, -0.09);

  worldWind = createVector(0, 0);
}

function draw() {
  background(51);


  // 펄린 노이즈로 바람 생성
  let windStrengthX = map(noise(t), 0, 1, -0.05, 0.05); // x 방향
  let windStrengthY = map(noise(t + 100), 0, 1, -0.05, 0.05); // y 방향
  worldWind.set(windStrengthX, windStrengthY);

  t+= 0.01;

  for(let s of systems){
    s.addParticle();
    s.applyGravity(g);
    s.applyForce(worldWind);
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