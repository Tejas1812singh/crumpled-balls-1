class Paper{
    constructor(x,y)
    {
    Matter.Bodies.circle(x, y, radius, options)

    options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    display()
    {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        
        fill(255);
        image(this.image, 0, 0,this.width, this.height);
        pop();
      

     
    }
}
}
