import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Bullet extends Actor{

    constructor(pos){
        super({
            radius:5,
        })
        this.pos = pos
        this.scale = new Vector(3,3)
        this.vel = new Vector(700,0)




    }
    onInitialize(){
        this.graphics.use(Resources.Bullet.toSprite())
    }
}



