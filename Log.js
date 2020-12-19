//log is a subClass for the superClass parent
class Log extends BaseClass { 
    constructor(x, y, height, angle) {
      //values used to make the wood
      super(x,y,20,height,angle);
      //loading the image
      this.image = loadImage("sprites/wood2.png");
    
      //setting angle for the log
      Matter.Body.setAngle(this.body, angle);
     
    }
  
  };
  