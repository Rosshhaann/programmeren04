import { Buttons, Color, Font, Label, Scene, Timer, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Gamewon extends Scene {
    onInitialize(engine) {
        console.log(this);
        this.backgroundColor = Color.Gray

        this.scoreLabel = new Label({
            text: `You have defeated the enemy! GOOD JOB`,
            pos: new Vector(100, 300),
            font: new Font({ color: Color.White, size: 50}),
        });

        
 
        this.add(this.scoreLabel)
    }

}