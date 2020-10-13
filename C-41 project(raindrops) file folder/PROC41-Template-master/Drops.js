class Drops{
    constructor(x,y){

        var options ={
           friction: 0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body)
    }


    display(){

       var pos = this.body.position;
       ellipseMode(CENTER);
       fill("blue")
       ellipse(pos.x,pos.y,5,5  );





    }
}