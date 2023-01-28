class Ground{

    constructor(){
        var ground_options={
            // is static so that the ground remains in one place
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        // rect because the ground is rectangular
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}