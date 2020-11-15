class pack{
    constructor (x,y){
        var pack_options={
            isStatic:false,
        restitution:1.1,
    friction:1,
    density:1
    
        }
        
    this.body=Bodies.rectangle(x,y,50,50,pack_options);
    this.width=50;
    this.height=50;

    this.image=loadImage("package.png")
    
    
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