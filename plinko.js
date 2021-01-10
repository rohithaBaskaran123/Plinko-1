class Plinko {
    constructor(x,y,radius){
        var options = {

        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,radius,options);
    this.radius=radius
    World.add(world, this.body);
}
display(){
    var ps = this.body.position;
    rectMode(CENTER);
fill ("white");
rect(ps.x, ps.y, this.radius);

}
};