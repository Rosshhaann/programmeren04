import { Actor, CollisionType, DisplayMode, Scene, Sprite, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class Background extends Actor {

    constructor() {
        super({
            width: Resources.Stars.width,
            height: Resources.Stars.height,
        })
    }
    sprite 
    onInitialize(engine) {
        console.log("Background loaded");
        this.sprite = new Sprite({
            image: Resources.Stars,
            sourceView: {
                x: 0,
                y: 0,
                width:engine.drawWidth*5,
                height:engine.drawHeight*5
            }
        })
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.x += 0.2 * delta;
    
    }
}