let spaceship;
let enemys = [];
let a;

function preload(){
  a = loadModel('nave.obj');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  for (let i=0;i<9;i++){
  enemys[i] = new Enemy();
  }
  spaceship = new ship;
}


function draw() {
  background(220); 
    for(let i=0;i<enemys.length;i++){
  enemys[i].show();
  }
  spaceship.move(mouseX);
  spaceship.show();

}


class Enemy {
  constructor() {
    this.x = random(-400,400);
    //this.y = random(200,500);
  }

  show() {
    stroke(5); 
    strokeWeight(0.5);
    push();
    translate(this.x,-300,0);
    fill(88,0,0);
    rotateX(PI);
    scale(30);
    model(a);
    pop();
  }
  
  
}

class ship {
    constructor() {
        this.x = windowWidth;
        this.y = windowHeight/3;
    }
    
    move(x_value){
        this.x = x_value;
    }
  
  
  show (){
  noStroke();
  push();
  normalMaterial();
  translate(this.x, this.y, 0);
  rotateX(PI);
  cone(30, 70);
  pop();
  }
  
      getX() {
        return this.x;
    }
    
    getY() {
        return this.y;
    }
}
