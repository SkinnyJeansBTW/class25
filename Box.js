//subclass
class Box extends BaseClass { 

  constructor(x, y, width, height) {
    //values of box
    super(x,y,width,height);
    //load image
    this.image= loadImage("sprites/wood1.png");

  }
};
