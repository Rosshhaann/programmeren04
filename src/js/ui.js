import { Actor, Color, Font, FontUnit, Label, ScreenElement, Vector } from "excalibur";
import { Resources } from "./resources.js";
export class UI extends ScreenElement {
    score
    scoreLabel
    onInitialize(engine) {


        // score
        this.score = 0;
        this.scoreLabel;

        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(20,30),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 25,
                color: Color.White
            }),
        });
        this.addChild(this.scoreLabel)

        // backdrop levens
        let barbackground = new Actor({ x: 20, y: 55, color: Color.Gray, width: 210, height: 30 })
        barbackground.graphics.anchor = Vector.Zero
        this.addChild(barbackground)

        // levens
        this.healthbar = new Actor({ x: 25, y: 60, color: Color.Green, width: 200, height: 20 })
        this.healthbar.graphics.anchor = Vector.Zero
        this.addChild(this.healthbar)

 

        // aantal bullets onderaan het scherm
    }
    //    update als ik 1 van de 3 levens verlies
        updateScore(score) {
            console.log("test");
            this.score += score
            this.scoreLabel.text = `Score ${this.score}`
        }


}