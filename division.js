class Divisions {
    constructor(x,y,w,h){
        var options = {

        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
}
display(){
    var ps = this.body.position;
    rectMode(CENTER);
fill ("white");
rect(ps.x, ps.y, this.w, this.h);

}
};