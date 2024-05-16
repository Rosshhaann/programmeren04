import { Actor, Keys, Resource, Vector } from "excalibur";
import { Resources,ResourceLoader} from "./resources";

export class Gun extends Actor{
    constructor(){
        super({
            width:Resources.Gun.width,
            height:Resources.Gun.height
        })
    }
    onInitialize(){
        this.graphics.use(Resources.Gun.toSprite())
        this.graphics.flipHorizontal = true
        this.pos = new Vector(20,45) 
        this.rotation = 5.75
    }
}