class Drop{
    constructor(x,y){
        var options = {
            restitution : 0.1,
            friction : 0.001

        }

        this.drop = Bodies.circle(x,y,3,options);
        this.radius = 3;
        World.add(world,this.drop);
      
    }

    display(){
        fill("blue");

        var pos = this.drop.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    updateDrops(){

        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
        }
    }
}