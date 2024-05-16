
import { Enemy } from "./enemy";
import { Resources } from "./resources";
import { Bullet } from "./bullet.js";
import { Vector } from "excalibur";
/// specificatie een van de enemey
 export class Fish extends Enemy {
    
    constructor() {
        super()

     

    }
    onInitialize(){
        console.log("Fish is created")
        this.graphics.use(Resources.Fish.toSprite())


        this.pos = new Vector(2000, Math.floor(Math.random() * 1080))
        this.vel = new Vector(Math.random() * -1200, 0)

        
        // eventlisteners
        this.on('collisionstart', (event) => { this.killFish(event) })
        this.on("exitviewport", () => this.resetPositionFish())
    }
    killFish(event) {
        if (event.other instanceof Bullet) {
            this.pos = new Vector(2000, Math.floor(Math.random() * 1080))
            event.other.kill()
        }

    }
    resetPositionFish(){
            this.pos = new Vector(2000, Math.floor(Math.random() * 1080))
    }
}