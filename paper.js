class Paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
    this.img=loadImage("paper.png");

      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS)
  imageMode(CENTER);
  image(this.img, 0,0,this.radius, this.radius)
 // strokeWeight(3);
 // stroke("GREEN");
  
     // fill(255);
     // ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  