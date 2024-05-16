import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Bullet extends Actor{

    constructor(pos){
        super({
            radius:5,
        })
        this.pos = pos
        this.scale = new Vector(2,2)
        this.vel = new Vector(500,0)
        this.rotation = 1.6



    }
    onInitialize(){
        this.graphics.use(Resources.Bullet.toSprite())
    }
}



