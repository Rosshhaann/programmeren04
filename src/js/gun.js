import { Actor, Keys, Resource, Vector } from "excalibur";
import { Resources,ResourceLoader} from "./resources";

export class Gun extends Actor{
    constructor(){
        super({
            width:Resources.Gun.width,
            height:Resources.Gun.height,
        })
    }
    onInitialize(){
        this.graphics.use(Resources.Gun.toSprite())
        this.pos = new Vector(30,10) 
    }
    
    
}