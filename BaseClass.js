class BaseClass{
    constructor(x, y, width, height, angle) { // adiing the parameters
        var options = { // creating variable for options
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options); // creating the rectangle
        this.width = width;  // adding the width
        this.height = height; // adding the height
        this.image = loadImage("sprites/base.png"); // adding the image
        World.add(world, this.body); // adding the body to world
      }
      display(){
        var angle = this.body.angle; // creating variable for angle
        push();
        translate(this.body.position.x, this.body.position.y); // the position of the body changes
        rotate(angle); // the angle of the body changes
        imageMode(CENTER); // the image placed in the center
        image(this.image, 0, 0, this.width, this.height); // displaying the image
        pop();
      }
}