

let spaceship;

function setup() {
  createCanvas(400, 400,WEBGL);
  enemys = new Enemy;
  spaceship = new ship;
}


function draw() {
  background(220);
  enemys.show();
  spaceship.move(mouseX);
  spaceship.show();


}


class Enemy {
  constructor(x) {
    this.x = 0;
  }

  show() {
    stroke(0);
    strokeWeight(1);
    push();
    translate(150,100,0);
    fill(88,0,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(10,60);
    pop();
  }
  
  
}

class ship {
    constructor() {
        this.x = (-200,200);
        this.y = 150;
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