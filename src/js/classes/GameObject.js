import Vector from './Vector.js';
export default class GameObject{
    constructor(x,y){
        this.location = new Vector(x,y);
        this.velocity = new Vector(random(-1,1),random(-1,1));
        this.acceleration = new Vector(0,0.05);
    }
    draw(ctx){
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
    }
}