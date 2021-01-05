class launcher{
	constructor(bodyA,anchor)
	{
		
		var options={ 
			bodyA:bodyA,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		this.bodyA=bodyA;
		this.pointB=anchor;
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(bodyA){
		this.launcher.bodyA=bodyA;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}