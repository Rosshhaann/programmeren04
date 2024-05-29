import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Background } from "./background";

export class Home extends Scene {
    onInitialize(engine) {
        this.greetingsLabel = new Label({
            text: `Welkom! Versla de vijand en win het spel`,
            pos: new Vector(600, 450),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.greetingsLabel)

        this.enterLevelLabel = new Label({
            text: `KLIK OP MIJ, om te beginnen !!!`,
            pos: new Vector(600, 650),
            font: new Font({ color: Color.Red, size: 30 }),
        });
        this.add(this.enterLevelLabel)
        this.enterLevelLabel.on('pointerdown', () => {
            engine.goToScene('level')
        });
    }

}