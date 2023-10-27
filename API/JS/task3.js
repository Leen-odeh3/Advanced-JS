class Animal {
    
  constructor(color) {
    this.color = color;
    console.log("new object");
  }

  move() {
    console.log("move");
  }
  jump() {
    console.log("jump");
  }
}

let lion = new Animal("red");
lion.move();
lion.jump();

let bird = new Animal("yellow");

console.log(lion.color);
console.log(bird.color);
