class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			friction:1,
			density:1.2
			}
		this.r=r;
		this.body=Bodies.circle(x, y, this.r/2, options);
	    this.image=loadImage("images/stone.png");
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}