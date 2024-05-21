import { Buttons, Color, Font, Label, Scene, Timer, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Gamewon extends Scene {
    onInitialize(engine) {
        const gameWon = new Label({
            text: `GEWONNEN MONKEY!`,
           
            // font: new Font({ color: Color.Red, size: 30 }),
        })
        gameWon.pos =new Vector(engine.halfDrawWidth - 250, engine.halfDrawHeight);
        gameWon.font.family = 'Sans-serif';
        gameWon.font.bold = true;
        gameWon.font.size = 50;
        gameWon.color = Color.Yellow;
        gameWon.scale = new Vector(2, 2);
        gameWon.actions.repeatForever(ctx => ctx.blink(1000, 1000, 400));
        this.add(gameWon)
    }

}