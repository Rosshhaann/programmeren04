import { Actor, Keys, Resource, Vector } from "excalibur";
import { Resources,ResourceLoader} from "./resources";

export class Wave extends Actor{
    constructor(){
        super({
            width:Resources.Wave.width,
            height:Resources.Wave.height,
        })
    }
    onInitialize(){
        this.graphics.use(Resources.Wave.toSprite())
        this.pos = new Vector(30,10) 
    }
    
    
}