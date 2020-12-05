class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("dustbingreen.png")

     this.leftbody = Bodies.rectangle(x-100,y-50,20,100, {isStatic:true} );
 	World.add(world, this.leftbody);

	 this.rightbody = Bodies.rectangle(x+100,y-50,20,100, {isStatic:true} );
 	World.add(world,this.rightbody);

	this.basebody = Bodies.rectangle(x,y,200,20, {isStatic:true} );
     World.add(world, this.basebody);
     
    }
    display(){
      
      rectMode(CENTER);
      fill("brown");

      rect(this.leftbody.position.x,this.leftbody.position.y,20,100)
rect(this.rightbody.position.x,this.rightbody.position.y,20,100)
rect(this.basebody.position.x,this.basebody.position.y,200,20)

imageMode(CENTER);
 image(this.image,this.basebody.position.x,this.basebody.position.y,230,200)

    }
  };