class BALL
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2,

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image = loadImage("Pasted Graphic 3.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			if (this.body.velocityX > 3 ) {
                visibility = false;
			}
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image, 0,0,this.r+50, this.r+50)
			fill("green")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}