class Bird extends BaseClass{ // sub class extends
  constructor(x,y){ // adding the parameters
    super(x,y,50,50); // adding parameters from base class
    this.image = loadImage("sprites/bird.png"); // loading the image
  }
  display(){
    this.body.position.x = mouseX; // x position of the body is equal to the x position of mouse
    this.body.position.y = mouseY; // y position of body is equal to y position of mouse
    super.display();
  }
}