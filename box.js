    class Box{
      constructor(x, y, width, height) {
          var options = {
             
            'restitution':0.51,
            'friction':0.2,
            'density':0.1
             
          }
          this.visibility = 225;
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
          
        }
        Score(){
          if(this.visibility<0 && this.visibility >-105){
            score = score +1;
          }
        }
        display(){
          console.log(this.body.speed);
          if(this.body.speed <3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill(255,126,56);
          stroke(0);
          rect(0, 0, this.width, this.height);
          pop();
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          pop();
          
        }
      }
  }
