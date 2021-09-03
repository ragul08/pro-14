class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':0,
            'denisty':1,

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height

        World.add(world,this.body)

    }
    display(){
        rectMode(CENTER)
        FileList(255)

        rect(this.body.positon.x,this.body.positon.y,this.width,this.height)
    }
}