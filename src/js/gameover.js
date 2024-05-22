import { Color, Font, Label, Scene, System, Vector } from "excalibur";

export class Gameover extends Scene {
    onInitialize(engine) {
        const gameOver = new Label({
            text: `GET REKT NOOB!`,
           
        })
        gameOver.pos =new Vector(engine.halfDrawWidth - 250, engine.halfDrawHeight);
        gameOver.font.family = 'Sans-serif';
        gameOver.font.bold = true;
        gameOver.font.size = 50;
        gameOver.color = Color.Yellow;
        gameOver.scale = new Vector(2, 2);
        gameOver.actions.repeatForever(ctx => ctx.blink(1000, 1000, 400));
        this.add(gameOver)

    }

}