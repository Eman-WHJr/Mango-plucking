class tree
{
	constructor(x,y)
	{
		this.width=450;
		this.height=600;
		this.thickness=10;

		this.image=loadImage("images/tree.png")

		this.bottomBody=Bodies.rectangle(x, y, this.width, this.thickness, {isStatic:true})
		this.leftBody=Bodies.rectangle(0, y-this.height/2, this.thickness, this.height, {isStatic:false})
		this.rightBody=Bodies.rectangle(x+this.width/2, y-this.height/2, this.thickness, this.height, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}

}