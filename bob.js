class Bob {
    constructor(x,y,r){
        var options ={
            isStatic:false,
            restitution:1,
            friction :0,
            density:0.8,
        }
        this.body =Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
this.r=r
        console.log(this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(0,0,this.r/2);
        pop();
    }
}