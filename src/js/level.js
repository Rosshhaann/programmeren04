import { Color, CoordPlane, FontUnit, Label, Scene, Vector } from "excalibur";
import { Goku } from "./goku"
import { Background } from "./background";
import { Freeza } from "./freeza.js";

export class Level extends Scene {
    onInitialize(engine) {
        const background = new Background()
        this.add(background)

        const goku = new Goku()
        this.add(goku)


        const smallEnemy = new Freeza()
        this.add(smallEnemy)

 



    }
    onActivate(ctx) {
        console.log("reset het level")
    }

}