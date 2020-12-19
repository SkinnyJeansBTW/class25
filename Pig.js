//pig is a subClass for the SuperClass parent
class Pig extends BaseClass {
    constructor(x, y) {
 //values which i use to make the enemy
      super(x,y,50,50);
      //load Image
      this.image = loadImage("sprites/enemy.png");
    }
  };
  