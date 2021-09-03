class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'denisty':1.2,

        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius

        World.add(world,this.body)

    }
    display(){
        ellipseMode(RADIUS)
        fill("yellow")

        ellipse(this.body.positon.x,this.body.positon.y,this.radius)
    }
}