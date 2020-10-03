class Package{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER) 
        rect(pos.x,pos.y,this.width,this.height); 
    }
}