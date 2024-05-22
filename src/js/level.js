import { Color, CoordPlane, FontUnit, Label, Scene, Vector } from "excalibur";
import { Goku } from "./goku"
import { Background } from "./background";
import { Freeza } from "./freeza.js";
import { UI } from "./ui.js";

export class Level extends Scene {
    onInitialize(engine) {
        const background = new Background()
        this.add(background)

        this.goku = new Goku()
        this.add(this.goku)



        const smallEnemy = new Freeza(10)
        this.add(smallEnemy)

        this.ui = new UI()
        this.add(this.ui)
    }

    onActivate(ctx) {
        console.log("reset het level")
    }


}