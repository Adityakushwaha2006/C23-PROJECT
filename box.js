class box{
    constructor (x,y,width,height){
        var box_options={
            isStatic:true,
        restitution:0.2,
    friction:1,
    density:1
        }
        
    this.body=Bodies.rectangle(x,y,width,height,box_options);
    this.width=width;
    this.height=height;

    this.image=loadImage("wall.png")
    
    
    World.add(world,this.body);
    
    }
display(){

    var pos=this.body.position;
    push ();
    translate(pos.x,pos.y);
    
     
    
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green")
    fill(0,590,0);
    image(this.image,0,0,this.width,this.height);
    pop();
}
}