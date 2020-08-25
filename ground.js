class Ground {
    constructor(x,y,width,height) {
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
        var options = {
            isStatic: true
      }
      
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };