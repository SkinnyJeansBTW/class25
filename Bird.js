//bird is a subClass for parentClass
class Bird extends BaseClass{
  constructor(x,y){
    //making the values of bird
    super(x,y,50,50);
    //loading bird Image
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //wherever the pointer is is where the bird is
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //display
    super.display();
  }
}