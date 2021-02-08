class Log extends BaseClass { // sub class extends
    constructor(x, y, height, angle) { // adding the parameters

     super(x,y,20,height,angle); // taking the parameters from base class
     this.image= loadImage("sprites/wood2.png"); // adding the image
     Matter .Body.setAngle(this.body,angle); // adding the angle
    }

    };
  