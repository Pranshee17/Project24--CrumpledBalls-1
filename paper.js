class Paper {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = 100;
        pos.y = 400;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("white");
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    } 
}